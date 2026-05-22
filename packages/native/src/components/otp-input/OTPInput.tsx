import { View, TextInput, Text, Animated } from "react-native";
import { useState, useRef, useCallback } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

const cellSizes: Record<string, { width: number; height: number }> = {
  sm: { width: 40, height: 40 },
  md: { width: 48, height: 48 },
  lg: { width: 56, height: 56 },
};

const fontSizes: Record<string, number> = {
  sm: 18,
  md: 20,
  lg: 24,
};

export function OTPInput({
  length = 6,
  value = "",
  onChange,
  onComplete,
  size = "md",
  error = false,
  errorMessage,
}: OTPInputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const digits = value.split("").concat(Array(length).fill("")).slice(0, length);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const cellScales = useRef(Array.from({ length }, () => new Animated.Value(1))).current;
  const completionScale = useRef(new Animated.Value(1)).current;
  const { trigger } = useHaptic();

  const handleChange = useCallback(
    (text: string) => {
      const cleaned = text.replace(/[^0-9]/g, "").slice(0, length);
      onChange?.(cleaned);

      if (cleaned.length > value.length) trigger("light");

      if (cleaned.length > value.length && cleaned.length <= length) {
        const idx = cleaned.length - 1;
        Animated.sequence([
          Animated.spring(cellScales[idx], { toValue: 1.15, useNativeDriver: true, damping: 10, stiffness: 400 }),
          Animated.spring(cellScales[idx], { toValue: 1, useNativeDriver: true, damping: 12, stiffness: 200 }),
        ]).start();
      }

      if (cleaned.length === length) {
        trigger("success");
        Animated.sequence([
          Animated.spring(completionScale, { toValue: 1.05, useNativeDriver: true, damping: 8, stiffness: 300 }),
          Animated.spring(completionScale, { toValue: 1, useNativeDriver: true, damping: 10, stiffness: 200 }),
        ]).start();
        onComplete?.(cleaned);
        inputRef.current?.blur();
      }
    },
    [length, onChange, onComplete, value.length, cellScales, completionScale],
  );

  const getBorderColor = (digit: string, isActive: boolean) => {
    if (error) return "#ef4444";
    if (isActive) return "#4f46e5";
    if (digit) return isDark ? "#737373" : "#a3a3a3";
    return isDark ? "#525252" : "#d4d4d4";
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View style={{ flexDirection: "row", gap: 8, transform: [{ scale: completionScale }] }}>
        {digits.map((digit, i) => {
          const isActive = focused && i === Math.min(value.length, length - 1);
          return (
            <Animated.View
              key={i}
              style={{
                transform: [{ scale: cellScales[i] }],
                ...cellSizes[size],
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderWidth: 2,
                borderColor: getBorderColor(digit, isActive),
                backgroundColor: isDark ? "#171717" : "#ffffff",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: fontSizes[size],
                  color: isDark ? "#ffffff" : "#171717",
                  textAlign: "center",
                }}
              >
                {digit}
              </Text>
            </Animated.View>
          );
        })}
      </Animated.View>

      {/* Hidden input */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        keyboardType="number-pad"
        maxLength={length}
        caretHidden
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        accessibilityLabel="Enter verification code"
        accessibilityHint={`Enter ${length} digit code`}
      />

      {/* Tap area */}
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        onTouchEnd={() => inputRef.current?.focus()}
      />

      {error && errorMessage && (
        <Text
          style={{ fontSize: 12, color: "#ef4444", marginTop: 8 }}
          accessibilityRole="alert"
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
