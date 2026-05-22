import { Pressable, View, Text, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface SwitchProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { track: "h-4 w-7", thumb: "h-3 w-3", translate: 12 },
  md: { track: "h-5 w-9", thumb: "h-4 w-4", translate: 16 },
  lg: { track: "h-6 w-11", thumb: "h-5 w-5", translate: 20 },
} as const;

export function Switch({
  children,
  size = "md",
  isSelected: controlledSelected,
  defaultSelected = false,
  onChange,
  isDisabled = false,
  className,
}: SwitchProps) {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;
  const translateX = useRef(new Animated.Value(isSelected ? sizeConfig[size].translate : 0)).current;

  const thumbScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: isSelected ? sizeConfig[size].translate : 0,
        useNativeDriver: true,
        damping: 15,
        stiffness: 250,
      }),
      Animated.sequence([
        Animated.spring(thumbScale, { toValue: 1.2, useNativeDriver: true, damping: 15, stiffness: 400 }),
        Animated.spring(thumbScale, { toValue: 1, useNativeDriver: true, damping: 12, stiffness: 200 }),
      ]),
    ]).start();
  }, [isSelected, size, translateX, thumbScale]);

  const { trigger } = useHaptic();

  const handlePress = () => {
    if (isDisabled) return;
    trigger("light");
    const next = !isSelected;
    if (controlledSelected === undefined) setInternalSelected(next);
    onChange?.(next);
  };

  return (
    <Pressable
      className={cn(
        "flex-row items-center gap-2",
        isDisabled && "opacity-50",
        className,
      )}
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: isSelected, disabled: isDisabled }}
    >
      <View
        className={cn(
          "rounded-full p-0.5",
          sizeConfig[size].track,
          isSelected ? "bg-indigo-600" : "bg-neutral-300 dark:bg-neutral-700",
        )}
      >
        <Animated.View
          className={cn("rounded-full bg-white", sizeConfig[size].thumb)}
          style={{ transform: [{ translateX }, { scale: thumbScale }] }}
        />
      </View>
      {children && (
        <Text className="text-sm text-neutral-700 dark:text-neutral-300">
          {children}
        </Text>
      )}
    </Pressable>
  );
}
