import { View, Text, Pressable, ScrollView } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface BreadcrumbsProps {
  children: ReactNode;
  className?: string;
}

export interface BreadcrumbItemProps {
  href?: string;
  onPress?: () => void;
  children: ReactNode;
  className?: string;
}

export function Breadcrumbs({ children, className }: BreadcrumbsProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      accessibilityRole="none"
      accessibilityLabel="Breadcrumb navigation"
    >
      <View className={cn("flex-row items-center gap-1", className)}>
        {items.map((child, index) => (
          <View key={index} className="flex-row items-center gap-1">
            {index > 0 && (
              <Text
                className="text-neutral-400 dark:text-neutral-600 mx-1"
                accessibilityElementsHidden
              >
                /
              </Text>
            )}
            {child}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export function BreadcrumbItem({ href, onPress, children, className }: BreadcrumbItemProps) {
  const isLast = !href && !onPress;
  const label = typeof children === "string" ? children : undefined;

  if (isLast) {
    return (
      <Text
        className={cn("text-sm font-medium text-neutral-900 dark:text-white", className)}
        accessibilityRole="text"
        accessibilityLabel={label ? `Current page: ${label}` : undefined}
      >
        {children}
      </Text>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      accessibilityLabel={label}
      accessibilityHint="Navigates to this page"
      className={({ pressed }) =>
        cn(pressed && "opacity-70", className)
      }
    >
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        {children}
      </Text>
    </Pressable>
  );
}
