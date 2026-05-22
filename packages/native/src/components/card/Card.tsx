import { View, Platform } from "react-native";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface CardProps {
  variant?: "outline" | "filled" | "elevated";
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function Card({ variant = "outline", children }: CardProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const style: any = {
    borderRadius: 14,
    overflow: "hidden",
  };

  if (variant === "outline") {
    style.borderWidth = 1;
    style.borderColor = isDark ? "#262626" : "#e5e5e5";
    style.backgroundColor = isDark ? "#0a0a0a" : "#ffffff";
  } else if (variant === "filled") {
    style.backgroundColor = isDark ? "#1c1c1e" : "#f5f5f5";
  } else if (variant === "elevated") {
    style.backgroundColor = isDark ? "#0a0a0a" : "#ffffff";
    style.shadowColor = "#000";
    style.shadowOffset = { width: 0, height: 4 };
    style.shadowOpacity = 0.12;
    style.shadowRadius = 12;
    if (Platform.OS === "android") style.elevation = 6;
  }

  return (
    <View style={style} accessibilityRole="none">
      {children}
    </View>
  );
}

export function CardHeader({ children }: CardHeaderProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: isDark ? "#262626" : "#e5e5e5",
      }}
    >
      {children}
    </View>
  );
}

export function CardBody({ children }: CardBodyProps) {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
      {children}
    </View>
  );
}

export function CardFooter({ children }: CardFooterProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: isDark ? "#262626" : "#e5e5e5",
      }}
    >
      {children}
    </View>
  );
}
