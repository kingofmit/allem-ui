import { Pressable, View, Text, Animated } from "react-native";
import { createContext, useContext, useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

interface RadioGroupContextValue {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  size: "sm" | "md" | "lg";
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface RadioProps {
  value: string;
  label?: string;
  description?: string;
  children?: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const circleSizes: Record<string, number> = { sm: 16, md: 20, lg: 24 };
const dotSizes: Record<string, number> = { sm: 7, md: 9, lg: 11 };
const labelFontSizes: Record<string, number> = { sm: 13, md: 14, lg: 16 };

export function RadioGroup({
  label,
  description,
  errorMessage,
  value: controlledValue,
  defaultValue = "",
  onChange,
  size = "md",
  isDisabled = false,
  children,
}: RadioGroupProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onChange: handleChange, disabled: isDisabled, size }}>
      <View style={{ gap: 8 }} accessibilityRole="radiogroup">
        {label && (
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: isDark ? "#d4d4d4" : "#404040",
            }}
          >
            {label}
          </Text>
        )}
        <View style={{ gap: 12 }}>{children}</View>
        {description && !errorMessage && (
          <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3" }}>
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text
            style={{ fontSize: 12, color: isDark ? "#f87171" : "#dc2626" }}
            accessibilityRole="alert"
          >
            {errorMessage}
          </Text>
        )}
      </View>
    </RadioGroupContext.Provider>
  );
}

export function Radio({ value, label, description, children, isDisabled = false }: RadioProps) {
  const context = useContext(RadioGroupContext);
  if (!context) throw new Error("Radio must be used within RadioGroup");

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const isSelected = context.value === value;
  const disabled = isDisabled || context.disabled;
  const size = context.size;

  const scale = useRef(new Animated.Value(1)).current;
  const dotScale = useRef(new Animated.Value(isSelected ? 1 : 0)).current;
  const { selection } = useHaptic();

  const handlePress = useCallback(() => {
    if (disabled) return;
    selection();

    Animated.sequence([
      Animated.spring(scale, { toValue: 0.85, useNativeDriver: true, damping: 15, stiffness: 400 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, damping: 10, stiffness: 200 }),
    ]).start();

    Animated.spring(dotScale, {
      toValue: 1,
      useNativeDriver: true,
      damping: 12,
      stiffness: 300,
    }).start();

    context.onChange(value);
  }, [disabled, context, value, scale, dotScale]);

  const circleSize = circleSizes[size];
  const dotSize = dotSizes[size];
  const displayLabel = label || (typeof children === "string" ? children : null);

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected, disabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Animated.View
        style={{
          transform: [{ scale }],
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          borderWidth: 2,
          borderColor: isSelected
            ? "#4f46e5"
            : isDark ? "#525252" : "#d4d4d4",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSelected && (
          <Animated.View
            style={{
              transform: [{ scale: dotScale }],
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              backgroundColor: "#4f46e5",
            }}
          />
        )}
      </Animated.View>
      {(displayLabel || description) && (
        <View style={{ flex: 1 }}>
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
          {description && (
            <Text
              style={{
                fontSize: 12,
                color: isDark ? "#737373" : "#a3a3a3",
                marginTop: 1,
              }}
            >
              {description}
            </Text>
          )}
        </View>
      )}
      {typeof children !== "string" && children}
    </Pressable>
  );
}
