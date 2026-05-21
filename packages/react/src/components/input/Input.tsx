"use client";

import { TextField, Input as AriaInput, Label, Text, type TextFieldProps } from "react-aria-components";
import { cn } from "../../utils/cn";

export interface InputProps extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

export function Input({
  label,
  description,
  errorMessage,
  placeholder,
  size = "md",
  className,
  ...props
}: InputProps) {
  return (
    <TextField className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Label>
      )}
      <AriaInput
        placeholder={placeholder}
        className={cn(
          "rounded-lg border border-neutral-200 bg-white text-neutral-900 shadow-xs placeholder:text-neutral-400 transition-all duration-200",
          "hover:border-neutral-300",
          "focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200",
          "dark:bg-neutral-950 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:hover:border-neutral-700 dark:focus:ring-indigo-400/20 dark:focus:border-indigo-400 dark:shadow-none",
          "invalid:border-red-400 invalid:focus:ring-red-600/20 invalid:focus:border-red-500",
          sizeStyles[size],
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
