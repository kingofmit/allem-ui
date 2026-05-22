import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Tooltip, Button, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function TooltipScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Tooltip" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Tooltip</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Long-press to reveal contextual info.
        </Text>

        {/* Basic */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            paddingBottom: 60,
            marginBottom: 16,
            overflow: "visible",
            zIndex: 3,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Basic Tooltip
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Long press the button for ~300ms to see the tooltip below.
          </Text>
          <Tooltip content="This is a tooltip!" placement="bottom">
            <Button size="sm">Long press me</Button>
          </Tooltip>
        </View>

        {/* Help */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            paddingBottom: 60,
            marginBottom: 16,
            overflow: "visible",
            zIndex: 2,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Help Tooltip
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Longer tooltip text for detailed explanations.
          </Text>
          <Tooltip content="Press this button to get assistance with your account settings." placement="bottom">
            <Button size="sm" variant="outline">Help</Button>
          </Tooltip>
        </View>

        {/* Top placement */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            paddingTop: 50,
            marginBottom: 24,
            overflow: "visible",
            zIndex: 1,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Top Placement
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tooltip appears above the button.
          </Text>
          <Tooltip content="Tooltip above the button" placement="top">
            <Button size="sm" color="neutral">Show above</Button>
          </Tooltip>
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
            Long press triggers a spring-animated tooltip with haptic feedback. Stays visible for 1.5 seconds after release. Supports top and bottom placement. Dark/light inverted colors for contrast.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
