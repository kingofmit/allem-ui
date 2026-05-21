"use client";

import {
  TimeField as AriaTimeField,
  DateInput,
  DateSegment,
  Label,
  Text,
  FieldError,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue,
} from "react-aria-components";
import { cn } from "../../utils/cn";

export interface TimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField
      className={cn("group flex flex-col gap-1.5", className)}
      {...props}
    >
      {label && (
        <Label className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {label}
        </Label>
      )}

      <DateInput
        className={cn(
          "flex h-10 items-center rounded-lg bg-white px-3 py-2 shadow-xs",
          "border border-neutral-200 transition-all duration-200",
          "focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20",
          "dark:bg-neutral-900 dark:border-neutral-700",
          "dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500/20",
        )}
      >
        {(segment) => (
          <DateSegment
            segment={segment}
            className={({ isPlaceholder }) =>
              cn(
                "rounded px-0.5 text-sm tabular-nums outline-none",
                "focus:bg-indigo-600 focus:text-white",
                isPlaceholder &&
                  "text-neutral-400 dark:text-neutral-500",
                !isPlaceholder &&
                  "text-neutral-900 dark:text-neutral-100",
              )
            }
          />
        )}
      </DateInput>

      {description && (
        <Text
          slot="description"
          className="text-xs text-neutral-500 dark:text-neutral-400"
        >
          {description}
        </Text>
      )}

      <FieldError className="text-xs text-red-600 dark:text-red-400">
        {errorMessage}
      </FieldError>
    </AriaTimeField>
  );
}
