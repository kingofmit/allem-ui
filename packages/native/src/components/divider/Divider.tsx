import { View } from "react-native";
import { useColorScheme } from "nativewind";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  color?: string;
  className?: string;
}

export function Divider({ orientation = "horizontal", color, className }: DividerProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const bgColor = color || (isDark ? "#262626" : "#e5e5e5");

  return (
    <View
      className={className}
      style={
        orientation === "horizontal"
          ? { height: 1, width: "100%", backgroundColor: bgColor }
          : { width: 1, alignSelf: "stretch", backgroundColor: bgColor }
      }
      accessibilityRole="none"
    />
  );
}
