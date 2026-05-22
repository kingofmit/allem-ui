import { View } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

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

const variantStyles: Record<string, string> = {
  outline: "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950",
  filled: "bg-neutral-50 dark:bg-neutral-900",
  elevated: "bg-white dark:bg-neutral-950 shadow-md",
};

export function Card({ variant = "outline", children, className }: CardProps) {
  return (
    <View
      className={cn("rounded-xl overflow-hidden", variantStyles[variant], className)}
      accessibilityRole="none"
    >
      {children}
    </View>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <View className={cn("px-6 py-4 border-b border-neutral-200 dark:border-neutral-800", className)}>
      {children}
    </View>
  );
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <View className={cn("px-6 py-4", className)}>
      {children}
    </View>
  );
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <View className={cn("px-6 py-4 border-t border-neutral-200 dark:border-neutral-800", className)}>
      {children}
    </View>
  );
}
