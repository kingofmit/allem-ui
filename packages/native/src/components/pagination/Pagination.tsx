import { View, Text, Pressable, ScrollView } from "react-native";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
  siblings?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "h-7 min-w-[28px] px-1",
  md: "h-9 min-w-[36px] px-2",
  lg: "h-11 min-w-[44px] px-3",
};

const textSizeStyles: Record<string, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

function getPages(total: number, current: number, siblings: number): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);

  pages.push(1);
  if (left > 2) pages.push("...");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push("...");
  if (total > 1) pages.push(total);

  return pages;
}

export function Pagination({
  total,
  current,
  onChange,
  siblings = 1,
  size = "md",
  className,
}: PaginationProps) {
  const pages = getPages(total, current, siblings);
  const { selection } = useHaptic();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className={cn("flex-row items-center gap-1", className)}>
        <Pressable
          className={cn(
            "items-center justify-center rounded-lg",
            sizeStyles[size],
            current === 1 && "opacity-50",
          )}
          onPress={() => { if (current > 1) { selection(); onChange(current - 1); } }}
          disabled={current === 1}
          accessibilityLabel="Previous page"
        >
          <Text className={cn("text-neutral-700 dark:text-neutral-300", textSizeStyles[size])}>
            ‹
          </Text>
        </Pressable>

        {pages.map((page, i) => {
          if (page === "...") {
            return (
              <View key={`ellipsis-${i}`} className={cn("items-center justify-center", sizeStyles[size])}>
                <Text className={cn("text-neutral-400 dark:text-neutral-500", textSizeStyles[size])}>…</Text>
              </View>
            );
          }

          const isActive = page === current;
          return (
            <Pressable
              key={page}
              className={cn(
                "items-center justify-center rounded-lg",
                sizeStyles[size],
                isActive
                  ? "bg-indigo-600"
                  : "bg-transparent",
              )}
              onPress={() => { selection(); onChange(page); }}
              accessibilityLabel={`Page ${page}`}
              accessibilityState={isActive ? { selected: true } : undefined}
            >
              <Text
                className={cn(
                  "font-medium",
                  textSizeStyles[size],
                  isActive ? "text-white" : "text-neutral-700 dark:text-neutral-300",
                )}
              >
                {page}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          className={cn(
            "items-center justify-center rounded-lg",
            sizeStyles[size],
            current === total && "opacity-50",
          )}
          onPress={() => { if (current < total) { selection(); onChange(current + 1); } }}
          disabled={current === total}
          accessibilityLabel="Next page"
        >
          <Text className={cn("text-neutral-700 dark:text-neutral-300", textSizeStyles[size])}>
            ›
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
