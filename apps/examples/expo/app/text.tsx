import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function TextScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Text" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Text</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Typography primitive with size, weight, and color props.
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
            4 size options from extra small to large.
          </Text>
          <View style={{ gap: 8 }}>
            <Text size="xs">Extra Small (xs) — text-xs</Text>
            <Text size="sm">Small (sm) — text-sm</Text>
            <Text size="md">Medium (md) — text-base, default</Text>
            <Text size="lg">Large (lg) — text-lg</Text>
          </View>
        </View>

        {/* Weights */}
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
            Weights
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            4 font weight options.
          </Text>
          <View style={{ gap: 8 }}>
            <Text weight="normal">Normal weight</Text>
            <Text weight="medium">Medium weight</Text>
            <Text weight="semibold">Semibold weight</Text>
            <Text weight="bold">Bold weight</Text>
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
            Semantic color options.
          </Text>
          <View style={{ gap: 8 }}>
            <Text color="default">Default — neutral text</Text>
            <Text color="muted">Muted — secondary text</Text>
            <Text color="success">Success — positive feedback</Text>
            <Text color="danger">Danger — error or destructive</Text>
            <Text color="warning">Warning — attention needed</Text>
          </View>
        </View>

        {/* Combined */}
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
            Combined Props
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Mix size, weight, and color together.
          </Text>
          <View style={{ gap: 8 }}>
            <Text size="lg" weight="bold" color="default">Large Bold Default</Text>
            <Text size="sm" weight="semibold" color="success">Small Semibold Success</Text>
            <Text size="xs" weight="medium" color="danger">Extra Small Medium Danger</Text>
            <Text size="md" weight="bold" color="warning">Medium Bold Warning</Text>
            <Text size="lg" weight="normal" color="muted">Large Normal Muted</Text>
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
            Wraps React Native Text with NativeWind className. 4 sizes (xs-lg), 4 weights (normal-bold), 5 semantic colors. Supports className override for custom styling. Also accepts inline style prop.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
