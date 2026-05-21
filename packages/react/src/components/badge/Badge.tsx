import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface BadgeProps {
  variant?: "solid" | "outline" | "subtle";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    primary: "bg-indigo-600 text-white shadow-xs shadow-indigo-600/20",
    neutral: "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
    danger: "bg-red-600 text-white shadow-xs shadow-red-600/20",
    success: "bg-emerald-600 text-white shadow-xs shadow-emerald-600/20",
    warning: "bg-amber-500 text-white shadow-xs shadow-amber-500/20",
  },
  outline: {
    primary: "border border-indigo-200 text-indigo-600 dark:border-indigo-800 dark:text-indigo-400",
    neutral: "border border-neutral-200 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300",
    danger: "border border-red-200 text-red-600 dark:border-red-800 dark:text-red-400",
    success: "border border-emerald-200 text-emerald-600 dark:border-emerald-800 dark:text-emerald-400",
    warning: "border border-amber-200 text-amber-600 dark:border-amber-800 dark:text-amber-400",
  },
  subtle: {
    primary: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600/10 dark:bg-indigo-950/50 dark:text-indigo-300 dark:ring-indigo-400/10",
    neutral: "bg-neutral-100 text-neutral-700 ring-1 ring-neutral-900/5 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/5",
    danger: "bg-red-50 text-red-700 ring-1 ring-red-600/10 dark:bg-red-950/50 dark:text-red-300 dark:ring-red-400/10",
    success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-400/10",
    warning: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/10 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-400/10",
  },
};

const sizeStyles: Record<string, string> = {
  sm: "px-1.5 py-0.5 text-xs",
  md: "px-2 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm",
};

export function Badge({
  variant = "subtle",
  color = "primary",
  size = "md",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variantStyles[variant]?.[color],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
