import { View } from "react-native";
import type { ReactNode } from "react";

export interface FlexProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  className?: string;
}

const alignMap: Record<string, "flex-start" | "center" | "flex-end" | "stretch" | "baseline"> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const justifyMap: Record<string, "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const gapMap: Record<string, number> = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export function Flex({
  direction = "row",
  align,
  justify,
  wrap = false,
  gap = "none",
  children,
}: FlexProps) {
  const style: any = {
    flexDirection: direction,
    gap: gapMap[gap],
  };

  if (align) style.alignItems = alignMap[align];
  if (justify) style.justifyContent = justifyMap[justify];
  if (wrap) style.flexWrap = "wrap";

  return <View style={style}>{children}</View>;
}
