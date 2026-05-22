import { View } from "react-native";
import { cn } from "../../utils/cn";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ orientation = "horizontal", className }: DividerProps) {
  return (
    <View
      className={cn(
        "bg-neutral-200 dark:bg-neutral-800",
        orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
        className,
      )}
      accessibilityRole="none"
    />
  );
}
