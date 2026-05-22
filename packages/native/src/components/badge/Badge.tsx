import { View, Text } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps {
  variant?: "solid" | "outline" | "subtle";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const variantContainerStyles: Record<string, Record<string, string>> = {
  solid: {
    primary: "bg-indigo-600",
    neutral: "bg-neutral-900 dark:bg-neutral-100",
    danger: "bg-red-600",
    success: "bg-emerald-600",
    warning: "bg-amber-500",
  },
  outline: {
    primary: "border border-indigo-200 dark:border-indigo-800",
    neutral: "border border-neutral-200 dark:border-neutral-700",
    danger: "border border-red-200 dark:border-red-800",
    success: "border border-emerald-200 dark:border-emerald-800",
    warning: "border border-amber-200 dark:border-amber-800",
  },
  subtle: {
    primary: "bg-indigo-50 dark:bg-indigo-950/50",
    neutral: "bg-neutral-100 dark:bg-neutral-800",
    danger: "bg-red-50 dark:bg-red-950/50",
    success: "bg-emerald-50 dark:bg-emerald-950/50",
    warning: "bg-amber-50 dark:bg-amber-950/50",
  },
};

const variantTextStyles: Record<string, Record<string, string>> = {
  solid: {
    primary: "text-white",
    neutral: "text-white dark:text-neutral-900",
    danger: "text-white",
    success: "text-white",
    warning: "text-white",
  },
  outline: {
    primary: "text-indigo-600 dark:text-indigo-400",
    neutral: "text-neutral-700 dark:text-neutral-300",
    danger: "text-red-600 dark:text-red-400",
    success: "text-emerald-600 dark:text-emerald-400",
    warning: "text-amber-600 dark:text-amber-400",
  },
  subtle: {
    primary: "text-indigo-700 dark:text-indigo-300",
    neutral: "text-neutral-700 dark:text-neutral-300",
    danger: "text-red-700 dark:text-red-300",
    success: "text-emerald-700 dark:text-emerald-300",
    warning: "text-amber-700 dark:text-amber-300",
  },
};

const sizeStyles: Record<string, string> = {
  sm: "px-1.5 py-0.5",
  md: "px-2 py-0.5",
  lg: "px-2.5 py-1",
};

const textSizeStyles: Record<string, string> = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm",
};

export function Badge({
  variant = "subtle",
  color = "primary",
  size = "md",
  children,
  className,
}: BadgeProps) {
  return (
    <View
      accessibilityRole="text"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      className={cn(
        "flex-row items-center rounded-full",
        variantContainerStyles[variant]?.[color],
        sizeStyles[size],
        className,
      )}
    >
      <Text
        className={cn(
          "font-medium",
          variantTextStyles[variant]?.[color],
          textSizeStyles[size],
        )}
      >
        {children}
      </Text>
    </View>
  );
}
