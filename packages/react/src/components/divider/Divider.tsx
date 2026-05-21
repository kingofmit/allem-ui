import { cn } from "../../utils/cn";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ orientation = "horizontal", className }: DividerProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "border-neutral-200 dark:border-neutral-800",
        orientation === "horizontal" ? "w-full border-t" : "h-full border-l self-stretch",
        className,
      )}
    />
  );
}
