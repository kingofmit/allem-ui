"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface PricingToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
  savingsLabel?: string;
  className?: string;
}

export function PricingToggle({
  isYearly,
  onChange,
  savingsLabel,
  className,
}: PricingToggleProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <div className="inline-flex items-center rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
        <button
          type="button"
          onClick={() => onChange(false)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
            !isYearly
              ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white"
              : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onChange(true)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
            isYearly
              ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white"
              : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
          )}
        >
          Yearly
        </button>
      </div>
      {savingsLabel && (
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/10 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-400/20">
          {savingsLabel}
        </span>
      )}
    </div>
  );
}
