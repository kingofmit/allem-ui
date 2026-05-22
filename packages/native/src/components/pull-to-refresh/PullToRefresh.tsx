import { ScrollView, RefreshControl } from "react-native";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface PullToRefreshProps {
  children: ReactNode;
  refreshing: boolean;
  onRefresh: () => void;
  tintColor?: string;
  title?: string;
  className?: string;
}

export function PullToRefresh({
  children,
  refreshing,
  onRefresh,
  tintColor = "#6366f1",
  title,
  className,
}: PullToRefreshProps) {
  return (
    <ScrollView
      className={cn("flex-1", className)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={tintColor}
          title={title}
          accessibilityLabel="Pull to refresh"
        />
      }
    >
      {children}
    </ScrollView>
  );
}
