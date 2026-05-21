"use client";

import {
  Popover as AriaPopover,
  Dialog,
  DialogTrigger,
  OverlayArrow,
  type PopoverProps as AriaPopoverProps,
  type DialogTriggerProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface PopoverTriggerProps extends DialogTriggerProps {
  children: ReactNode;
}

export interface PopoverProps extends AriaPopoverProps {
  children: ReactNode;
  showArrow?: boolean;
}

export function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
}

export function Popover({ children, showArrow = true, className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      offset={8}
      className={cn(
        "rounded-xl bg-white shadow-lg ring-1 ring-neutral-950/5 dark:bg-neutral-900 dark:ring-white/10 animate-allem-fade-in",
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
            className="fill-white dark:fill-neutral-900 stroke-neutral-200 dark:stroke-neutral-800"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      <Dialog className="outline-none p-4">{children}</Dialog>
    </AriaPopover>
  );
}
