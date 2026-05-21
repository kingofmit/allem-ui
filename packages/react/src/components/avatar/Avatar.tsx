import { cn } from "../../utils/cn";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "away" | "busy";
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
};

const statusSizeStyles: Record<string, string> = {
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3.5 w-3.5",
};

const statusColorStyles: Record<string, string> = {
  online: "bg-emerald-500 shadow-xs shadow-emerald-500/50",
  offline: "bg-neutral-400",
  away: "bg-amber-500 shadow-xs shadow-amber-500/50",
  busy: "bg-red-500 shadow-xs shadow-red-500/50",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ src, alt, name, size = "md", status, className }: AvatarProps) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      {src ? (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className={cn("rounded-full object-cover", sizeStyles[size])}
        />
      ) : (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 font-medium dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-300",
            sizeStyles[size],
          )}
          aria-label={name || "Avatar"}
        >
          {name ? getInitials(name) : "?"}
        </span>
      )}
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full ring-2 ring-white dark:ring-neutral-950",
            statusSizeStyles[size],
            statusColorStyles[status],
          )}
          aria-label={status}
        />
      )}
    </span>
  );
}
