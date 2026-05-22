import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator, Button, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function DropdownScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const iconColor = isDark ? "#a3a3a3" : "#525252";

  return (
    <>
      <Stack.Screen options={{ title: "Dropdown" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Dropdown</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Bottom-sheet style menu with action items.
        </Text>

        {/* Basic Menu */}
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
            Basic Menu
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Action items with icons and a destructive delete option.
          </Text>
          <Dropdown>
            <DropdownTrigger>
              <Button size="sm">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem icon={<Ionicons name="pencil-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Edit")}>Edit</DropdownItem>
              <DropdownItem icon={<Ionicons name="copy-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Duplicate")}>Duplicate</DropdownItem>
              <DropdownSeparator />
              <DropdownItem icon={<Ionicons name="archive-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Archive")}>Archive</DropdownItem>
              <DropdownItem icon={<Ionicons name="trash-outline" size={20} color="#dc2626" />} color="danger" onAction={() => Alert.alert("Delete")}>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </View>

        {/* Disabled Items */}
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
            With Disabled Items
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Some items can be disabled for restricted features.
          </Text>
          <Dropdown>
            <DropdownTrigger>
              <Button size="sm" variant="outline">Actions</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem icon={<Ionicons name="share-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Shared")}>Share</DropdownItem>
              <DropdownItem icon={<Ionicons name="download-outline" size={20} color={iconColor} />} isDisabled>Export (Pro)</DropdownItem>
              <DropdownSeparator />
              <DropdownItem icon={<Ionicons name="trash-outline" size={20} color="#dc2626" />} color="danger" onAction={() => Alert.alert("Removed")}>Remove</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
            Bottom-sheet style dropdown with fade animation. Each item supports an icon prop, disabled state, and danger color. Safe area insets are respected. Haptic feedback on open.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
