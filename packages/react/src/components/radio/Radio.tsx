"use client";

import {
  RadioGroup as AriaRadioGroup,
  Radio as AriaRadio,
  Label,
  Text,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  children: ReactNode;
  className?: string;
}

export interface RadioProps extends Omit<AriaRadioProps, "children"> {
  children?: ReactNode;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup className={cn("flex flex-col gap-2", className)} {...props}>
      {label && (
        <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Label>
      )}
      <div className="flex flex-col gap-2">{children}</div>
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
    </AriaRadioGroup>
  );
}

export function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio
      className={cn(
        "group flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className as string,
      )}
      {...props}
    >
      {({ isSelected }) => (
        <>
          <div
            className={cn(
              "flex items-center justify-center h-4 w-4 rounded-full border-2 transition-all duration-200",
              isSelected
                ? "border-indigo-600 shadow-xs shadow-indigo-600/25"
                : "border-neutral-300 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500",
              "group-focus-visible:ring-2 group-focus-visible:ring-indigo-600/50 group-focus-visible:ring-offset-2",
            )}
          >
            {isSelected && (
              <div className="h-2 w-2 rounded-full bg-indigo-600 animate-allem-fade-in" />
            )}
          </div>
          {children && (
            <span className="text-sm text-neutral-700 dark:text-neutral-300 select-none">
              {children}
            </span>
          )}
        </>
      )}
    </AriaRadio>
  );
}
