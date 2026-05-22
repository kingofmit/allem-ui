import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Box, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function BoxScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Box" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Box</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Basic layout primitive — a View with className support.
        </Text>

        {/* Basic */}
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
            Basic Boxes
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Padding, background, and border radius via className.
          </Text>
          <View style={{ gap: 12 }}>
            <Box className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl">
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Ionicons name="cube-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} />
                <Text style={{ fontSize: 14, color: isDark ? "#c7d2fe" : "#4338ca" }}>Indigo Box</Text>
              </View>
            </Box>
            <Box className="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl border border-emerald-300 dark:border-emerald-700">
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Ionicons name="checkmark-circle-outline" size={18} color={isDark ? "#34d399" : "#059669"} />
                <Text style={{ fontSize: 14, color: isDark ? "#6ee7b7" : "#065f46" }}>Emerald Box with border</Text>
              </View>
            </Box>
            <Box className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-xl">
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Ionicons name="alert-circle-outline" size={18} color={isDark ? "#fbbf24" : "#d97706"} />
                <Text style={{ fontSize: 14, color: isDark ? "#fcd34d" : "#92400e" }}>Amber Box</Text>
              </View>
            </Box>
          </View>
        </View>

        {/* Layout */}
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
            Layout Composition
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Nest boxes for row and grid layouts.
          </Text>
          <View style={{ gap: 12 }}>
            <Box className="flex-row gap-3">
              <Box className="flex-1 p-4 bg-sky-100 dark:bg-sky-900/40 rounded-xl items-center">
                <Ionicons name="phone-portrait-outline" size={22} color={isDark ? "#38bdf8" : "#0284c7"} />
                <Text style={{ fontSize: 12, color: isDark ? "#7dd3fc" : "#075985", marginTop: 4 }}>Mobile</Text>
              </Box>
              <Box className="flex-1 p-4 bg-violet-100 dark:bg-violet-900/40 rounded-xl items-center">
                <Ionicons name="tablet-portrait-outline" size={22} color={isDark ? "#a78bfa" : "#7c3aed"} />
                <Text style={{ fontSize: 12, color: isDark ? "#c4b5fd" : "#5b21b6", marginTop: 4 }}>Tablet</Text>
              </Box>
              <Box className="flex-1 p-4 bg-pink-100 dark:bg-pink-900/40 rounded-xl items-center">
                <Ionicons name="desktop-outline" size={22} color={isDark ? "#f472b6" : "#db2777"} />
                <Text style={{ fontSize: 12, color: isDark ? "#f9a8d4" : "#9d174d", marginTop: 4 }}>Desktop</Text>
              </Box>
            </Box>
            <Box className="flex-row gap-3">
              <Box className="flex-1 p-3 bg-rose-100 dark:bg-rose-900/40 rounded-xl">
                <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#fda4af" : "#be123c" }}>Left</Text>
              </Box>
              <Box className="flex-[2] p-3 bg-teal-100 dark:bg-teal-900/40 rounded-xl">
                <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#5eead4" : "#0f766e" }}>Center (2x)</Text>
              </Box>
              <Box className="flex-1 p-3 bg-rose-100 dark:bg-rose-900/40 rounded-xl">
                <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#fda4af" : "#be123c" }}>Right</Text>
              </Box>
            </Box>
          </View>
        </View>

        {/* Nesting */}
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
            Nested Boxes
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Build complex layouts with nesting.
          </Text>
          <Box className="p-4 bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl">
            <Box className="p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-xl mb-3">
              <Box className="p-3 bg-indigo-500 rounded-lg">
                <Text style={{ fontSize: 13, color: "#ffffff", textAlign: "center", fontWeight: "600" }}>
                  Deepest Level
                </Text>
              </Box>
            </Box>
            <Box className="flex-row gap-3">
              <Box className="flex-1 p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-xl items-center">
                <Text style={{ fontSize: 12, color: isDark ? "#a3a3a3" : "#525252" }}>Sibling A</Text>
              </Box>
              <Box className="flex-1 p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-xl items-center">
                <Text style={{ fontSize: 12, color: isDark ? "#a3a3a3" : "#525252" }}>Sibling B</Text>
              </Box>
            </Box>
          </Box>
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
            Box is the simplest layout primitive — a View that accepts className for NativeWind styling. Use it for padding, backgrounds, borders, flex layouts, and nesting. Zero overhead, full Tailwind support.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
