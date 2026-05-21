import { cn } from "../../utils/cn";
import type { ReactNode, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "filled" | "elevated";
  children: ReactNode;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const variantStyles: Record<string, string> = {
  outline: "border border-neutral-200 shadow-xs hover:shadow-sm dark:border-neutral-800 dark:shadow-none dark:hover:border-neutral-700",
  filled: "bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
  elevated: "shadow-md hover:shadow-lg dark:shadow-neutral-950/50",
};

export function Card({ variant = "outline", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white dark:bg-neutral-950 overflow-hidden transition-all duration-200",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn("px-6 py-4 border-b border-neutral-200 dark:border-neutral-800", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-neutral-200 dark:border-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
