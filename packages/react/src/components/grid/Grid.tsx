import { cn } from "../../utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}

const columnStyles: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapStyles: Record<string, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function Grid({
  columns = 1,
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", columnStyles[columns], gapStyles[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
