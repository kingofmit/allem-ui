import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Badge, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function BadgeScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Badge" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Badge</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Compact label for status, categories, and counts.
        </Text>

        {/* Solid */}
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
            Solid
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Filled background with white text.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            <Badge variant="solid" color="primary">Primary</Badge>
            <Badge variant="solid" color="neutral">Neutral</Badge>
            <Badge variant="solid" color="success">Success</Badge>
            <Badge variant="solid" color="danger">Danger</Badge>
            <Badge variant="solid" color="warning">Warning</Badge>
          </View>
        </View>

        {/* Subtle */}
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
            Subtle (Default)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Translucent background with colored text.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            <Badge color="primary">Primary</Badge>
            <Badge color="neutral">Neutral</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
          </View>
        </View>

        {/* Outline */}
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
            Outline
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Border only with colored text.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            <Badge variant="outline" color="primary">Primary</Badge>
            <Badge variant="outline" color="neutral">Neutral</Badge>
            <Badge variant="outline" color="success">Success</Badge>
            <Badge variant="outline" color="danger">Danger</Badge>
            <Badge variant="outline" color="warning">Warning</Badge>
          </View>
        </View>

        {/* With Icons */}
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
            With Icons
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Leading icon for extra context.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            <Badge variant="solid" color="success" icon={<Ionicons name="checkmark-circle" size={12} color="#ffffff" />}>
              Verified
            </Badge>
            <Badge variant="solid" color="danger" icon={<Ionicons name="alert-circle" size={12} color="#ffffff" />}>
              Error
            </Badge>
            <Badge color="primary" icon={<Ionicons name="time-outline" size={12} color={isDark ? "#a5b4fc" : "#4338ca"} />}>
              Pending
            </Badge>
            <Badge color="warning" icon={<Ionicons name="star" size={12} color={isDark ? "#fcd34d" : "#b45309"} />}>
              Featured
            </Badge>
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
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Sizes
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Small, medium, and large.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
            <Badge variant="solid" size="sm" color="primary">Small</Badge>
            <Badge variant="solid" size="md" color="primary">Medium</Badge>
            <Badge variant="solid" size="lg" color="primary">Large</Badge>
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
            3 variants (solid, subtle, outline), 5 colors, 3 sizes. Supports icon prop for leading icons. Pill-shaped with full border radius. All inline styles for reliable rendering.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
