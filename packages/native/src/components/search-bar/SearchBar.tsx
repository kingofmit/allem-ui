import { View, TextInput, Text, Pressable, Animated } from "react-native";
import { useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  showCancel?: boolean;
  autoFocus?: boolean;
  icon?: ReactNode;
  clearIcon?: ReactNode;
  className?: string;
}

export function SearchBar({
  value = "",
  onChangeText,
  onSubmit,
  onCancel,
  placeholder = "Search...",
  showCancel = true,
  autoFocus = false,
  icon,
  clearIcon,
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const cancelWidth = useRef(new Animated.Value(0)).current;
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleFocus = useCallback(() => {
    setFocused(true);
    if (showCancel) {
      Animated.timing(cancelWidth, {
        toValue: 70,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [showCancel, cancelWidth]);

  const handleCancel = useCallback(() => {
    setFocused(false);
    onChangeText?.("");
    onCancel?.();
    inputRef.current?.blur();
    if (showCancel) {
      Animated.timing(cancelWidth, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [showCancel, cancelWidth, onChangeText, onCancel]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 12,
          paddingHorizontal: 12,
          height: 42,
          backgroundColor: isDark ? "#262626" : "#f5f5f5",
          borderWidth: focused ? 1.5 : 0,
          borderColor: focused ? "#4f46e5" : "transparent",
        }}
      >
        <View style={{ marginRight: 8 }}>
          {icon || <Text style={{ color: "#9ca3af", fontSize: 16 }}>🔍</Text>}
        </View>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={() => !value && handleCancel()}
          onSubmitEditing={() => { selection(); onSubmit?.(value); }}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          returnKeyType="search"
          autoFocus={autoFocus}
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            flex: 1,
            fontSize: 15,
            color: isDark ? "#ffffff" : "#171717",
            paddingVertical: 0,
          }}
          accessibilityLabel="Search"
        />
        {value.length > 0 && (
          <Pressable
            onPress={() => onChangeText?.("")}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            style={{ padding: 4 }}
          >
            {clearIcon || (
              <Text style={{ color: isDark ? "#737373" : "#a3a3a3", fontSize: 16 }}>
                ✕
              </Text>
            )}
          </Pressable>
        )}
      </View>

      {showCancel && (
        <Animated.View style={{ width: cancelWidth, overflow: "hidden" }}>
          <Pressable
            onPress={handleCancel}
            accessibilityRole="button"
            accessibilityLabel="Cancel search"
            style={{ paddingLeft: 10 }}
          >
            <Text style={{ color: isDark ? "#818cf8" : "#4f46e5", fontSize: 14 }}>
              Cancel
            </Text>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}
