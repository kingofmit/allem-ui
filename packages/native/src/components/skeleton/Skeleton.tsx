import { Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: number;
  height?: number;
  className?: string;
}

const variantStyles: Record<string, string> = {
  text: "rounded-md h-4 w-full",
  circular: "rounded-full",
  rectangular: "rounded-none",
  rounded: "rounded-lg",
};

export function Skeleton({ variant = "text", width, height, className }: SkeletonProps) {
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

  return (
    <Animated.View
      className={cn(
        "bg-neutral-200 dark:bg-neutral-800",
        variantStyles[variant],
        className,
      )}
      style={[
        { opacity: pulseValue },
        width !== undefined && { width },
        height !== undefined && { height },
      ]}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading content"
      accessibilityState={{ busy: true }}
    />
  );
}
