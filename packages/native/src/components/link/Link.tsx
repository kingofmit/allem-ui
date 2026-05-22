import { Pressable, Text, Linking } from "react-native";
import { useState } from "react";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface LinkProps {
  href?: string;
  color?: "primary" | "neutral";
  size?: "sm" | "md" | "lg";
  onPress?: () => void;
  children: ReactNode;
  className?: string;
}

const colorMap: Record<string, { light: string; dark: string }> = {
  primary: { light: "#4f46e5", dark: "#818cf8" },
  neutral: { light: "#404040", dark: "#d4d4d4" },
};

const fontSizes: Record<string, number> = {
  sm: 13,
  md: 15,
  lg: 17,
};

export function Link({
  href,
  color = "primary",
  size = "md",
  onPress,
  children,
}: LinkProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      Linking.openURL(href);
    }
  };

  const textColor = isDark ? colorMap[color].dark : colorMap[color].light;

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={handlePress}
      accessibilityRole="link"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityHint={href ? `Opens ${href}` : undefined}
      style={{
        opacity: pressed ? 0.6 : 1,
        alignSelf: "flex-start",
      }}
    >
      <Text
        style={{
          fontSize: fontSizes[size],
          color: textColor,
          textDecorationLine: "underline",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
