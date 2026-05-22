import { View, Text, Pressable, Modal, ScrollView, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface SelectItemData {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  items: SelectItemData[];
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string) => void;
  chevronIcon?: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const sizePadding: Record<string, { paddingHorizontal: number; paddingVertical: number; fontSize: number }> = {
  sm: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 13 },
  md: { paddingHorizontal: 12, paddingVertical: 10, fontSize: 14 },
  lg: { paddingHorizontal: 16, paddingVertical: 14, fontSize: 16 },
};

export function Select({
  label,
  description,
  errorMessage,
  placeholder = "Select...",
  size = "md",
  items,
  selectedKey: controlledKey,
  defaultSelectedKey = "",
  onSelectionChange,
  chevronIcon,
  isDisabled = false,
}: SelectProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();
  const [internalKey, setInternalKey] = useState(defaultSelectedKey);
  const [isOpen, setIsOpen] = useState(false);
  const [triggerPressed, setTriggerPressed] = useState(false);
  const { selection } = useHaptic();
  const slideAnim = useRef(new Animated.Value(400)).current;
  const backdropAnim = useRef(new Animated.Value(0)).current;

  const selectedKey = controlledKey !== undefined ? controlledKey : internalKey;
  const selectedItem = items.find((item) => item.id === selectedKey);
  const sizeConfig = sizePadding[size];

  const borderColor = errorMessage
    ? isDark ? "#ef4444" : "#f87171"
    : isDark ? "#262626" : "#e5e5e5";

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: 0, useNativeDriver: true, damping: 20, stiffness: 200 }),
        Animated.timing(backdropAnim, { toValue: 1, useNativeDriver: true, duration: 200 }),
      ]).start();
    }
  }, [isOpen]);

  const close = () => {
    Animated.parallel([
      Animated.spring(slideAnim, { toValue: 400, useNativeDriver: true, damping: 20, stiffness: 200 }),
      Animated.timing(backdropAnim, { toValue: 0, useNativeDriver: true, duration: 150 }),
    ]).start(() => setIsOpen(false));
  };

  const handleSelect = (key: string) => {
    selection();
    if (controlledKey === undefined) setInternalKey(key);
    onSelectionChange?.(key);
    close();
  };

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
      <Pressable
        onPress={() => !isDisabled && setIsOpen(true)}
        onPressIn={() => setTriggerPressed(true)}
        onPressOut={() => setTriggerPressed(false)}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityLabel={label ? `${label}: ${selectedItem?.label || placeholder}` : undefined}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor,
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          opacity: isDisabled ? 0.5 : triggerPressed ? 0.7 : 1,
          paddingHorizontal: sizeConfig.paddingHorizontal,
          paddingVertical: sizeConfig.paddingVertical,
        }}
      >
        <Text
          style={{
            fontSize: sizeConfig.fontSize,
            color: selectedItem
              ? isDark ? "#ffffff" : "#171717"
              : isDark ? "#525252" : "#a3a3a3",
            flex: 1,
          }}
        >
          {selectedItem?.label || placeholder}
        </Text>
        {chevronIcon || (
          <Text
            style={{
              fontSize: 10,
              color: isDark ? "#525252" : "#a3a3a3",
              marginLeft: 8,
            }}
          >
            ▼
          </Text>
        )}
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="none"
        onRequestClose={close}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Animated.View
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              opacity: backdropAnim,
            }}
          >
            <Pressable style={{ flex: 1 }} onPress={close} />
          </Animated.View>
          <Animated.View
            style={{
              backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              maxHeight: "60%",
              paddingBottom: insets.bottom + 8,
              transform: [{ translateY: slideAnim }],
            }}
          >
            {/* Handle */}
            <View style={{ alignItems: "center", paddingVertical: 12 }}>
              <View
                style={{
                  width: 36,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: isDark ? "#404040" : "#d4d4d4",
                }}
              />
            </View>
            {/* Title */}
            {label && (
              <Text
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 8,
                  fontSize: 13,
                  fontWeight: "600",
                  color: isDark ? "#737373" : "#a3a3a3",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {label}
              </Text>
            )}
            {/* Items */}
            <ScrollView>
              {items.map((item) => (
                <SelectItem
                  key={item.id}
                  item={item}
                  isSelected={item.id === selectedKey}
                  isDark={isDark}
                  onSelect={handleSelect}
                />
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>

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
  );
}

function SelectItem({
  item,
  isSelected,
  isDark,
  onSelect,
}: {
  item: SelectItemData;
  isSelected: boolean;
  isDark: boolean;
  onSelect: (key: string) => void;
}) {
  const [pressed, setPressed] = useState(false);

  const bgColor = pressed
    ? isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"
    : isSelected
      ? isDark ? "rgba(79,70,229,0.12)" : "rgba(79,70,229,0.06)"
      : "transparent";

  return (
    <Pressable
      onPress={() => !item.disabled && onSelect(item.id)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={item.disabled}
      accessibilityRole="menuitem"
      accessibilityLabel={item.label}
      accessibilityState={{ selected: isSelected, disabled: item.disabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: bgColor,
        opacity: item.disabled ? 0.5 : 1,
        gap: 12,
      }}
    >
      {item.icon && item.icon}
      <Text
        style={{
          fontSize: 16,
          flex: 1,
          color: isSelected
            ? isDark ? "#818cf8" : "#4f46e5"
            : isDark ? "#d4d4d4" : "#404040",
          fontWeight: isSelected ? "600" : "400",
        }}
      >
        {item.label}
      </Text>
      {isSelected && (
        <Text style={{ fontSize: 16, color: isDark ? "#818cf8" : "#4f46e5" }}>✓</Text>
      )}
    </Pressable>
  );
}
