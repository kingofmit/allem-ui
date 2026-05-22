import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Heading, Text } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function HeadingScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Heading" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Heading</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Accessible heading with 6 size levels.
        </Text>

        {/* Sizes */}
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
            Sizes
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            From xs to 2xl — semibold for small, bold for large.
          </Text>
          <View style={{ gap: 10 }}>
            <Heading size="2xl">2XL Heading — 36px</Heading>
            <Heading size="xl">XL Heading — 30px</Heading>
            <Heading size="lg">Large Heading — 24px</Heading>
            <Heading size="md">Medium Heading — 18px</Heading>
            <Heading size="sm">Small Heading — 16px</Heading>
            <Heading size="xs">Extra Small — 14px</Heading>
          </View>
        </View>

        {/* Custom Colors */}
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
            Custom Colors
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Override color via className.
          </Text>
          <View style={{ gap: 10 }}>
            <Heading size="md" className="text-indigo-600 dark:text-indigo-400">Indigo Heading</Heading>
            <Heading size="md" className="text-emerald-600 dark:text-emerald-400">Emerald Heading</Heading>
            <Heading size="md" className="text-rose-600 dark:text-rose-400">Rose Heading</Heading>
            <Heading size="md" className="text-amber-600 dark:text-amber-400">Amber Heading</Heading>
          </View>
        </View>

        {/* Real World */}
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
            Article Example
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Heading hierarchy in a content layout.
          </Text>
          <View style={{ gap: 6 }}>
            <Heading size="xl">Getting Started</Heading>
            <Text color="muted" size="sm" className="mb-2">A quick guide to Allem UI components.</Text>
            <Heading size="md">Installation</Heading>
            <Text color="muted" size="sm" className="mb-2">Install the package using your preferred package manager.</Text>
            <Heading size="sm">Prerequisites</Heading>
            <Text color="muted" size="sm" className="mb-2">Make sure you have React Native 0.73+ and NativeWind v4 configured.</Text>
            <Heading size="xs">System Requirements</Heading>
            <Text color="muted" size="sm">Node.js 18+, pnpm or npm, Expo SDK 53.</Text>
          </View>
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
            Wraps React Native Text with accessibilityRole="header". 6 sizes: xs/sm use semibold, lg/xl/2xl use bold with tight tracking. Supports className for color overrides and custom styling.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
