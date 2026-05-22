import { View, Text, TextInput, type TextInputProps } from "react-native";
import { useState } from "react";
import { useColorScheme } from "nativewind";

export interface TextareaProps extends Omit<TextInputProps, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export function Textarea({
  label,
  description,
  errorMessage,
  rows = 3,
  disabled = false,
  className,
  ...props
}: TextareaProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [focused, setFocused] = useState(false);

  const borderColor = errorMessage
    ? isDark ? "#ef4444" : "#f87171"
    : focused
      ? isDark ? "#818cf8" : "#4f46e5"
      : isDark ? "#262626" : "#e5e5e5";

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
      <TextInput
        multiline
        numberOfLines={rows}
        textAlignVertical="top"
        style={{
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor,
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          paddingHorizontal: 12,
          paddingVertical: 10,
          fontSize: 14,
          color: isDark ? "#ffffff" : "#171717",
          minHeight: rows * 22 + 20,
          opacity: disabled ? 0.5 : 1,
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
