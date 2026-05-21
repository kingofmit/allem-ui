import { cn } from "../../utils/cn";

export type VersionBadgeType = "major" | "minor" | "patch";

export interface VersionBadgeProps {
  version: string;
  type?: VersionBadgeType;
  className?: string;
}

const typeStyles: Record<VersionBadgeType, string> = {
  major:
    "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600/10 dark:bg-indigo-950/50 dark:text-indigo-300 dark:ring-indigo-400/10",
  minor:
    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-400/10",
  patch:
    "bg-neutral-100 text-neutral-700 ring-1 ring-neutral-900/5 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/5",
};

/**
 * Infers the version type from a semver string if not explicitly provided.
 * - x.0.0 = major, x.y.0 = minor, otherwise patch
 */
function inferType(version: string): VersionBadgeType {
  const cleaned = version.replace(/^v/i, "");
  const parts = cleaned.split(".");
  if (parts.length < 3) return "patch";
  if (parts[2] === "0" && parts[1] === "0") return "major";
  if (parts[2] === "0") return "minor";
  return "patch";
}

export function VersionBadge({ version, type, className }: VersionBadgeProps) {
  const resolvedType = type ?? inferType(version);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        typeStyles[resolvedType],
        className,
      )}
    >
      {version}
    </span>
  );
}
