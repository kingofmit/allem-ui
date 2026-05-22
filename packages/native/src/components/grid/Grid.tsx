import { View } from "react-native";
import { Children, isValidElement } from "react";
import type { ReactNode } from "react";

export interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  className?: string;
}

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
}: GridProps) {
  const gapValue = gapValues[gap];

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -(gapValue / 2),
        marginVertical: -(gapValue / 2),
      }}
      accessibilityRole="none"
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return (
          <View
            style={{
              width: `${100 / columns}%`,
              padding: gapValue / 2,
            }}
          >
            {child}
          </View>
        );
      })}
    </View>
  );
}
