import { Text } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useColorScheme } from "nativewind";

export interface HeadingProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  children: ReactNode;
  className?: string;
  style?: any;
}

const sizeConfig: Record<string, { fontSize: number; fontWeight: "600" | "700" | "800"; lineHeight: number; letterSpacing?: number }> = {
  xs: { fontSize: 14, fontWeight: "600", lineHeight: 20 },
  sm: { fontSize: 16, fontWeight: "600", lineHeight: 22 },
  md: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  lg: { fontSize: 24, fontWeight: "700", lineHeight: 30 },
  xl: { fontSize: 30, fontWeight: "700", lineHeight: 36 },
  "2xl": { fontSize: 36, fontWeight: "800", lineHeight: 42, letterSpacing: -0.5 },
};

export function Heading({ size = "lg", className, children, style, ...props }: HeadingProps) {
  const config = sizeConfig[size];

  return (
    <Text
      accessibilityRole="header"
      className={cn("text-neutral-900 dark:text-white", className)}
      style={[
        {
          fontSize: config.fontSize,
          fontWeight: config.fontWeight,
          lineHeight: config.lineHeight,
          letterSpacing: config.letterSpacing,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
