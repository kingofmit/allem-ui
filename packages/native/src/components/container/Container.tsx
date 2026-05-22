import { View, ScrollView, useWindowDimensions } from "react-native";
import type { ReactNode } from "react";

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
  scrollable = true,
}: ContainerProps) {
  const { width: screenWidth } = useWindowDimensions();
  const maxWidth = sizeMaxWidths[size];
  const constrainedWidth = Math.min(screenWidth, maxWidth);

  const content = (
    <View
      style={
        size !== "full"
          ? { maxWidth: constrainedWidth, width: "100%", alignSelf: "center" }
          : undefined
      }
    >
      {children}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView style={{ width: "100%", paddingHorizontal: 16 }}>
        {content}
      </ScrollView>
    );
  }

  return (
    <View style={{ width: "100%", paddingHorizontal: 16 }}>
      {content}
    </View>
  );
}
