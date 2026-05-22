import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useToast, Button, Flex, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function ToastScreen() {
  const { toast } = useToast();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Toast" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Toast</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Auto-dismissing notification banners with haptic feedback.
        </Text>

        {/* Variants */}
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
            Variants
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            4 variants with matching haptic feedback and color-coded left border.
          </Text>
          <Flex direction="row" gap="sm" wrap>
            <Button
              size="sm"
              onPress={() => toast({ title: "Default", description: "This is a default toast." })}
            >
              Default
            </Button>
            <Button
              size="sm"
              color="success"
              onPress={() => toast({ title: "Success!", description: "Operation completed.", variant: "success" })}
            >
              Success
            </Button>
            <Button
              size="sm"
              color="danger"
              onPress={() => toast({ title: "Error", description: "Something went wrong.", variant: "danger" })}
            >
              Danger
            </Button>
            <Button
              size="sm"
              color="warning"
              onPress={() => toast({ title: "Warning", description: "Please check your input.", variant: "warning" })}
            >
              Warning
            </Button>
          </Flex>
        </View>

        {/* Title Only */}
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
            Title Only
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Compact toast with just a title, no description.
          </Text>
          <Button
            size="sm"
            variant="outline"
            onPress={() => toast({ title: "Saved successfully!" })}
          >
            Show Title Only
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
            ToastProvider wraps your app and renders toasts above all content. Each variant triggers matching haptic feedback. Auto-dismisses after 5 seconds with fade + slide animation. Safe area insets respected.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
