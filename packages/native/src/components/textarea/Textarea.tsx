import { View, Text, TextInput, type TextInputProps } from "react-native";
import { useState } from "react";
import { cn } from "../../utils/cn";

export interface TextareaProps extends Omit<TextInputProps, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  rows?: number;
  className?: string;
}

export function Textarea({
  label,
  description,
  errorMessage,
  rows = 3,
  className,
  ...props
}: TextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View className={cn("gap-1.5", className)}>
      {label && (
        <Text className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Text>
      )}
      <TextInput
        multiline
        numberOfLines={rows}
        textAlignVertical="top"
        className={cn(
          "rounded-lg border bg-white px-3 py-2 text-sm text-neutral-900 dark:bg-neutral-950 dark:text-white",
          errorMessage
            ? "border-red-400 dark:border-red-500"
            : focused
              ? "border-indigo-500 dark:border-indigo-400"
              : "border-neutral-200 dark:border-neutral-800",
        )}
        placeholderTextColor="#a3a3a3"
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        accessibilityLabel={label}
        accessibilityHint={description}
        accessibilityState={{ disabled: props.editable === false }}
        {...props}
      />
      {description && !errorMessage && (
        <Text className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text className="text-xs text-red-500 dark:text-red-400" accessibilityRole="alert">
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
