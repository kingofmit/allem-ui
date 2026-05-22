import { Pressable, View, Text, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface SwitchProps {
  children?: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  className?: string;
}

const sizeConfig: Record<string, { trackW: number; trackH: number; thumbSize: number; translate: number; padding: number }> = {
  sm: { trackW: 36, trackH: 20, thumbSize: 14, translate: 16, padding: 3 },
  md: { trackW: 44, trackH: 24, thumbSize: 18, translate: 20, padding: 3 },
  lg: { trackW: 52, trackH: 28, thumbSize: 22, translate: 24, padding: 3 },
};

const labelFontSizes: Record<string, number> = { sm: 13, md: 14, lg: 16 };

export function Switch({
  children,
  label,
  size = "md",
  isSelected: controlledSelected,
  defaultSelected = false,
  onChange,
  isDisabled = false,
}: SwitchProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const config = sizeConfig[size];
  const translateX = useRef(new Animated.Value(isSelected ? config.translate : 0)).current;
  const thumbScale = useRef(new Animated.Value(1)).current;
  const { trigger } = useHaptic();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: isSelected ? config.translate : 0,
        useNativeDriver: true,
        damping: 15,
        stiffness: 250,
      }),
      Animated.sequence([
        Animated.spring(thumbScale, { toValue: 1.2, useNativeDriver: true, damping: 15, stiffness: 400 }),
        Animated.spring(thumbScale, { toValue: 1, useNativeDriver: true, damping: 12, stiffness: 200 }),
      ]),
    ]).start();
  }, [isSelected]);

  const handlePress = () => {
    if (isDisabled) return;
    trigger("light");
    const next = !isSelected;
    if (controlledSelected === undefined) setInternalSelected(next);
    onChange?.(next);
  };

  const displayLabel = label || (typeof children === "string" ? children : null);

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: isSelected, disabled: isDisabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      <View
        style={{
          width: config.trackW,
          height: config.trackH,
          borderRadius: config.trackH / 2,
          backgroundColor: isSelected
            ? "#4f46e5"
            : isDark ? "#404040" : "#d4d4d4",
          padding: config.padding,
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            width: config.thumbSize,
            height: config.thumbSize,
            borderRadius: config.thumbSize / 2,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            transform: [{ translateX }, { scale: thumbScale }],
          }}
        />
      </View>
      {displayLabel && (
        <Text
          style={{
            fontSize: labelFontSizes[size],
            color: isDark ? "#d4d4d4" : "#404040",
          }}
        >
          {displayLabel}
        </Text>
      )}
      {typeof children !== "string" && children}
    </Pressable>
  );
}
