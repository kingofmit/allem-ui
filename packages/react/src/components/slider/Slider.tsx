"use client";

import {
  Slider as AriaSlider,
  SliderOutput,
  SliderTrack,
  SliderThumb,
  Label,
  type SliderProps as AriaSliderProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";

export interface SliderProps extends AriaSliderProps {
  label?: string;
  showOutput?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const trackHeights: Record<string, string> = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2",
};

const thumbSizes: Record<string, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function Slider({
  label,
  showOutput = false,
  size = "md",
  className,
  ...props
}: SliderProps) {
  return (
    <AriaSlider className={cn("flex flex-col gap-2 w-full", className)} {...props}>
      {(label || showOutput) && (
        <div className="flex items-center justify-between">
          {label && (
            <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </Label>
          )}
          {showOutput && (
            <SliderOutput className="text-sm text-neutral-500 dark:text-neutral-400" />
          )}
        </div>
      )}
      <SliderTrack className={cn("relative w-full rounded-full bg-neutral-200 dark:bg-neutral-700", trackHeights[size])}>
        {({ state }) => (
          <>
            <div
              className={cn(
                "absolute rounded-full bg-indigo-600 shadow-xs shadow-indigo-600/20",
                trackHeights[size],
              )}
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb
              className={cn(
                "top-1/2 rounded-full bg-white border-2 border-indigo-600 shadow-md transition-all duration-200 cursor-pointer",
                "hover:shadow-lg hover:scale-105",
                "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2",
                "dragging:scale-110 dragging:shadow-lg dragging:shadow-indigo-600/25",
                thumbSizes[size],
              )}
            />
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
