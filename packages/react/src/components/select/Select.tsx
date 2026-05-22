"use client";

import {
  Select as AriaSelect,
  SelectValue,
  Label,
  Button,
  Popover,
  ListBox,
  ListBoxItem,
  Text,
  type SelectProps as AriaSelectProps,
  type ListBoxItemProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export interface SelectItemProps extends Omit<ListBoxItemProps, "children"> {
  children: ReactNode;
}

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  size = "md",
  className,
  children,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Label>
      )}
      <Button
        className={cn(
          "flex items-center justify-between rounded-lg border border-neutral-200 bg-white text-neutral-900 shadow-xs transition-all duration-200 cursor-pointer",
          "hover:border-neutral-300",
          "focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200",
          "dark:bg-neutral-950 dark:border-neutral-800 dark:text-white dark:hover:border-neutral-700 dark:focus:ring-indigo-400/20 dark:focus:border-indigo-400 dark:shadow-none",
          sizeStyles[size],
        )}
      >
        <SelectValue className="truncate placeholder-shown:text-neutral-400 dark:placeholder-shown:text-neutral-500">
          {({ defaultChildren, isPlaceholder }) =>
            isPlaceholder ? (placeholder || "Select...") : defaultChildren
          }
        </SelectValue>
        <svg
          className="ml-2 h-4 w-4 text-neutral-400 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Button>
      <Popover className="w-[var(--trigger-width)] rounded-xl bg-white shadow-lg ring-1 ring-neutral-950/5 dark:bg-neutral-900 dark:ring-white/10 overflow-hidden animate-allem-fade-in">
        <ListBox className="outline-none py-1 max-h-60 overflow-auto">
          {children as any}
        </ListBox>
      </Popover>
      {description && !errorMessage && (
        <Text slot="description" className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="text-xs text-red-500">
          {errorMessage}
        </Text>
      )}
    </AriaSelect>
  );
}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <ListBoxItem
      className={cn(
        "px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer outline-none transition-colors duration-150 rounded-md mx-1",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "focus:bg-neutral-100 dark:focus:bg-neutral-800",
        "selected:bg-indigo-50 selected:text-indigo-700 selected:font-medium dark:selected:bg-indigo-950/50 dark:selected:text-indigo-300",
        className as string,
      )}
      {...props}
    >
      {children as any}
    </ListBoxItem>
  );
}
