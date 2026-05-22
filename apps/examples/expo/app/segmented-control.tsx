import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { SegmentedControl, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function SegmentedControlScreen() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(1);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const views = ["List", "Grid", "Map"];

  return (
    <>
      <Stack.Screen options={{ title: "Segmented Control" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Segmented Control</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Tab-like selector with animated sliding indicator.
        </Text>

        {/* Default */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Default (md)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            3 segments with spring-animated indicator.
          </Text>
          <SegmentedControl
            segments={views}
            selectedIndex={index1}
            onChange={setIndex1}
          />
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", marginTop: 10 }}>
            Selected: {views[index1]}
          </Text>
        </View>

        {/* Small */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Small
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Compact size for tight layouts.
          </Text>
          <SegmentedControl
            segments={["Daily", "Weekly", "Monthly"]}
            selectedIndex={index2}
            onChange={setIndex2}
            size="sm"
          />
        </View>

        {/* Large */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Large with More Options
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            4 segments in large size.
          </Text>
          <SegmentedControl
            segments={["All", "Active", "Done", "Archived"]}
            selectedIndex={index3}
            onChange={setIndex3}
            size="lg"
          />
        </View>

        {/* Info */}
        <View
          style={{
            borderRadius: 12,
            backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
            borderWidth: 1,
            borderColor: isDark ? "#312e81" : "#c7d2fe",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca", marginBottom: 4 }}>
            How it works
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
            Spring-animated indicator slides between segments. Haptic feedback on selection. Supports 3 sizes (sm, md, lg). All styles are inline for reliable rendering.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
