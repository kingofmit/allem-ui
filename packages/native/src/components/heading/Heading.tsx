import { Text } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface HeadingProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  children: ReactNode;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  xs: "text-sm font-semibold",
  sm: "text-base font-semibold",
  md: "text-lg font-semibold",
  lg: "text-2xl font-bold",
  xl: "text-3xl font-bold",
  "2xl": "text-4xl font-bold tracking-tight",
};

export function Heading({ size = "lg", className, children, ...props }: HeadingProps) {
  return (
    <Text
      className={cn("text-neutral-900 dark:text-white", sizeStyles[size], className)}
      accessibilityRole="header"
      {...props}
    >
      {children}
    </Text>
  );
}
