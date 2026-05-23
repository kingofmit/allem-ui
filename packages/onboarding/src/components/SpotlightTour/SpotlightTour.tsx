"use client";

import React from "react";
import { cn } from "../../utils/cn";
import type { TargetRect } from "../../hooks/useTour";
import type { TourStep } from "../../hooks/useTour";

export interface SpotlightTourProps {
  isActive: boolean;
  step: TourStep | null;
  targetRect: TargetRect | null;
  currentStep: number;
  totalSteps: number;
  isFirst: boolean;
  isLast: boolean;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  padding?: number;
  className?: string;
}

function getTooltipPosition(
  targetRect: TargetRect,
  placement: "top" | "bottom" | "left" | "right",
  padding: number
) {
  const gap = 12;
  const spotTop = targetRect.top - padding;
  const spotLeft = targetRect.left - padding;
  const spotWidth = targetRect.width + padding * 2;
  const spotHeight = targetRect.height + padding * 2;

  switch (placement) {
    case "top":
      return {
        bottom: `calc(100% - ${spotTop - gap}px)`,
        left: `${spotLeft + spotWidth / 2}px`,
        transform: "translateX(-50%)",
      };
    case "bottom":
      return {
        top: `${spotTop + spotHeight + gap}px`,
        left: `${spotLeft + spotWidth / 2}px`,
        transform: "translateX(-50%)",
      };
    case "left":
      return {
        top: `${spotTop + spotHeight / 2}px`,
        right: `calc(100% - ${spotLeft - gap}px)`,
        transform: "translateY(-50%)",
      };
    case "right":
      return {
        top: `${spotTop + spotHeight / 2}px`,
        left: `${spotLeft + spotWidth + gap}px`,
        transform: "translateY(-50%)",
      };
  }
}

export function SpotlightTour({
  isActive,
  step,
  targetRect,
  currentStep,
  totalSteps,
  isFirst,
  isLast,
  onNext,
  onPrev,
  onSkip,
  padding = 8,
  className,
}: SpotlightTourProps) {
  if (!isActive || !step || !targetRect) return null;

  const placement = step.placement || "bottom";
  const tooltipStyle = getTooltipPosition(targetRect, placement, padding);

  const spotTop = targetRect.top - padding;
  const spotLeft = targetRect.left - padding;
  const spotWidth = targetRect.width + padding * 2;
  const spotHeight = targetRect.height + padding * 2;

  return (
    <div className={cn("fixed inset-0 z-[9999]", className)} aria-modal="true" role="dialog">
      {/* Overlay with cutout using box-shadow */}
      <div
        className="absolute rounded-lg"
        style={{
          top: spotTop,
          left: spotLeft,
          width: spotWidth,
          height: spotHeight,
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
          pointerEvents: "none",
        }}
      />

      {/* Click blocker on overlay area (but not the spotlight) */}
      <div
        className="fixed inset-0"
        style={{ pointerEvents: "auto" }}
        onClick={onSkip}
      />

      {/* Allow interaction with spotlighted element */}
      <div
        className="absolute"
        style={{
          top: spotTop,
          left: spotLeft,
          width: spotWidth,
          height: spotHeight,
          pointerEvents: "none",
        }}
      />

      {/* Tooltip */}
      <div
        className={cn(
          "absolute z-10 w-80 max-w-[calc(100vw-2rem)]",
          "rounded-xl",
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-700",
          "shadow-2xl shadow-black/20 dark:shadow-black/50",
          "animate-[spotlight-in_200ms_ease-out]"
        )}
        style={{ ...tooltipStyle, pointerEvents: "auto" }}
      >
        <div className="p-4">
          {/* Step counter */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
              {currentStep + 1} of {totalSteps}
            </span>
            <button
              onClick={onSkip}
              className="text-[11px] text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Skip tour
            </button>
          </div>

          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
            {step.title}
          </h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {step.content}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-100 dark:border-neutral-800">
          <div>
            {!isFirst && (
              <button
                onClick={onPrev}
                className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors cursor-pointer"
              >
                Back
              </button>
            )}
          </div>
          <button
            onClick={onNext}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              "bg-indigo-600 text-white hover:bg-indigo-700",
              "dark:bg-indigo-500 dark:hover:bg-indigo-600"
            )}
          >
            {isLast ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spotlight-in {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
