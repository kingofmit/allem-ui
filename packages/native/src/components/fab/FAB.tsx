import { View, Pressable, Text, Platform } from "react-native";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";

export interface FABProps {
  onPress: () => void;
  icon?: ReactNode;
  label?: string;
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  className?: string;
}

const positionMap: Record<string, { bottom: number; right?: number; left?: number; alignSelf?: string }> = {
  "bottom-right": { bottom: 24, right: 24 },
  "bottom-left": { bottom: 24, left: 24 },
  "bottom-center": { bottom: 24, alignSelf: "center" },
};

const sizeMap: Record<string, { height: number; minWidth: number; paddingHorizontal: number }> = {
  sm: { height: 48, minWidth: 48, paddingHorizontal: 12 },
  md: { height: 56, minWidth: 56, paddingHorizontal: 16 },
  lg: { height: 64, minWidth: 64, paddingHorizontal: 20 },
};

const colorMap: Record<string, string> = {
  primary: "#4f46e5",
  neutral: "#404040",
  danger: "#dc2626",
  success: "#059669",
  warning: "#f59e0b",
};

const textSize: Record<string, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export function FAB({
  onPress,
  icon,
  label,
  position = "bottom-right",
  size = "md",
  color = "primary",
}: FABProps) {
  const { trigger } = useHaptic();

  return (
    <View
      style={{
        position: "absolute",
        ...positionMap[position],
        ...sizeMap[size],
        borderRadius: 9999,
        backgroundColor: colorMap[color],
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        ...(Platform.OS === "android" ? { elevation: 8 } : {}),
      }}
    >
      <Pressable
        onPress={onPress}
        onPressIn={() => trigger("medium")}
        accessibilityRole="button"
        accessibilityLabel={label || "Floating action button"}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: label ? 8 : 0,
        }}
      >
        {icon}
        {label && (
          <Text style={{ color: "#ffffff", fontWeight: "600", fontSize: textSize[size] }}>
            {label}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
