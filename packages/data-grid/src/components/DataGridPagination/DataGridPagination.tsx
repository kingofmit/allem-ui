"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface DataGridPaginationProps {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  totalRows: number;
  className?: string;
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i);
  }

  const pages: (number | "ellipsis")[] = [];

  if (current <= 3) {
    for (let i = 0; i < 5; i++) pages.push(i);
    pages.push("ellipsis");
    pages.push(total - 1);
  } else if (current >= total - 4) {
    pages.push(0);
    pages.push("ellipsis");
    for (let i = total - 5; i < total; i++) pages.push(i);
  } else {
    pages.push(0);
    pages.push("ellipsis");
    for (let i = current - 1; i <= current + 1; i++) pages.push(i);
    pages.push("ellipsis");
    pages.push(total - 1);
  }

  return pages;
}

export function DataGridPagination({
  pageIndex,
  pageCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
  totalRows,
  className,
}: DataGridPaginationProps) {
  const from = pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, totalRows);

  const buttonBase = cn(
    "inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-sm font-medium",
    "transition-colors duration-150",
    "disabled:opacity-40 disabled:cursor-not-allowed"
  );

  const buttonInactive = cn(
    buttonBase,
    "text-neutral-700 hover:bg-neutral-100",
    "dark:text-neutral-300 dark:hover:bg-neutral-800"
  );

  const buttonActive = cn(
    buttonBase,
    "bg-indigo-600 text-white",
    "dark:bg-indigo-500"
  );

  const visiblePages = getVisiblePages(pageIndex, pageCount);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 px-4 py-3",
        "border-t border-neutral-200 dark:border-neutral-700",
        className
      )}
    >
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Showing <span className="font-medium text-neutral-900 dark:text-neutral-100">{from}</span> to{" "}
        <span className="font-medium text-neutral-900 dark:text-neutral-100">{to}</span> of{" "}
        <span className="font-medium text-neutral-900 dark:text-neutral-100">{totalRows}</span> results
      </p>

      <div className="flex items-center gap-4">
        {onPageSizeChange && (
          <div className="flex items-center gap-2">
            <label
              htmlFor="page-size"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              Rows per page
            </label>
            <select
              id="page-size"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className={cn(
                "rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm",
                "focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",
                "dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
              )}
            >
              {[10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            type="button"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
            className={buttonInactive}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </button>

          {visiblePages.map((page, i) =>
            page === "ellipsis" ? (
              <span
                key={`ellipsis-${i}`}
                className="px-1.5 text-neutral-400 dark:text-neutral-500"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={page === pageIndex ? buttonActive : buttonInactive}
                aria-current={page === pageIndex ? "page" : undefined}
              >
                {page + 1}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pageIndex >= pageCount - 1}
            className={buttonInactive}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </button>
        </nav>
      </div>
    </div>
  );
}
