import { cn } from "../../utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  variant?: "inline" | "block";
  children: ReactNode;
}

export function Code({ variant = "inline", className, children, ...props }: CodeProps) {
  if (variant === "block") {
    return (
      <pre
        className={cn(
          "rounded-xl bg-neutral-900 text-neutral-100 p-4 text-sm font-mono overflow-x-auto ring-1 ring-white/10 shadow-lg dark:bg-neutral-950",
          className,
        )}
        {...props}
      >
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code
      className={cn(
        "rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-800 ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}
