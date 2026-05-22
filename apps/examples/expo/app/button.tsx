import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Button, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Button" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Button</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Pressable button with haptic feedback and multiple styles.
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
            Solid, outline, ghost, and link styles.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            <Button onPress={() => {}}>Solid</Button>
            <Button variant="outline" onPress={() => {}}>Outline</Button>
            <Button variant="ghost" onPress={() => {}}>Ghost</Button>
            <Button variant="link" onPress={() => {}}>Link</Button>
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
            5 color options for every variant.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            <Button color="primary" onPress={() => {}}>Primary</Button>
            <Button color="neutral" onPress={() => {}}>Neutral</Button>
            <Button color="success" onPress={() => {}}>Success</Button>
            <Button color="danger" onPress={() => {}}>Danger</Button>
            <Button color="warning" onPress={() => {}}>Warning</Button>
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
            Small, medium, and large.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            <Button size="sm" onPress={() => {}}>Small</Button>
            <Button size="md" onPress={() => {}}>Medium</Button>
            <Button size="lg" onPress={() => {}}>Large</Button>
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
            Buttons with leading or trailing icons.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            <Button onPress={() => {}}>
              <Ionicons name="add" size={16} color="#ffffff" />
              Create
            </Button>
            <Button color="danger" onPress={() => {}}>
              <Ionicons name="trash-outline" size={16} color="#ffffff" />
              Delete
            </Button>
            <Button variant="outline" onPress={() => {}}>
              <Ionicons name="download-outline" size={16} color={isDark ? "#818cf8" : "#4f46e5"} />
              Export
            </Button>
            <Button color="success" onPress={() => {}}>
              <Ionicons name="checkmark" size={16} color="#ffffff" />
              Save
            </Button>
          </View>
        </View>

        {/* States */}
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
            States
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Loading and disabled buttons.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            <Button loading onPress={() => {}}>Loading</Button>
            <Button disabled onPress={() => {}}>Disabled</Button>
          </View>
        </View>

        {/* Full Width */}
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
            Full Width
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Button stretches to fill container.
          </Text>
          <Button fullWidth onPress={() => {}}>
            <Ionicons name="rocket-outline" size={16} color="#ffffff" />
            Launch Project
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
            4 variants (solid, outline, ghost, link), 5 colors, 3 sizes. Haptic feedback on press. Supports icons as children, loading/disabled states, and fullWidth mode. Solid and outline have matching borderWidth for consistent height.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
