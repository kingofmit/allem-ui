import { Pressable, Text, Linking } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface LinkProps {
  href?: string;
  color?: "primary" | "neutral";
  size?: "sm" | "md" | "lg";
  onPress?: () => void;
  children: ReactNode;
  className?: string;
}

const colorStyles: Record<string, string> = {
  primary: "text-indigo-600 dark:text-indigo-400",
  neutral: "text-neutral-700 dark:text-neutral-300",
};

const sizeStyles: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Link({
  href,
  color = "primary",
  size = "md",
  onPress,
  children,
  className,
}: LinkProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      Linking.openURL(href);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.97 : 1 }],
        opacity: pressed ? 0.7 : 1,
      })}
      onPress={handlePress}
      accessibilityRole="link"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityHint={href ? `Opens ${href}` : undefined}
    >
      <Text
        className={cn(
          "underline underline-offset-4",
          colorStyles[color],
          sizeStyles[size],
          className,
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
}
