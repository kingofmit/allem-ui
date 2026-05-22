import { View, Text, TextInput, type TextInputProps } from "react-native";
import { useState } from "react";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface InputProps extends Omit<TextInputProps, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

const sizePadding: Record<string, { paddingHorizontal: number; paddingVertical: number; fontSize: number }> = {
  sm: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 13 },
  md: { paddingHorizontal: 12, paddingVertical: 10, fontSize: 14 },
  lg: { paddingHorizontal: 16, paddingVertical: 14, fontSize: 16 },
};

export function Input({
  label,
  description,
  errorMessage,
  size = "md",
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  ...props
}: InputProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [focused, setFocused] = useState(false);

  const borderColor = errorMessage
    ? isDark ? "#ef4444" : "#f87171"
    : focused
      ? isDark ? "#818cf8" : "#4f46e5"
      : isDark ? "#262626" : "#e5e5e5";

  const sizeConfig = sizePadding[size];

  return (
    <View style={{ gap: 6 }}>
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor,
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          opacity: disabled ? 0.5 : 1,
          paddingHorizontal: sizeConfig.paddingHorizontal,
        }}
      >
        {leftIcon && (
          <View style={{ marginRight: 8 }}>{leftIcon}</View>
        )}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: sizeConfig.paddingVertical,
            fontSize: sizeConfig.fontSize,
            color: isDark ? "#ffffff" : "#171717",
          }}
          placeholderTextColor={isDark ? "#525252" : "#a3a3a3"}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          editable={!disabled}
          accessibilityLabel={label}
          accessibilityHint={description}
          accessibilityState={{ disabled }}
          {...props}
        />
        {rightIcon && (
          <View style={{ marginLeft: 8 }}>{rightIcon}</View>
        )}
      </View>
      {description && !errorMessage && (
        <Text
          style={{
            fontSize: 12,
            color: isDark ? "#737373" : "#a3a3a3",
          }}
        >
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text
          style={{
            fontSize: 12,
            color: isDark ? "#f87171" : "#dc2626",
          }}
          accessibilityRole="alert"
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
