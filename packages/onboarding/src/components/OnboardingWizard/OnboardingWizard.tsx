"use client";

import React, { Children } from "react";
import { cn } from "../../utils/cn";
import { OnboardingProgress } from "../OnboardingProgress/OnboardingProgress";

export interface OnboardingWizardProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onSkip?: () => void;
  isFirst: boolean;
  isLast: boolean;
  progressVariant?: "dots" | "bar" | "numbers";
  nextLabel?: string;
  prevLabel?: string;
  skipLabel?: string;
  finishLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export function OnboardingWizard({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onSkip,
  isFirst,
  isLast,
  progressVariant = "dots",
  nextLabel = "Next",
  prevLabel = "Back",
  skipLabel = "Skip",
  finishLabel = "Get Started",
  className,
  children,
}: OnboardingWizardProps) {
  const steps = Children.toArray(children);

  return (
    <div
      className={cn(
        "flex flex-col items-center",
        "rounded-2xl",
        "bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-800",
        "shadow-xl shadow-black/5 dark:shadow-black/30",
        "overflow-hidden",
        className
      )}
    >
      {/* Steps viewport */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentStep * 100}%)` }}
        >
          {steps.map((step, i) => (
            <div key={i} className="w-full flex-shrink-0 py-12 px-8">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className={cn(
          "flex w-full items-center justify-between px-8 py-5",
          "border-t border-neutral-100 dark:border-neutral-800",
          "bg-neutral-50/50 dark:bg-neutral-900/50"
        )}
      >
        {/* Left — Skip */}
        <div className="w-20">
          {onSkip && !isLast && (
            <button
              onClick={onSkip}
              className="text-sm text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {skipLabel}
            </button>
          )}
        </div>

        {/* Center — Progress */}
        <OnboardingProgress
          currentStep={currentStep}
          totalSteps={totalSteps}
          variant={progressVariant}
        />

        {/* Right — Navigation */}
        <div className="flex items-center gap-2 w-20 justify-end">
          {!isFirst && (
            <button
              onClick={onPrev}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full",
                "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
                "transition-colors cursor-pointer"
              )}
              aria-label={prevLabel}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <button
            onClick={onNext}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              isLast
                ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            )}
          >
            {isLast ? finishLabel : nextLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
