"use client";

import { cn } from "../../utils/cn";

export interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
  siblings?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "h-7 min-w-7 px-2 text-xs",
  md: "h-9 min-w-9 px-3 text-sm",
  lg: "h-11 min-w-11 px-4 text-base",
};

function getRange(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}

function getPages(total: number, current: number, siblings: number): (number | "dots")[] {
  const totalNumbers = siblings * 2 + 5;
  if (total <= totalNumbers) return getRange(1, total);

  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);

  const showLeftDots = leftSibling > 3;
  const showRightDots = rightSibling < total - 2;

  if (!showLeftDots && showRightDots) {
    const leftRange = getRange(1, siblings * 2 + 3);
    return [...leftRange, "dots", total];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = getRange(total - (siblings * 2 + 2), total);
    return [1, "dots", ...rightRange];
  }

  const middleRange = getRange(leftSibling, rightSibling);
  return [1, "dots", ...middleRange, "dots", total];
}

export function Pagination({
  total,
  current,
  onChange,
  siblings = 1,
  size = "md",
  className,
}: PaginationProps) {
  const pages = getPages(total, current, siblings);

  const buttonBase = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2",
    sizeStyles[size],
  );

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={current <= 1}
        onClick={() => onChange(current - 1)}
        className={cn(
          buttonBase,
          "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        )}
        aria-label="Previous page"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pages.map((page, i) =>
        page === "dots" ? (
          <span
            key={`dots-${i}`}
            className={cn(buttonBase, "text-neutral-400 dark:text-neutral-600 cursor-default")}
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            aria-current={page === current ? "page" : undefined}
            className={cn(
              buttonBase,
              page === current
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={current >= total}
        onClick={() => onChange(current + 1)}
        className={cn(
          buttonBase,
          "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        )}
        aria-label="Next page"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}
