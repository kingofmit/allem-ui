import { useState, useCallback } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useHaptic, Button, Flex, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function UseHapticScreen() {
  const haptic = useHaptic();
  const [lastFired, setLastFired] = useState<string | null>(null);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const fire = useCallback((label: string, fn: () => void) => {
    fn();
    setLastFired(label);
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "useHaptic" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">useHaptic</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Haptic feedback hook with graceful fallback.
        </Text>

        {/* Current Status */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 28, marginBottom: 8 }}>
            {lastFired ? "📳" : "📱"}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
            {lastFired ? `Fired: ${lastFired}` : "Tap a button below"}
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 4 }}>
            {lastFired ? "Haptic feedback triggered" : "Physical device required"}
          </Text>
        </View>

        {/* Impact Styles */}
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
            Impact Styles
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Intensity increases from light to heavy.
          </Text>
          <Flex direction="row" gap="sm">
            <Button size="sm" color="primary" onPress={() => fire("Light", () => haptic.trigger("light"))}>
              Light
            </Button>
            <Button size="sm" color="primary" onPress={() => fire("Medium", () => haptic.trigger("medium"))}>
              Medium
            </Button>
            <Button size="sm" color="primary" onPress={() => fire("Heavy", () => haptic.trigger("heavy"))}>
              Heavy
            </Button>
          </Flex>
        </View>

        {/* Notification Styles */}
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
            Notification Styles
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Semantic feedback for different outcomes.
          </Text>
          <Flex direction="row" gap="sm">
            <Button size="sm" color="success" onPress={() => fire("Success", () => haptic.trigger("success"))}>
              Success
            </Button>
            <Button size="sm" color="warning" onPress={() => fire("Warning", () => haptic.trigger("warning"))}>
              Warning
            </Button>
            <Button size="sm" color="danger" onPress={() => fire("Error", () => haptic.trigger("error"))}>
              Error
            </Button>
          </Flex>
        </View>

        {/* Selection */}
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
            Selection Feedback
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Subtle tick for toggles, pickers, and selections.
          </Text>
          <Button size="sm" color="neutral" onPress={() => fire("Selection", () => haptic.selection())}>
            Selection Tap
          </Button>
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
            useHaptic() auto-detects expo-haptics. If not installed, all calls become silent no-ops. No crashes, no config needed.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
