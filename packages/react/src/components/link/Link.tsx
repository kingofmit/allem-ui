"use client";

import { Link as AriaLink, type LinkProps as AriaLinkProps } from "react-aria-components";
import { cn } from "../../utils/cn";

export interface LinkProps extends AriaLinkProps {
  color?: "primary" | "neutral";
  size?: "sm" | "md" | "lg";
}

const colorStyles: Record<string, string> = {
  primary: "text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300",
  neutral: "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
};

const sizeStyles: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Link({ color = "primary", size = "md", className, ...props }: LinkProps) {
  return (
    <AriaLink
      className={cn(
        "underline decoration-1 underline-offset-4 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 rounded-sm decoration-indigo-600/30 hover:decoration-indigo-600 dark:decoration-indigo-400/30 dark:hover:decoration-indigo-400",
        colorStyles[color],
        sizeStyles[size],
        className as string,
      )}
      {...props}
    />
  );
}
