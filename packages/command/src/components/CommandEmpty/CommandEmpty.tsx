"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface CommandEmptyProps {
  className?: string;
  children?: React.ReactNode;
}

export function CommandEmpty({ className, children }: CommandEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-6 text-center",
        className
      )}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="mb-3 text-neutral-300 dark:text-neutral-600"
      >
        <path
          d="M26 26L34 34M18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {children || "No results found."}
      </p>
    </div>
  );
}
