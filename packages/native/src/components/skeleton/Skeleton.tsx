import { Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { useColorScheme } from "nativewind";

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: number | string;
  height?: number;
  borderRadius?: number;
  className?: string;
}

const variantDefaults: Record<string, { height: number; borderRadius: number; width: string | number }> = {
  text: { height: 14, borderRadius: 6, width: "100%" },
  circular: { height: 48, borderRadius: 999, width: 48 },
  rectangular: { height: 100, borderRadius: 0, width: "100%" },
  rounded: { height: 100, borderRadius: 10, width: "100%" },
};

export function Skeleton({ variant = "text", width, height, borderRadius, className }: SkeletonProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const pulseValue = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 750,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 0.4,
          duration: 750,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [pulseValue]);

  const defaults = variantDefaults[variant];

  return (
    <Animated.View
      className={className}
      style={{
        opacity: pulseValue,
        backgroundColor: isDark ? "#262626" : "#e5e5e5",
        width: (width !== undefined ? width : defaults.width) as number,
        height: height !== undefined ? height : defaults.height,
        borderRadius: borderRadius !== undefined ? borderRadius : defaults.borderRadius,
      }}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading content"
      accessibilityState={{ busy: true }}
    />
  );
}
