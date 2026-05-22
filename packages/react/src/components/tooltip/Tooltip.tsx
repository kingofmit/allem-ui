"use client";

import {
  Tooltip as AriaTooltip,
  TooltipTrigger,
  OverlayArrow,
  type TooltipTriggerComponentProps,
  type TooltipProps as AriaTooltipProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface TooltipProps extends Omit<TooltipTriggerComponentProps, "children"> {
  children: ReactNode;
}

export interface TooltipContentProps extends Omit<AriaTooltipProps, "children"> {
  children: ReactNode;
  showArrow?: boolean;
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return <TooltipTrigger delay={300} {...props}>{children as any}</TooltipTrigger>;
}

export function TooltipContent({ children, showArrow = true, className, ...props }: TooltipContentProps) {
  return (
    <AriaTooltip
      offset={8}
      className={cn(
        "bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg ring-1 ring-white/10 dark:bg-neutral-100 dark:text-neutral-900 dark:ring-neutral-950/5 animate-allem-fade-in",
        className as string,
      )}
      {...props}
    >
      {showArrow && (
        <OverlayArrow>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="fill-neutral-900 dark:fill-neutral-100"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children as any}
    </AriaTooltip>
  );
}
