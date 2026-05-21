import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface ChangelogTimelineProps {
  children: ReactNode;
  className?: string;
}

export function ChangelogTimeline({ children, className }: ChangelogTimelineProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 pl-8",
        // Vertical timeline line
        "before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px",
        "before:bg-neutral-200 dark:before:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
}
