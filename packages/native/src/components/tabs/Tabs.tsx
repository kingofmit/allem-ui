import { View, Text, Pressable, ScrollView, Platform } from "react-native";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

interface TabsContextValue {
  selectedKey: string;
  onSelectionChange: (key: string) => void;
  variant: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps {
  variant?: "underline" | "solid" | "pills";
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string) => void;
  children: ReactNode;
  className?: string;
}

export interface TabListProps {
  children: ReactNode;
  className?: string;
}

export interface TabProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export interface TabPanelProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  variant = "underline",
  selectedKey: controlledKey,
  defaultSelectedKey = "",
  onSelectionChange,
  children,
}: TabsProps) {
  const [internalKey, setInternalKey] = useState(defaultSelectedKey);
  const selectedKey = controlledKey !== undefined ? controlledKey : internalKey;

  const handleChange = (key: string) => {
    if (controlledKey === undefined) setInternalKey(key);
    onSelectionChange?.(key);
  };

  return (
    <TabsContext.Provider value={{ selectedKey, onSelectionChange: handleChange, variant }}>
      <View>
        {children}
      </View>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: TabListProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabList must be used within Tabs");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const listStyle: any = {
    flexDirection: "row",
    gap: 4,
  };

  if (context.variant === "underline") {
    listStyle.borderBottomWidth = 1;
    listStyle.borderBottomColor = isDark ? "#262626" : "#e5e5e5";
  } else if (context.variant === "solid") {
    listStyle.backgroundColor = isDark ? "#262626" : "#f5f5f5";
    listStyle.borderRadius = 8;
    listStyle.padding = 4;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={listStyle}>
        {children}
      </View>
    </ScrollView>
  );
}

const selectedBg: Record<string, { light: string; dark: string }> = {
  underline: { light: "transparent", dark: "transparent" },
  solid: { light: "#ffffff", dark: "#171717" },
  pills: { light: "#4f46e5", dark: "#4f46e5" },
};

const selectedTextColor: Record<string, { light: string; dark: string }> = {
  underline: { light: "#4f46e5", dark: "#818cf8" },
  solid: { light: "#171717", dark: "#ffffff" },
  pills: { light: "#ffffff", dark: "#ffffff" },
};

const unselectedTextColor = { light: "#737373", dark: "#a3a3a3" };

export function Tab({ id, children }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within Tabs");

  const isSelected = context.selectedKey === id;
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const mode = isDark ? "dark" : "light";

  const tabStyle: any = {
    paddingHorizontal: 16,
    paddingVertical: 8,
  };

  if (isSelected) {
    if (context.variant === "underline") {
      tabStyle.borderBottomWidth = 2;
      tabStyle.borderBottomColor = "#4f46e5";
      tabStyle.marginBottom = -1;
    } else if (context.variant === "solid") {
      tabStyle.backgroundColor = selectedBg.solid[mode];
      tabStyle.borderRadius = 6;
      tabStyle.shadowColor = "#000";
      tabStyle.shadowOffset = { width: 0, height: 1 };
      tabStyle.shadowOpacity = 0.1;
      tabStyle.shadowRadius = 2;
      if (Platform.OS === "android") tabStyle.elevation = 1;
    } else if (context.variant === "pills") {
      tabStyle.backgroundColor = selectedBg.pills[mode];
      tabStyle.borderRadius = 9999;
    }
  }

  const textColor = isSelected
    ? selectedTextColor[context.variant]?.[mode]
    : unselectedTextColor[mode];

  return (
    <Pressable
      onPress={() => {
        selection();
        context.onSelectionChange(id);
      }}
      accessibilityRole="tab"
      accessibilityState={{ selected: isSelected }}
      style={tabStyle}
    >
      <Text style={{ fontSize: 14, fontWeight: "500", color: textColor }}>
        {children}
      </Text>
    </Pressable>
  );
}

export function TabPanel({ id, children }: TabPanelProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabPanel must be used within Tabs");

  if (context.selectedKey !== id) return null;

  return (
    <View style={{ paddingTop: 16 }}>
      {children}
    </View>
  );
}
