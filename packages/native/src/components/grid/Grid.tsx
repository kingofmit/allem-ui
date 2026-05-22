import { View } from "react-native";
import { Children, cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  className?: string;
}

const gapStyles: Record<string, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const gapValues: Record<string, number> = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export function Grid({
  columns = 1,
  gap = "md",
  children,
  className,
  ...props
}: GridProps) {
  const gapValue = gapValues[gap];
  const childWidth = `${(100 / columns).toFixed(4)}%`;

  return (
    <View
      className={cn("flex-row flex-wrap", gapStyles[gap], className)}
      accessibilityRole="none"
      {...props}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return (
          <View
            style={{
              width: childWidth,
              maxWidth: childWidth,
              flexBasis: childWidth,
              // Adjust for gap: each item's width needs to account for gaps
              ...(columns > 1 && gapValue > 0
                ? {
                    width: `${100 / columns}%`,
                    maxWidth: `${100 / columns}%`,
                    flexBasis: `${100 / columns}%`,
                  }
                : {}),
            }}
          >
            {child}
          </View>
        );
      })}
    </View>
  );
}
