import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { StatusBarManager, Button, Flex, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function StatusBarManagerScreen() {
  const [barStyle, setBarStyle] = useState<"default" | "light-content" | "dark-content">("default");
  const [hidden, setHidden] = useState(false);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Status Bar Manager" }} />
      <StatusBarManager style={barStyle} hidden={hidden} animated />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">StatusBarManager</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Declarative status bar control component.
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
            {hidden ? "🙈" : "📊"}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
            {hidden ? "Status bar hidden" : `Style: ${barStyle}`}
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 4 }}>
            Declarative status bar control
          </Text>
        </View>

        {/* Bar Style */}
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
            Bar Style
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Controls the color of status bar text and icons.
          </Text>
          <Flex direction="row" gap="sm">
            <Button
              size="sm"
              color={barStyle === "default" ? "primary" : "neutral"}
              variant={barStyle === "default" ? "solid" : "outline"}
              onPress={() => setBarStyle("default")}
            >
              Default
            </Button>
            <Button
              size="sm"
              color={barStyle === "light-content" ? "primary" : "neutral"}
              variant={barStyle === "light-content" ? "solid" : "outline"}
              onPress={() => setBarStyle("light-content")}
            >
              Light
            </Button>
            <Button
              size="sm"
              color={barStyle === "dark-content" ? "primary" : "neutral"}
              variant={barStyle === "dark-content" ? "solid" : "outline"}
              onPress={() => setBarStyle("dark-content")}
            >
              Dark
            </Button>
          </Flex>
        </View>

        {/* Visibility */}
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
            Visibility
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Animated transition when toggling visibility.
          </Text>
          <Button
            size="sm"
            color={hidden ? "danger" : "success"}
            onPress={() => setHidden(!hidden)}
          >
            {hidden ? "Show Status Bar" : "Hide Status Bar"}
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
            StatusBarManager wraps React Native's StatusBar as a declarative component. Just render it with your desired props — no imperative calls needed.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
