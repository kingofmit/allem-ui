"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface CommandItemProps {
  onSelect: () => void;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function CommandItem({
  onSelect,
  icon,
  shortcut,
  disabled = false,
  active = false,
  className,
  children,
}: CommandItemProps) {
  return (
    <button
      role="option"
      aria-selected={active}
      aria-disabled={disabled}
      onClick={() => {
        if (!disabled) onSelect();
      }}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm",
        "transition-colors duration-100",
        "outline-none cursor-pointer",
        active
          ? "bg-indigo-50 text-indigo-900 dark:bg-indigo-500/10 dark:text-indigo-200"
          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
      tabIndex={-1}
    >
      {icon && (
        <span className={cn(
          "flex shrink-0 items-center justify-center w-8 h-8 rounded-md",
          active
            ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
            : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
        )}>
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      {shortcut && (
        <kbd
          className={cn(
            "ml-auto hidden shrink-0 items-center gap-0.5 sm:flex",
            "rounded border px-1.5 py-0.5",
            "text-[11px] font-medium leading-none",
            "border-neutral-200 text-neutral-400 dark:border-neutral-700 dark:text-neutral-500"
          )}
        >
          {shortcut}
        </kbd>
      )}
    </button>
  );
}
