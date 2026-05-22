import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Popover, PopoverTrigger, PopoverButton, Button, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function PopoverScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Popover" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Popover</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Floating content panel triggered by a button.
        </Text>

        {/* Quick Info */}
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
            Quick Info
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap to show a popover with brief content.
          </Text>
          <PopoverTrigger>
            <PopoverButton>
              <Button size="sm">Show Popover</Button>
            </PopoverButton>
            <Popover title="Quick Info">
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252" }}>
                This is popover content displayed in a centered overlay with spring animation.
              </Text>
            </Popover>
          </PopoverTrigger>
        </View>

        {/* User Details */}
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
            User Details
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Popover with structured content.
          </Text>
          <PopoverTrigger>
            <PopoverButton>
              <Button size="sm" variant="outline">User Details</Button>
            </PopoverButton>
            <Popover title="Ahmed Allem">
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252", marginBottom: 4 }}>
                Role: Founder
              </Text>
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252", marginBottom: 4 }}>
                Status: Active
              </Text>
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252" }}>
                Joined: 2024
              </Text>
            </Popover>
          </PopoverTrigger>
        </View>

        {/* With Action */}
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
            Project Settings
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Rich popover with status, actions, and danger zone.
          </Text>
          <PopoverTrigger>
            <PopoverButton>
              <Button size="sm" color="neutral">Options</Button>
            </PopoverButton>
            <Popover title="Project Settings">
              {/* Status row */}
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#10b981",
                    marginRight: 8,
                  }}
                />
                <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                  Status: Active
                </Text>
                <View style={{ flex: 1 }} />
                <Text style={{ fontSize: 12, color: isDark ? "#525252" : "#a3a3a3" }}>
                  v1.2.0
                </Text>
              </View>

              {/* Divider */}
              <View style={{ height: 1, backgroundColor: isDark ? "#262626" : "#e5e5e5", marginBottom: 12 }} />

              {/* Action items */}
              {[
                { icon: "pencil-outline", label: "Rename Project", color: isDark ? "#d4d4d4" : "#404040" },
                { icon: "people-outline", label: "Manage Members", color: isDark ? "#d4d4d4" : "#404040" },
                { icon: "notifications-outline", label: "Notifications", color: isDark ? "#d4d4d4" : "#404040" },
                { icon: "archive-outline", label: "Archive", color: isDark ? "#f59e0b" : "#d97706" },
              ].map((item) => (
                <View
                  key={item.label}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                  }}
                >
                  <Ionicons name={item.icon as any} size={18} color={item.color} />
                  <Text style={{ fontSize: 14, color: item.color, marginLeft: 12 }}>
                    {item.label}
                  </Text>
                </View>
              ))}

              {/* Divider */}
              <View style={{ height: 1, backgroundColor: isDark ? "#262626" : "#e5e5e5", marginVertical: 8 }} />

              {/* Danger zone */}
              <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                <Ionicons name="trash-outline" size={18} color="#ef4444" />
                <Text style={{ fontSize: 14, color: "#ef4444", marginLeft: 12 }}>
                  Delete Project
                </Text>
              </View>

              {/* Buttons */}
              <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
                <View style={{ flex: 1 }}>
                  <Button size="sm" color="primary" fullWidth>Save</Button>
                </View>
                <View style={{ flex: 1 }}>
                  <Button size="sm" color="neutral" variant="outline" fullWidth>Cancel</Button>
                </View>
              </View>
            </Popover>
          </PopoverTrigger>
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
            Popover uses a transparent RN Modal with spring-animated scale and fade. Tap the backdrop to dismiss. Supports title prop and any children including interactive elements.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
