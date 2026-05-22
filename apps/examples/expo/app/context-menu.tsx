import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ContextMenuScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const iconColor = isDark ? "#a3a3a3" : "#525252";

  return (
    <>
      <Stack.Screen options={{ title: "Context Menu" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Context Menu</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Long-press activated menu with actions.
        </Text>

        {/* Basic */}
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
            Text Actions
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Long press the area below for ~500ms.
          </Text>
          <ContextMenu>
            <View
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: isDark ? "#333333" : "#d4d4d4",
                backgroundColor: isDark ? "#262626" : "#ffffff",
                padding: 24,
                alignItems: "center",
              }}
            >
              <Ionicons name="finger-print-outline" size={28} color={isDark ? "#525252" : "#a3a3a3"} />
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252", marginTop: 8 }}>
                Long press this area
              </Text>
            </View>
            <ContextMenuContent>
              <ContextMenuItem icon={<Ionicons name="copy-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Copied")}>Copy</ContextMenuItem>
              <ContextMenuItem icon={<Ionicons name="clipboard-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Pasted")}>Paste</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem icon={<Ionicons name="checkbox-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Selected All")}>Select All</ContextMenuItem>
              <ContextMenuItem icon={<Ionicons name="trash-outline" size={20} color="#dc2626" />} color="danger" onAction={() => Alert.alert("Deleted")}>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </View>

        {/* Image Card */}
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
            Card Actions
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Long press the card to see contextual actions.
          </Text>
          <ContextMenu>
            <View
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: isDark ? "#333333" : "#d4d4d4",
                backgroundColor: isDark ? "#262626" : "#ffffff",
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: isDark ? "#312e81" : "#e0e7ff",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Ionicons name="document-text-outline" size={22} color={isDark ? "#818cf8" : "#4f46e5"} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
                  Project Notes
                </Text>
                <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
                  Updated 2 hours ago
                </Text>
              </View>
            </View>
            <ContextMenuContent>
              <ContextMenuItem icon={<Ionicons name="open-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Open")}>Open</ContextMenuItem>
              <ContextMenuItem icon={<Ionicons name="share-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Share")}>Share</ContextMenuItem>
              <ContextMenuItem icon={<Ionicons name="star-outline" size={20} color={iconColor} />} onAction={() => Alert.alert("Favorite")}>Add to Favorites</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem icon={<Ionicons name="trash-outline" size={20} color="#dc2626" />} color="danger" onAction={() => Alert.alert("Delete")}>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
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
            Long press (~500ms) triggers a medium haptic and opens a bottom-sheet menu. Each item supports an icon prop and danger color. Safe area insets respected.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
