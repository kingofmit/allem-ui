"use client";

import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import { cn } from "../../utils/cn";

export interface ButtonProps extends AriaButtonProps {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  fullWidth?: boolean;
}

const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    primary: "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 hover:bg-indigo-500 pressed:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/30",
    neutral: "bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 pressed:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 dark:shadow-none",
    danger: "bg-red-600 text-white shadow-sm shadow-red-600/25 hover:bg-red-500 pressed:bg-red-700 hover:shadow-md hover:shadow-red-600/30",
    success: "bg-emerald-600 text-white shadow-sm shadow-emerald-600/25 hover:bg-emerald-500 pressed:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/30",
    warning: "bg-amber-500 text-white shadow-sm shadow-amber-500/25 hover:bg-amber-400 pressed:bg-amber-600 hover:shadow-md hover:shadow-amber-500/30",
  },
  outline: {
    primary: "border border-indigo-200 text-indigo-600 bg-white hover:bg-indigo-50 hover:border-indigo-300 dark:border-indigo-800 dark:bg-transparent dark:hover:bg-indigo-950 dark:hover:border-indigo-700",
    neutral: "border border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-700 dark:text-neutral-300 dark:bg-transparent dark:hover:bg-neutral-900 dark:hover:border-neutral-600",
    danger: "border border-red-200 text-red-600 bg-white hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:bg-transparent dark:hover:bg-red-950 dark:hover:border-red-700",
    success: "border border-emerald-200 text-emerald-600 bg-white hover:bg-emerald-50 hover:border-emerald-300 dark:border-emerald-800 dark:bg-transparent dark:hover:bg-emerald-950 dark:hover:border-emerald-700",
    warning: "border border-amber-200 text-amber-600 bg-white hover:bg-amber-50 hover:border-amber-300 dark:border-amber-800 dark:bg-transparent dark:hover:bg-amber-950 dark:hover:border-amber-700",
  },
  ghost: {
    primary: "text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50",
    neutral: "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/50",
    danger: "text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50",
    success: "text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50",
    warning: "text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/50",
  },
  link: {
    primary: "text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-4",
    neutral: "text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4 dark:text-neutral-300 dark:hover:text-white",
    danger: "text-red-600 hover:text-red-500 hover:underline underline-offset-4",
    success: "text-emerald-600 hover:text-emerald-500 hover:underline underline-offset-4",
    warning: "text-amber-600 hover:text-amber-500 hover:underline underline-offset-4",
  },
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "solid",
  size = "md",
  color = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        variantStyles[variant]?.[color],
        sizeStyles[size],
        fullWidth && "w-full",
        className as string,
      )}
      {...props}
    />
  );
}
