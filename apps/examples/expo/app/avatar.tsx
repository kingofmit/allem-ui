import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function AvatarScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Avatar" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Avatar</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          User avatar with image, initials fallback, and status indicator.
        </Text>

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
            Small (32px), medium (40px), and large (56px).
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Avatar src="https://i.pravatar.cc/100?img=1" name="Alice" size="sm" />
            <Avatar src="https://i.pravatar.cc/100?img=2" name="Bob" size="md" />
            <Avatar src="https://i.pravatar.cc/100?img=3" name="Charlie" size="lg" />
          </View>
        </View>

        {/* Initials Fallback */}
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
            Initials Fallback
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            When no image is provided, shows initials.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Avatar name="Ahmed Allem" size="lg" />
            <Avatar name="Jane Smith" size="lg" />
            <Avatar name="Bob" size="lg" />
            <Avatar size="lg" />
          </View>
        </View>

        {/* Status */}
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
            Status Indicator
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Online, offline, away, and busy states.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View style={{ alignItems: "center", gap: 6 }}>
              <Avatar src="https://i.pravatar.cc/100?img=4" size="lg" status="online" />
              <Text style={{ fontSize: 11, color: "#10b981", fontWeight: "500" }}>Online</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }}>
              <Avatar src="https://i.pravatar.cc/100?img=5" size="lg" status="away" />
              <Text style={{ fontSize: 11, color: "#f59e0b", fontWeight: "500" }}>Away</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }}>
              <Avatar src="https://i.pravatar.cc/100?img=6" size="lg" status="busy" />
              <Text style={{ fontSize: 11, color: "#ef4444", fontWeight: "500" }}>Busy</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }}>
              <Avatar src="https://i.pravatar.cc/100?img=7" size="lg" status="offline" />
              <Text style={{ fontSize: 11, color: "#a3a3a3", fontWeight: "500" }}>Offline</Text>
            </View>
          </View>
        </View>

        {/* Local Image */}
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
            Local Image
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Using require() for local assets.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Avatar src={require("../assets/ahmed-allem-profile.png")} name="Ahmed Allem" size="sm" status="online" />
            <Avatar src={require("../assets/ahmed-allem-profile.png")} name="Ahmed Allem" size="md" status="online" />
            <Avatar src={require("../assets/ahmed-allem-profile.png")} name="Ahmed Allem" size="lg" status="online" />
          </View>
        </View>

        {/* Avatar Group */}
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
            Avatar Stack
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Overlapping avatars with negative margin.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ zIndex: 5 }}>
              <View style={{ borderRadius: 20, borderWidth: 2, borderColor: isDark ? "#171717" : "#f9fafb" }}>
                <Avatar src="https://i.pravatar.cc/100?img=10" size="md" />
              </View>
            </View>
            <View style={{ marginLeft: -12, zIndex: 4 }}>
              <View style={{ borderRadius: 20, borderWidth: 2, borderColor: isDark ? "#171717" : "#f9fafb" }}>
                <Avatar src="https://i.pravatar.cc/100?img=11" size="md" />
              </View>
            </View>
            <View style={{ marginLeft: -12, zIndex: 3 }}>
              <View style={{ borderRadius: 20, borderWidth: 2, borderColor: isDark ? "#171717" : "#f9fafb" }}>
                <Avatar src="https://i.pravatar.cc/100?img=12" size="md" />
              </View>
            </View>
            <View style={{ marginLeft: -12, zIndex: 2 }}>
              <View style={{ borderRadius: 20, borderWidth: 2, borderColor: isDark ? "#171717" : "#f9fafb" }}>
                <Avatar src="https://i.pravatar.cc/100?img=13" size="md" />
              </View>
            </View>
            <View style={{ marginLeft: -12, zIndex: 1 }}>
              <View style={{ borderRadius: 20, borderWidth: 2, borderColor: isDark ? "#171717" : "#f9fafb" }}>
                <Avatar name="+3" size="md" />
              </View>
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
            3 sizes (32/40/56px). Shows image if src provided (URL or require()), otherwise initials from name. 4 status indicators (online/away/busy/offline) as colored dots. Supports local assets via require().
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
