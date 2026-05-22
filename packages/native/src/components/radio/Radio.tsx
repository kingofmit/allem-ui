import { Pressable, View, Text, Animated } from "react-native";
import { createContext, useContext, useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

interface RadioGroupContextValue {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface RadioProps {
  value: string;
  children?: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  value: controlledValue,
  defaultValue = "",
  onChange,
  isDisabled = false,
  children,
  className,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onChange: handleChange, disabled: isDisabled }}>
      <View className={cn("gap-2", className)} accessibilityRole="radiogroup">
        {label && (
          <Text className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </Text>
        )}
        <View className="gap-2">{children}</View>
        {description && !errorMessage && (
          <Text className="text-xs text-neutral-500 dark:text-neutral-400">
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text className="text-xs text-red-500 dark:text-red-400" accessibilityRole="alert">{errorMessage}</Text>
        )}
      </View>
    </RadioGroupContext.Provider>
  );
}

export function Radio({ value, children, isDisabled = false, className }: RadioProps) {
  const context = useContext(RadioGroupContext);
  if (!context) throw new Error("Radio must be used within RadioGroup");

  const isSelected = context.value === value;
  const disabled = isDisabled || context.disabled;
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

  return (
    <Pressable
      className={cn(
        "flex-row items-center gap-2",
        disabled && "opacity-50",
        className,
      )}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected, disabled }}
    >
      <Animated.View
        style={{ transform: [{ scale }] }}
        className={cn(
          "h-4 w-4 items-center justify-center rounded-full border-2",
          isSelected ? "border-indigo-600" : "border-neutral-300 dark:border-neutral-600",
        )}
      >
        {isSelected && (
          <Animated.View
            style={{ transform: [{ scale: dotScale }] }}
            className="h-2 w-2 rounded-full bg-indigo-600"
          />
        )}
      </Animated.View>
      {children && (
        <Text className="text-sm text-neutral-700 dark:text-neutral-300">
          {children}
        </Text>
      )}
    </Pressable>
  );
}
