import { View, Text, ScrollView } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface CodeProps {
  block?: boolean;
  children: ReactNode;
  className?: string;
}

export function Code({ block = false, children, className }: CodeProps) {
  if (block) {
    return (
      <ScrollView
        horizontal
        accessibilityRole="text"
        accessibilityLabel="Code block"
        className={cn(
          "rounded-xl bg-neutral-100 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800",
          className,
        )}
      >
        <Text className="text-sm font-mono text-neutral-800 dark:text-neutral-100">
          {children}
        </Text>
      </ScrollView>
    );
  }

  return (
    <View
      className={cn(
        "rounded-md bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5",
        className,
      )}
      accessibilityRole="text"
    >
      <Text className="text-sm font-mono text-neutral-800 dark:text-neutral-100">
        {children}
      </Text>
    </View>
  );
}
