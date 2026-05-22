import { View, Text, Pressable, LayoutAnimation } from "react-native";
import { useState } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface AccordionProps {
  allowsMultipleExpanded?: boolean;
  children: ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isExpanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (isExpanded: boolean) => void;
  className?: string;
}

export function Accordion({ children }: AccordionProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: isDark ? "#262626" : "#e5e5e5",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
      }}
    >
      {children}
    </View>
  );
}

export function AccordionItem({
  title,
  children,
  isExpanded: controlledExpanded,
  defaultExpanded = false,
  onExpandedChange,
}: AccordionItemProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handlePress = () => {
    selection();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = !isExpanded;
    if (controlledExpanded === undefined) setInternalExpanded(next);
    onExpandedChange?.(next);
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: isDark ? "#262626" : "#e5e5e5",
      }}
    >
      <Pressable
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityState={{ expanded: isExpanded }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 14,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: isDark ? "#ffffff" : "#171717",
            flex: 1,
            paddingRight: 8,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: isDark ? "#525252" : "#a3a3a3",
            transform: [{ rotate: isExpanded ? "180deg" : "0deg" }],
          }}
        >
          ▼
        </Text>
      </Pressable>
      {isExpanded && (
        <View style={{ paddingBottom: 14, paddingHorizontal: 16 }}>
          {children}
        </View>
      )}
    </View>
  );
}
