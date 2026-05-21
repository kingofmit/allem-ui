"use client";

import {
  DateRangePicker as AriaDateRangePicker,
  Group,
  DateInput,
  DateSegment,
  Button,
  Popover,
  Dialog,
  Label,
  Text,
  FieldError,
  RangeCalendar,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  Heading,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue,
} from "react-aria-components";
import { cn } from "../../utils/cn";

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
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
        <DateInput
          slot="start"
          className="flex items-center pl-3 py-2"
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

        <span className="px-1.5 text-neutral-400 dark:text-neutral-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <DateInput
          slot="end"
          className="flex flex-1 items-center py-2"
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
          <RangeCalendar className="w-fit">
            <header className="flex items-center justify-between gap-2 pb-4">
              <Button
                slot="previous"
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  "text-neutral-600 hover:bg-neutral-100 pressed:bg-neutral-200",
                  "transition-all duration-150",
                  "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:outline-none",
                  "dark:text-neutral-400 dark:hover:bg-neutral-800 dark:pressed:bg-neutral-700",
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
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              <Heading className="text-sm font-semibold text-neutral-900 dark:text-neutral-100" />

              <Button
                slot="next"
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  "text-neutral-600 hover:bg-neutral-100 pressed:bg-neutral-200",
                  "transition-all duration-150",
                  "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:outline-none",
                  "dark:text-neutral-400 dark:hover:bg-neutral-800 dark:pressed:bg-neutral-700",
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
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </header>

            <CalendarGrid className="w-full border-spacing-1 border-separate">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-xs font-medium text-neutral-500 dark:text-neutral-400 w-9 h-9">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>

              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={({
                      isSelected,
                      isDisabled,
                      isOutsideMonth,
                      isSelectionStart,
                      isSelectionEnd,
                    }) =>
                      cn(
                        "flex h-9 w-9 items-center justify-center text-sm",
                        "transition-all duration-150 cursor-pointer",
                        "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:outline-none",
                        !isSelected && !isDisabled && !isOutsideMonth &&
                          "text-neutral-900 hover:bg-neutral-100 rounded-lg dark:text-neutral-100 dark:hover:bg-neutral-800",
                        isSelected &&
                          !isSelectionStart &&
                          !isSelectionEnd &&
                          "bg-indigo-50 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-100",
                        (isSelectionStart || isSelectionEnd) &&
                          "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 rounded-lg",
                        isSelected && isSelectionStart && "rounded-l-lg",
                        isSelected && isSelectionEnd && "rounded-r-lg",
                        isOutsideMonth && !isSelected &&
                          "text-neutral-300 dark:text-neutral-600",
                        isDisabled && "opacity-30 cursor-not-allowed",
                      )
                    }
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}
