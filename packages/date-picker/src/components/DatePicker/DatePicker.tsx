"use client";

import {
  DatePicker as AriaDatePicker,
  Group,
  DateInput,
  DateSegment,
  Button,
  Popover,
  Dialog,
  Label,
  Text,
  FieldError,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
} from "react-aria-components";
import { Calendar } from "../Calendar/Calendar";
import { cn } from "../../utils/cn";

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker
      className={cn("group flex flex-col gap-1.5", className)}
      {...props}
    >
      {label && (
        <Label className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {label}
        </Label>
      )}

      <Group
        className={cn(
          "flex h-10 items-center rounded-lg bg-white shadow-xs",
          "border border-neutral-200 transition-all duration-200",
          "focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20",
          "dark:bg-neutral-900 dark:border-neutral-700",
          "dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500/20",
        )}
      >
        <DateInput className="flex flex-1 items-center px-3 py-2">
          {(segment) => (
            <DateSegment
              segment={segment}
              className={({ isFocused, isPlaceholder }) =>
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

        <Button
          className={cn(
            "flex h-full items-center justify-center px-3",
            "text-neutral-400 hover:text-neutral-600 pressed:text-neutral-800",
            "transition-colors duration-150",
            "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:outline-none",
            "dark:text-neutral-500 dark:hover:text-neutral-300",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Group>

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

      <Popover
        className={cn(
          "rounded-xl bg-white shadow-lg ring-1 ring-neutral-200 p-4",
          "entering:animate-in entering:fade-in entering:zoom-in-95",
          "exiting:animate-out exiting:fade-out exiting:zoom-out-95",
          "dark:bg-neutral-900 dark:ring-neutral-700",
        )}
      >
        <Dialog className="outline-none">
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
}
