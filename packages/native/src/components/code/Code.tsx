import { View, Text, ScrollView, Platform } from "react-native";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface CodeProps {
  block?: boolean;
  children: ReactNode;
  className?: string;
}

export function Code({ block = false, children }: CodeProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const fontFamily = Platform.OS === "ios" ? "Menlo" : "monospace";

  if (block) {
    return (
      <ScrollView
        horizontal
        accessibilityRole="text"
        accessibilityLabel="Code block"
        style={{
          borderRadius: 12,
          backgroundColor: isDark ? "#1c1c1e" : "#f5f5f5",
          padding: 16,
          borderWidth: 1,
          borderColor: isDark ? "#262626" : "#e5e5e5",
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontFamily,
            color: isDark ? "#e5e5e5" : "#292524",
            lineHeight: 20,
          }}
        >
          {children}
        </Text>
      </ScrollView>
    );
  }

  return (
    <View
      accessibilityRole="text"
      style={{
        borderRadius: 6,
        backgroundColor: isDark ? "#262626" : "#f5f5f5",
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignSelf: "flex-start",
      }}
    >
      <Text
        style={{
          fontSize: 13,
          fontFamily,
          color: isDark ? "#e5e5e5" : "#292524",
        }}
      >
        {children}
      </Text>
    </View>
  );
}
