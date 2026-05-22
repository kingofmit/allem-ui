import { View, Text, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface BreadcrumbsProps {
  separator?: ReactNode;
  children: ReactNode;
  className?: string;
}

export interface BreadcrumbItemProps {
  href?: string;
  onPress?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Breadcrumbs({ separator, children }: BreadcrumbsProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const items = Array.isArray(children) ? children : [children];

  const defaultSeparator = (
    <Text
      style={{
        fontSize: 13,
        color: isDark ? "#525252" : "#a3a3a3",
        marginHorizontal: 6,
      }}
      accessibilityElementsHidden
    >
      /
    </Text>
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      accessibilityRole="none"
      accessibilityLabel="Breadcrumb navigation"
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {items.map((child, index) => (
          <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
            {index > 0 && (separator || defaultSeparator)}
            {child}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export function BreadcrumbItem({ onPress, icon, children }: BreadcrumbItemProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [pressed, setPressed] = useState(false);
  const isLast = !onPress;
  const label = typeof children === "string" ? children : undefined;

  if (isLast) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        {icon}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: isDark ? "#ffffff" : "#171717",
          }}
          accessibilityRole="text"
          accessibilityLabel={label ? `Current page: ${label}` : undefined}
        >
          {children}
        </Text>
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      accessibilityRole="link"
      accessibilityLabel={label}
      accessibilityHint="Navigates to this page"
      style={{ opacity: pressed ? 0.6 : 1, flexDirection: "row", alignItems: "center", gap: 4 }}
    >
      {icon}
      <Text
        style={{
          fontSize: 14,
          color: isDark ? "#a3a3a3" : "#737373",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
