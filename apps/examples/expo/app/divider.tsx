import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Divider, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function DividerScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Divider" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Divider</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Visual separator for content sections.
        </Text>

        {/* Horizontal */}
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
            Horizontal
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Default orientation — full width line.
          </Text>
          <View style={{ gap: 12 }}>
            <Text>First section content</Text>
            <Divider />
            <Text>Second section content</Text>
            <Divider />
            <Text>Third section content</Text>
          </View>
        </View>

        {/* Vertical */}
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
            Vertical
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Separate inline items.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", height: 40 }}>
            <Text>Home</Text>
            <Divider orientation="vertical" className="mx-3" />
            <Text>Products</Text>
            <Divider orientation="vertical" className="mx-3" />
            <Text>About</Text>
            <Divider orientation="vertical" className="mx-3" />
            <Text>Contact</Text>
          </View>
        </View>

        {/* Custom Colors */}
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
            Custom Colors
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Override color via className.
          </Text>
          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 6 }}>Indigo</Text>
              <Divider color="#6366f1" />
            </View>
            <View>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 6 }}>Emerald</Text>
              <Divider color="#10b981" />
            </View>
            <View>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 6 }}>Rose</Text>
              <Divider color="#f43f5e" />
            </View>
            <View>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 6 }}>Amber</Text>
              <Divider color="#f59e0b" />
            </View>
          </View>
        </View>

        {/* Use Case */}
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
            Settings List
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Common use in settings screens.
          </Text>
          <View>
            <View style={{ paddingVertical: 12 }}>
              <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Account</Text>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>Manage your profile and preferences</Text>
            </View>
            <Divider />
            <View style={{ paddingVertical: 12 }}>
              <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Notifications</Text>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>Configure alerts and reminders</Text>
            </View>
            <Divider />
            <View style={{ paddingVertical: 12 }}>
              <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Privacy</Text>
              <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>Control your data and permissions</Text>
            </View>
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
            A 1px View with neutral background. Horizontal (default) stretches full width, vertical stretches full height. Override color with className (e.g. bg-indigo-500). Dark mode auto-adjusts.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
