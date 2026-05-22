import { View, Text, Image } from "react-native";
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
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

const textSizeStyles: Record<string, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const statusSizeStyles: Record<string, string> = {
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3.5 w-3.5",
};

const statusColorStyles: Record<string, string> = {
  online: "bg-emerald-500",
  offline: "bg-neutral-400",
  away: "bg-amber-500",
  busy: "bg-red-500",
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
    <View className={cn("relative", className)} accessibilityRole="image" accessibilityLabel={alt || name || "Avatar"}>
      {src ? (
        <Image
          source={{ uri: src }}
          className={cn("rounded-full", sizeStyles[size])}
          accessibilityLabel={alt || name || "Avatar"}
        />
      ) : (
        <View
          className={cn(
            "items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900",
            sizeStyles[size],
          )}
          accessibilityLabel={name || "Avatar"}
        >
          <Text
            className={cn(
              "font-medium text-indigo-700 dark:text-indigo-300",
              textSizeStyles[size],
            )}
          >
            {name ? getInitials(name) : "?"}
          </Text>
        </View>
      )}
      {status && (
        <View
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-neutral-950",
            statusSizeStyles[size],
            statusColorStyles[status],
          )}
          accessibilityRole="text"
          accessibilityLabel={`Status: ${status}`}
        />
      )}
    </View>
  );
}
