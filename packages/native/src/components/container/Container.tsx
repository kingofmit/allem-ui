import { View, ScrollView, useWindowDimensions } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children?: ReactNode;
  className?: string;
  scrollable?: boolean;
}

const sizeMaxWidths: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  full: Infinity,
};

export function Container({
  size = "lg",
  children,
  className,
  scrollable = true,
  ...props
}: ContainerProps) {
  const { width: screenWidth } = useWindowDimensions();
  const maxWidth = sizeMaxWidths[size];
  const constrainedWidth = Math.min(screenWidth, maxWidth);

  const content = (
    <View
      style={size !== "full" ? { maxWidth: constrainedWidth, width: "100%" } : undefined}
      className="mx-auto"
    >
      {children}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView
        className={cn("w-full px-4", className)}
        {...props}
      >
        {content}
      </ScrollView>
    );
  }

  return (
    <View className={cn("w-full px-4", className)} {...props}>
      {content}
    </View>
  );
}
