"use client";

import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface CheckboxProps extends AriaCheckboxProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<string, { box: string; text: string }> = {
  sm: { box: "h-3.5 w-3.5", text: "text-sm" },
  md: { box: "h-4 w-4", text: "text-sm" },
  lg: { box: "h-5 w-5", text: "text-base" },
};

export function Checkbox({ children, size = "md", className, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox
      className={cn(
        "group flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className as string,
      )}
      {...props}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <div
            className={cn(
              "flex items-center justify-center rounded-[4px] border-2 transition-all duration-200",
              sizeStyles[size].box,
              isSelected || isIndeterminate
                ? "border-indigo-600 bg-indigo-600 text-white shadow-xs shadow-indigo-600/25"
                : "border-neutral-300 bg-white hover:border-neutral-400 dark:border-neutral-600 dark:bg-neutral-950 dark:hover:border-neutral-500",
              "group-focus-visible:ring-2 group-focus-visible:ring-indigo-600/50 group-focus-visible:ring-offset-2",
            )}
          >
            {isSelected && (
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {isIndeterminate && (
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            )}
          </div>
          {children && (
            <span className={cn("text-neutral-700 dark:text-neutral-300 select-none", sizeStyles[size].text)}>
              {children}
            </span>
          )}
        </>
      )}
    </AriaCheckbox>
  );
}
