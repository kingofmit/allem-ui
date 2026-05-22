import { View, Text, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { useColorScheme } from "nativewind";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "white";
  label?: string;
  className?: string;
}

const spinnerSizes: Record<string, number> = { sm: 16, md: 24, lg: 32 };
const borderWidths: Record<string, number> = { sm: 2, md: 2.5, lg: 3 };

const trackColors: Record<string, { light: string; dark: string }> = {
  primary: { light: "#e0e7ff", dark: "#312e81" },
  neutral: { light: "#e5e5e5", dark: "#404040" },
  white: { light: "rgba(255,255,255,0.3)", dark: "rgba(255,255,255,0.3)" },
};

const activeColors: Record<string, { light: string; dark: string }> = {
  primary: { light: "#4f46e5", dark: "#818cf8" },
  neutral: { light: "#525252", dark: "#d4d4d4" },
  white: { light: "#ffffff", dark: "#ffffff" },
};

export function Spinner({
  size = "md",
  color = "primary",
  label,
}: SpinnerProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const s = spinnerSizes[size];
  const bw = borderWidths[size];
  const track = isDark ? trackColors[color].dark : trackColors[color].light;
  const active = isDark ? activeColors[color].dark : activeColors[color].light;

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
      accessibilityRole="progressbar"
      accessibilityLabel={label || "Loading"}
    >
      <Animated.View
        style={{
          width: s,
          height: s,
          borderRadius: s / 2,
          borderWidth: bw,
          borderColor: track,
          borderTopColor: active,
          transform: [{ rotate }],
        }}
      />
      {label && (
        <Text
          style={{
            fontSize: 14,
            color: isDark ? "#a3a3a3" : "#737373",
          }}
        >
          {label}
        </Text>
      )}
    </View>
  );
}
