import { cn } from "../../utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}

const directionStyles: Record<string, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const alignStyles: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyStyles: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const gapStyles: Record<string, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function Flex({
  direction = "row",
  align,
  justify,
  wrap = false,
  gap = "none",
  className,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        directionStyles[direction],
        align && alignStyles[align],
        justify && justifyStyles[justify],
        wrap && "flex-wrap",
        gapStyles[gap],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
