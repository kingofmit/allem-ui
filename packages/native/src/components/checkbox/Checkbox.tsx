import { Pressable, View, Text, Animated } from "react-native";
import { useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface CheckboxProps {
  children?: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  className?: string;
}

const boxSizes: Record<string, number> = { sm: 16, md: 20, lg: 24 };
const checkFontSizes: Record<string, number> = { sm: 10, md: 13, lg: 16 };
const labelFontSizes: Record<string, number> = { sm: 13, md: 14, lg: 16 };

export function Checkbox({
  children,
  label,
  size = "md",
  isSelected: controlledSelected,
  defaultSelected = false,
  onChange,
  isDisabled = false,
}: CheckboxProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const scale = useRef(new Animated.Value(1)).current;
  const checkScale = useRef(new Animated.Value(isSelected ? 1 : 0)).current;
  const { trigger } = useHaptic();

  const handlePress = useCallback(() => {
    if (isDisabled) return;
    const next = !isSelected;
    trigger("light");

    Animated.sequence([
      Animated.spring(scale, { toValue: 0.85, useNativeDriver: true, damping: 15, stiffness: 400 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, damping: 10, stiffness: 200 }),
    ]).start();

    Animated.spring(checkScale, {
      toValue: next ? 1 : 0,
      useNativeDriver: true,
      damping: 12,
      stiffness: 300,
    }).start();

    if (controlledSelected === undefined) setInternalSelected(next);
    onChange?.(next);
  }, [isDisabled, isSelected, controlledSelected, onChange, scale, checkScale]);

  const boxSize = boxSizes[size];
  const displayLabel = label || (typeof children === "string" ? children : null);

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isSelected, disabled: isDisabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      <Animated.View
        style={{
          transform: [{ scale }],
          width: boxSize,
          height: boxSize,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: isSelected
            ? "#4f46e5"
            : isDark ? "#525252" : "#d4d4d4",
          backgroundColor: isSelected
            ? "#4f46e5"
            : isDark ? "#0a0a0a" : "#ffffff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View style={{ transform: [{ scale: checkScale }] }}>
          {isSelected && (
            <Text
              style={{
                color: "#ffffff",
                fontSize: checkFontSizes[size],
                fontWeight: "700",
                lineHeight: checkFontSizes[size] + 2,
              }}
            >
              ✓
            </Text>
          )}
        </Animated.View>
      </Animated.View>
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
