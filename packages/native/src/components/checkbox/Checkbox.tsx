import { Pressable, View, Text, Animated } from "react-native";
import { useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface CheckboxProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  className?: string;
}

const sizeStyles: Record<string, { box: string; check: string; text: string }> = {
  sm: { box: "h-3.5 w-3.5", check: "h-2.5 w-2.5", text: "text-sm" },
  md: { box: "h-4 w-4", check: "h-3 w-3", text: "text-sm" },
  lg: { box: "h-5 w-5", check: "h-3.5 w-3.5", text: "text-base" },
};

export function Checkbox({
  children,
  size = "md",
  isSelected: controlledSelected,
  defaultSelected = false,
  onChange,
  isDisabled = false,
  className,
}: CheckboxProps) {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const scale = useRef(new Animated.Value(1)).current;
  const checkScale = useRef(new Animated.Value(isSelected ? 1 : 0)).current;
  const { trigger } = useHaptic();

  const handlePress = useCallback(() => {
    if (isDisabled) return;
    const next = !isSelected;
    trigger("light");

    // Bounce the whole checkbox
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.85, useNativeDriver: true, damping: 15, stiffness: 400 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, damping: 10, stiffness: 200 }),
    ]).start();

    // Animate checkmark in/out
    Animated.spring(checkScale, {
      toValue: next ? 1 : 0,
      useNativeDriver: true,
      damping: 12,
      stiffness: 300,
    }).start();

    if (controlledSelected === undefined) setInternalSelected(next);
    onChange?.(next);
  }, [isDisabled, isSelected, controlledSelected, onChange, scale, checkScale]);

  return (
    <Pressable
      className={cn(
        "flex-row items-center gap-2",
        isDisabled && "opacity-50",
        className,
      )}
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isSelected, disabled: isDisabled }}
    >
      <Animated.View
        style={{ transform: [{ scale }] }}
        className={cn(
          "items-center justify-center rounded border-2",
          sizeStyles[size].box,
          isSelected
            ? "border-indigo-600 bg-indigo-600"
            : "border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-950",
        )}
      >
        <Animated.View style={{ transform: [{ scale: checkScale }] }}>
          {isSelected && (
            <Text className={cn("text-white font-bold", sizeStyles[size].check)}>✓</Text>
          )}
        </Animated.View>
      </Animated.View>
      {children && (
        <Text className={cn("text-neutral-700 dark:text-neutral-300", sizeStyles[size].text)}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}
