import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Code, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function CodeScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Code" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Code</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Inline and block code display with monospace font.
        </Text>

        {/* Inline */}
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
            Inline Code
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Code snippets within a sentence.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
            <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>Use </Text>
            <Code>pnpm add @allem-ui/native</Code>
            <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}> to install.</Text>
          </View>
        </View>

        {/* Block */}
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
            Code Block
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Multi-line code with horizontal scrolling.
          </Text>
          <Code block>{`import { Button } from "@allem-ui/native";

export function App() {
  return (
    <Button onPress={() => alert("Hello!")}>
      Press me
    </Button>
  );
}`}</Code>
        </View>

        {/* Another block */}
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
            Theme Colors
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Configuration example.
          </Text>
          <Code block>{`const colors = {
  primary: "#4f46e5",
  success: "#10b981",
  danger: "#ef4444",
  warning: "#f59e0b",
};`}</Code>
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
            Uses Menlo (iOS) or monospace (Android) font. Inline mode renders a compact pill. Block mode wraps in a ScrollView for horizontal overflow. Dark mode inverts background and text colors.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
