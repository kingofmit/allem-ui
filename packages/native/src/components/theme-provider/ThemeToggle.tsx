import { Pressable, Animated, Text as RNText } from "react-native";
import { useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useTheme } from "./ThemeProvider";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface ThemeToggleProps {
  /** Size of the toggle button */
  size?: "sm" | "md" | "lg";
  /** Custom icon for light mode (sun). Receives icon size in px. */
  lightIcon?: (size: number) => ReactNode;
  /** Custom icon for dark mode (moon). Receives icon size in px. */
  darkIcon?: (size: number) => ReactNode;
  /** Custom class name */
  className?: string;
}

const sizePx = {
  sm: 32,
  md: 40,
  lg: 48,
};

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 22,
};

function DefaultSunIcon({ size }: { size: number }) {
  return (
    <RNText style={{ fontSize: size, lineHeight: size + 4, color: "#fbbf24" }}>
      ☀
    </RNText>
  );
}

function DefaultMoonIcon({ size }: { size: number }) {
  return (
    <RNText style={{ fontSize: size, lineHeight: size + 4, color: "#a5b4fc" }}>
      ☽
    </RNText>
  );
}

export function ThemeToggle({
  size = "md",
  lightIcon,
  darkIcon,
  className,
}: ThemeToggleProps) {
  const { isDark, toggleColorScheme } = useTheme();
  const rotation = useRef(new Animated.Value(isDark ? 1 : 0)).current;
  const { trigger } = useHaptic();

  const handleToggle = () => {
    trigger("medium");
    toggleColorScheme();
  };

  useEffect(() => {
    Animated.spring(rotation, {
      toValue: isDark ? 1 : 0,
      useNativeDriver: true,
      tension: 50,
      friction: 8,
    }).start();
  }, [isDark, rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const iconSize = iconSizes[size];

  const sunNode = lightIcon ? lightIcon(iconSize) : <DefaultSunIcon size={iconSize} />;
  const moonNode = darkIcon ? darkIcon(iconSize) : <DefaultMoonIcon size={iconSize} />;

  const s = sizePx[size];

  return (
    <Pressable
      onPress={handleToggle}
      style={{
        width: s,
        height: s,
        borderRadius: s / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
      accessibilityRole="button"
      accessibilityLabel={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        {isDark ? moonNode : sunNode}
      </Animated.View>
    </Pressable>
  );
}
