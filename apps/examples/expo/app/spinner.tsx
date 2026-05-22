import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Spinner, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function SpinnerScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Spinner" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Spinner</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Animated loading indicator with continuous rotation.
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
            Small, medium, and large.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Spinner size="sm" />
              <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3" }}>Small</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Spinner size="md" />
              <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3" }}>Medium</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Spinner size="lg" />
              <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3" }}>Large</Text>
            </View>
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
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Colors
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Primary and neutral color options.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Spinner color="primary" size="lg" />
              <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3" }}>Primary</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Spinner color="neutral" size="lg" />
              <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3" }}>Neutral</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                gap: 8,
                backgroundColor: isDark ? "#ffffff" : "#171717",
                borderRadius: 12,
                padding: 12,
              }}
            >
              <Spinner color="white" size="lg" />
              <Text style={{ fontSize: 11, color: isDark ? "#525252" : "#d4d4d4" }}>White</Text>
            </View>
          </View>
        </View>

        {/* With Label */}
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
            With Label
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Inline text next to spinner.
          </Text>
          <View style={{ gap: 16 }}>
            <Spinner label="Loading..." />
            <Spinner label="Saving changes..." />
            <Spinner label="Uploading files..." size="sm" />
          </View>
        </View>

        {/* Loading States */}
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
            Loading Card
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Centered spinner in a content area.
          </Text>
          <View
            style={{
              height: 120,
              borderRadius: 12,
              backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
              borderWidth: 1,
              borderColor: isDark ? "#262626" : "#e5e5e5",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <Spinner size="lg" />
            <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3" }}>
              Fetching data...
            </Text>
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
            CSS-style border spinner with Animated.loop rotation at 600ms. 3 sizes (16/24/32px), 3 colors (primary, neutral, white). Optional label displays inline. Uses native driver for smooth 60fps animation.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
