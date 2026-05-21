import { cn } from "../../utils/cn";

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  className?: string;
}

const variantStyles: Record<string, string> = {
  text: "rounded-md h-4 w-full",
  circular: "rounded-full",
  rectangular: "rounded-none",
  rounded: "rounded-lg",
};

export function Skeleton({ variant = "text", width, height, className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-allem-pulse bg-neutral-200/80 dark:bg-neutral-800/80",
        variantStyles[variant],
        className,
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      role="status"
      aria-label="Loading"
    />
  );
}
