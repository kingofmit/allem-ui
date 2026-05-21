"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface DataGridToolbarProps {
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
  selectedCount?: number;
  totalCount?: number;
  className?: string;
  children?: React.ReactNode;
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-neutral-400 dark:text-neutral-500"
    >
      <path
        d="M11.5 11.5L14 14M7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5C13 10.5376 10.5376 13 7.5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DataGridToolbar({
  globalFilter,
  onGlobalFilterChange,
  selectedCount,
  totalCount,
  className,
  children,
}: DataGridToolbarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 px-4 py-3",
        "border-b border-neutral-200 dark:border-neutral-700",
        className
      )}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="relative max-w-sm flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => onGlobalFilterChange(e.target.value)}
            placeholder="Search..."
            className={cn(
              "block w-full rounded-lg border border-neutral-300 bg-white py-1.5 pl-9 pr-3 text-sm",
              "placeholder:text-neutral-400",
              "focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",
              "dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100",
              "dark:placeholder:text-neutral-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            )}
          />
        </div>

        {typeof selectedCount === "number" && selectedCount > 0 && (
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              "bg-indigo-100 text-indigo-700",
              "dark:bg-indigo-900/50 dark:text-indigo-300"
            )}
          >
            {selectedCount} of {totalCount ?? "?"} selected
          </span>
        )}
      </div>

      {children && (
        <div className="flex items-center gap-2">{children}</div>
      )}
    </div>
  );
}
