import { View } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface BoxProps {
  children?: ReactNode;
  className?: string;
}

export function Box({ className, children, ...props }: BoxProps) {
  return (
    <View className={cn(className)} accessibilityRole="none" {...props}>
      {children}
    </View>
  );
}
