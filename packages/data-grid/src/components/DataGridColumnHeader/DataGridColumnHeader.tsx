"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface DataGridColumnHeaderProps {
  sorted: false | "asc" | "desc";
  onSort: (event?: unknown) => void;
  children: React.ReactNode;
  className?: string;
}

function SortIcon({ direction }: { direction: false | "asc" | "desc" }) {
  if (direction === "asc") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-neutral-900 dark:text-neutral-100"
      >
        <path
          d="M7 3L11 8H3L7 3Z"
          fill="currentColor"
        />
        <path
          d="M7 11L3 6H11L7 11Z"
          fill="currentColor"
          opacity={0.2}
        />
      </svg>
    );
  }

  if (direction === "desc") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-neutral-900 dark:text-neutral-100"
      >
        <path
          d="M7 3L11 8H3L7 3Z"
          fill="currentColor"
          opacity={0.2}
        />
        <path
          d="M7 11L3 6H11L7 11Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-neutral-400 dark:text-neutral-500"
    >
      <path d="M7 3L11 8H3L7 3Z" fill="currentColor" />
      <path d="M7 11L3 6H11L7 11Z" fill="currentColor" />
    </svg>
  );
}

export function DataGridColumnHeader({
  sorted,
  onSort,
  children,
  className,
}: DataGridColumnHeaderProps) {
  return (
    <button
      type="button"
      onClick={onSort}
      className={cn(
        "inline-flex items-center gap-1.5 cursor-pointer select-none",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "transition-colors duration-150",
        className
      )}
    >
      {children}
      <SortIcon direction={sorted} />
    </button>
  );
}
