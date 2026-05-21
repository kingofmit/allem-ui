"use client";

import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface SwitchProps extends AriaSwitchProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<string, { track: string; thumb: string; translate: string }> = {
  sm: { track: "h-4 w-7", thumb: "h-3 w-3", translate: "translate-x-3" },
  md: { track: "h-5 w-9", thumb: "h-4 w-4", translate: "translate-x-4" },
  lg: { track: "h-6 w-11", thumb: "h-5 w-5", translate: "translate-x-5" },
};

export function Switch({ children, size = "md", className, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      className={cn(
        "group flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className as string,
      )}
      {...props}
    >
      {({ isSelected }) => (
        <>
          <div
            className={cn(
              "flex items-center rounded-full p-0.5 transition-all duration-200",
              sizeStyles[size].track,
              isSelected
                ? "bg-indigo-600 shadow-xs shadow-indigo-600/25"
                : "bg-neutral-300 dark:bg-neutral-700",
              "group-focus-visible:ring-2 group-focus-visible:ring-indigo-600/50 group-focus-visible:ring-offset-2",
            )}
          >
            <div
              className={cn(
                "rounded-full bg-white shadow-sm transition-all duration-200",
                sizeStyles[size].thumb,
                isSelected && sizeStyles[size].translate,
              )}
            />
          </div>
          {children && (
            <span className="text-sm text-neutral-700 dark:text-neutral-300 select-none">
              {children}
            </span>
          )}
        </>
      )}
    </AriaSwitch>
  );
}
