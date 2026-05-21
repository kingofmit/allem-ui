"use client";

import { TextField, TextArea as AriaTextArea, Label, Text, type TextFieldProps } from "react-aria-components";
import { cn } from "../../utils/cn";

export interface TextareaProps extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export function Textarea({
  label,
  description,
  errorMessage,
  placeholder,
  rows = 3,
  className,
  ...props
}: TextareaProps) {
  return (
    <TextField className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Label>
      )}
      <AriaTextArea
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-xs placeholder:text-neutral-400 transition-all duration-200 resize-y",
          "hover:border-neutral-300",
          "focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200",
          "dark:bg-neutral-950 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:hover:border-neutral-700 dark:focus:ring-indigo-400/20 dark:focus:border-indigo-400 dark:shadow-none",
          "invalid:border-red-400 invalid:focus:ring-red-600/20 invalid:focus:border-red-500",
        )}
      />
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
    </TextField>
  );
}
