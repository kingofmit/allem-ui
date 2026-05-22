import { View, Text, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "white";
  label?: string;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

const colorStyles: Record<string, string> = {
  primary: "border-indigo-200 border-t-indigo-600",
  neutral: "border-neutral-200 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-300",
  white: "border-white/30 border-t-white",
};

export function Spinner({
  size = "md",
  color = "primary",
  label,
  className,
}: SpinnerProps) {
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

  return (
    <View
      className={cn("flex-row items-center gap-2", className)}
      accessibilityRole="progressbar"
      accessibilityLabel={label || "Loading"}
    >
      <Animated.View
        className={cn("rounded-full", sizeStyles[size], colorStyles[color])}
        style={{ transform: [{ rotate }] }}
      />
      {label && (
        <Text className="text-sm text-neutral-500 dark:text-neutral-400">
          {label}
        </Text>
      )}
    </View>
  );
}
