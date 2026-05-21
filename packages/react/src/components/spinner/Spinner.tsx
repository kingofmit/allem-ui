import { cn } from "../../utils/cn";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "white";
  label?: string;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-3",
};

const colorStyles: Record<string, string> = {
  primary: "border-indigo-200 border-t-indigo-600",
  neutral: "border-neutral-200 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-300",
  white: "border-white/30 border-t-white",
};

export function Spinner({
  size = "md",
  color = "primary",
  label,
  className,
}: SpinnerProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} role="status">
      <div
        className={cn(
          "rounded-full animate-allem-spin",
          sizeStyles[size],
          colorStyles[color],
        )}
      />
      {label ? (
        <span className="text-sm text-neutral-500 dark:text-neutral-400">{label}</span>
      ) : (
        <span className="sr-only">Loading</span>
      )}
    </div>
  );
}
