"use client";

import {
  Calendar as AriaCalendar,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  Heading,
  Button,
  type CalendarProps as AriaCalendarProps,
  type DateValue,
} from "react-aria-components";
import { cn } from "../../utils/cn";

export interface CalendarProps<T extends DateValue>
  extends AriaCalendarProps<T> {
  className?: string;
}

export function Calendar<T extends DateValue>({
  className,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar
      className={cn(
        "w-fit",
        className,
      )}
      {...props}
    >
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
              className={({ isSelected, isDisabled, isFocusVisible, isOutsideMonth }) =>
                cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-sm",
                  "transition-all duration-150 cursor-pointer",
                  "focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:outline-none",
                  !isSelected && !isDisabled && !isOutsideMonth &&
                    "text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800",
                  isSelected &&
                    "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 hover:bg-indigo-500",
                  isOutsideMonth && !isSelected &&
                    "text-neutral-300 dark:text-neutral-600",
                  isDisabled &&
                    "opacity-30 cursor-not-allowed",
                )
              }
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
