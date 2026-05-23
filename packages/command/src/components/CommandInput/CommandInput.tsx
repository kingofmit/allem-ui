"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface CommandInputProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CommandInput({
  value,
  onValueChange,
  placeholder = "Type a command or search...",
  className,
}: CommandInputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3",
        "border-b border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="shrink-0 text-neutral-400 dark:text-neutral-500"
      >
        <path
          d="M12.5 12.5L16 16M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent text-sm outline-none",
          "text-neutral-900 dark:text-neutral-100",
          "placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
        )}
        autoFocus
        autoComplete="off"
        spellCheck={false}
        aria-label="Command search"
      />
      {value && (
        <button
          onClick={() => onValueChange("")}
          className="shrink-0 rounded p-0.5 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
          aria-label="Clear search"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
