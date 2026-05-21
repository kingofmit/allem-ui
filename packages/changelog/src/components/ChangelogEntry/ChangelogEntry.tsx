import { cn } from "../../utils/cn";
import { VersionBadge } from "../VersionBadge";
import type { ReactNode } from "react";

export type ChangelogEntryType = "added" | "changed" | "fixed" | "removed" | "deprecated";

export interface ChangelogEntryProps {
  date: string;
  version: string;
  title: string;
  description?: string;
  children?: ReactNode;
  type?: ChangelogEntryType;
  className?: string;
}

const dotStyles: Record<ChangelogEntryType, string> = {
  added: "bg-emerald-500 ring-emerald-500/20 dark:bg-emerald-400 dark:ring-emerald-400/20",
  changed: "bg-indigo-500 ring-indigo-500/20 dark:bg-indigo-400 dark:ring-indigo-400/20",
  fixed: "bg-amber-500 ring-amber-500/20 dark:bg-amber-400 dark:ring-amber-400/20",
  removed: "bg-red-500 ring-red-500/20 dark:bg-red-400 dark:ring-red-400/20",
  deprecated: "bg-neutral-400 ring-neutral-400/20 dark:bg-neutral-500 dark:ring-neutral-500/20",
};

export function ChangelogEntry({
  date,
  version,
  title,
  description,
  children,
  type = "added",
  className,
}: ChangelogEntryProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute -left-8 top-3 h-[11px] w-[11px] rounded-full ring-4",
          "translate-x-[4px]",
          dotStyles[type],
        )}
      />

      {/* Entry card */}
      <div
        className={cn(
          "rounded-lg bg-white shadow-xs ring-1 ring-neutral-950/5",
          "transition-all duration-200 hover:shadow-sm",
          "dark:bg-neutral-950 dark:ring-white/10 dark:hover:ring-white/15",
          "p-5",
        )}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <VersionBadge version={version} />
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>

        {/* Description */}
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}

        {/* Children slot for nested content like ChangelogGroup */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
