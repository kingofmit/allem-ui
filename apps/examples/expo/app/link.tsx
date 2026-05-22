import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Link, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function LinkScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Link" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Link</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Pressable text that opens URLs via Linking.openURL.
        </Text>

        {/* Basic Links */}
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
            External Links
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap to open in the browser.
          </Text>
          <View style={{ gap: 12 }}>
            <Link href="https://kingallem.com">Allem UI on GitHub</Link>
            <Link href="https://kingallem.com">Expo Documentation</Link>
            <Link href="https://kingallem.com">NativeWind Docs</Link>
          </View>
        </View>

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
            Small, medium, and large link text.
          </Text>
          <View style={{ gap: 12 }}>
            <Link href="https://kingallem.com" size="sm">Small link</Link>
            <Link href="https://kingallem.com" size="md">Medium link</Link>
            <Link href="https://kingallem.com" size="lg">Large link</Link>
          </View>
        </View>

        {/* Colors */}
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
            Colors
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Primary and neutral link colors.
          </Text>
          <View style={{ gap: 12 }}>
            <Link href="https://kingallem.com" color="primary">Primary link</Link>
            <Link href="https://kingallem.com" color="neutral">Neutral link</Link>
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
            Link opens URLs via React Native's Linking API. Supports custom onPress handler, 2 colors, and 3 sizes. Press opacity feedback on tap.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
