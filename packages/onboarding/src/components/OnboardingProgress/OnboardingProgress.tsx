"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  variant?: "dots" | "bar" | "numbers";
  className?: string;
}

export function OnboardingProgress({
  currentStep,
  totalSteps,
  variant = "dots",
  className,
}: OnboardingProgressProps) {
  if (variant === "bar") {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    return (
      <div className={cn("w-full", className)}>
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }

  if (variant === "numbers") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200",
              i === currentStep
                ? "bg-indigo-600 text-white dark:bg-indigo-500 scale-110"
                : i < currentStep
                  ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                  : "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500"
            )}
          >
            {i < currentStep ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7L5.5 9.5L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
        ))}
      </div>
    );
  }

  // Default: dots
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "rounded-full transition-all duration-300",
            i === currentStep
              ? "w-6 h-2 bg-indigo-600 dark:bg-indigo-400"
              : i < currentStep
                ? "w-2 h-2 bg-indigo-300 dark:bg-indigo-600"
                : "w-2 h-2 bg-neutral-200 dark:bg-neutral-700"
          )}
        />
      ))}
    </div>
  );
}
