import { cn } from "../../utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  children: ReactNode;
}

const sizeStyles: Record<string, string> = {
  xs: "text-sm font-semibold",
  sm: "text-base font-semibold",
  md: "text-lg font-semibold",
  lg: "text-2xl font-bold",
  xl: "text-3xl font-bold",
  "2xl": "text-4xl font-bold tracking-tight",
};

export function Heading({ as: Component = "h2", size = "lg", className, children, ...props }: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-neutral-900 dark:text-white",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
