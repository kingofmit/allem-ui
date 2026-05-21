import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export type ChangelogGroupType = "added" | "changed" | "fixed" | "removed" | "deprecated";

export interface ChangelogGroupProps {
  type: ChangelogGroupType;
  children: ReactNode;
  className?: string;
}

const headingConfig: Record<ChangelogGroupType, { label: string; dotClass: string; textClass: string }> = {
  added: {
    label: "Added",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    textClass: "text-emerald-700 dark:text-emerald-300",
  },
  changed: {
    label: "Changed",
    dotClass: "bg-indigo-500 dark:bg-indigo-400",
    textClass: "text-indigo-700 dark:text-indigo-300",
  },
  fixed: {
    label: "Fixed",
    dotClass: "bg-amber-500 dark:bg-amber-400",
    textClass: "text-amber-700 dark:text-amber-300",
  },
  removed: {
    label: "Removed",
    dotClass: "bg-red-500 dark:bg-red-400",
    textClass: "text-red-700 dark:text-red-300",
  },
  deprecated: {
    label: "Deprecated",
    dotClass: "bg-neutral-400 dark:bg-neutral-500",
    textClass: "text-neutral-600 dark:text-neutral-400",
  },
};

export function ChangelogGroup({ type, children, className }: ChangelogGroupProps) {
  const config = headingConfig[type];

  return (
    <div className={cn("space-y-2", className)}>
      {/* Group heading with colored dot */}
      <div className="flex items-center gap-2">
        <span className={cn("inline-block h-2 w-2 rounded-full", config.dotClass)} />
        <h4 className={cn("text-sm font-semibold", config.textClass)}>{config.label}</h4>
      </div>

      {/* List of items */}
      <ul className="space-y-1 pl-4">
        {children}
      </ul>
    </div>
  );
}

// Convenience sub-component for individual items
export interface ChangelogGroupItemProps {
  children: ReactNode;
  className?: string;
}

export function ChangelogGroupItem({ children, className }: ChangelogGroupItemProps) {
  return (
    <li
      className={cn(
        "relative pl-4 text-sm text-neutral-700 dark:text-neutral-300",
        "before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2",
        "before:bg-neutral-300 dark:before:bg-neutral-700",
        className,
      )}
    >
      {children}
    </li>
  );
}
