"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface KanbanHeaderProps {
  title: string;
  count?: number;
  color?: string;
  className?: string;
}

export function KanbanHeader({
  title,
  count,
  color,
  className,
}: KanbanHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-1 py-2",
        className
      )}
    >
      {color && (
        <span
          className="h-2.5 w-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      {count !== undefined && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-200 px-1.5 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
          {count}
        </span>
      )}
    </div>
  );
}
