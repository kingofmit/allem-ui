import { cn } from "../../utils/cn";
import type { HTMLAttributes, ElementType, ReactNode } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "muted" | "danger" | "success" | "warning";
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: ReactNode;
}

const sizeStyles: Record<string, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const colorStyles: Record<string, string> = {
  default: "text-neutral-900 dark:text-neutral-100",
  muted: "text-neutral-500 dark:text-neutral-400",
  danger: "text-red-600 dark:text-red-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-amber-600 dark:text-amber-400",
};

const weightStyles: Record<string, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Text({
  as: Component = "p",
  size = "md",
  color = "default",
  weight = "normal",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(sizeStyles[size], colorStyles[color], weightStyles[weight], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
