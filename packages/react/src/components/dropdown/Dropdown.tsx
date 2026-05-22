"use client";

import {
  MenuTrigger,
  Menu,
  MenuItem as AriaMenuItem,
  Popover,
  Separator,
  type MenuTriggerProps,
  type MenuProps as AriaMenuProps,
  type MenuItemProps as AriaMenuItemProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface DropdownProps extends Omit<MenuTriggerProps, "children"> {
  children: ReactNode;
}

export interface DropdownMenuProps<T extends object> extends AriaMenuProps<T> {}

export interface DropdownItemProps extends AriaMenuItemProps {
  color?: "default" | "danger";
}

export interface DropdownSeparatorProps {
  className?: string;
}

export function Dropdown({ children, ...props }: DropdownProps) {
  return <MenuTrigger {...props}>{children as any}</MenuTrigger>;
}

export function DropdownMenu<T extends object>({ className, ...props }: DropdownMenuProps<T>) {
  return (
    <Popover
      className="rounded-xl bg-white shadow-lg ring-1 ring-neutral-950/5 dark:bg-neutral-900 dark:ring-white/10 animate-allem-fade-in overflow-hidden"
    >
      <Menu
        className={cn("outline-none py-1 min-w-[180px]", className as string)}
        {...props}
      />
    </Popover>
  );
}

export function DropdownItem({ color = "default", className, ...props }: DropdownItemProps) {
  return (
    <AriaMenuItem
      className={cn(
        "px-3 py-2 text-sm outline-none cursor-pointer transition-colors duration-150 rounded-md mx-1",
        color === "default" &&
          "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800",
        color === "danger" &&
          "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 focus:bg-red-50 dark:focus:bg-red-950",
        className as string,
      )}
      {...props}
    />
  );
}

export function DropdownSeparator({ className }: DropdownSeparatorProps) {
  return (
    <Separator
      className={cn("my-1 border-t border-neutral-200 dark:border-neutral-800", className)}
    />
  );
}
