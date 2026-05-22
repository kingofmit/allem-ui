import { Stack } from "expo-router";
import { ScrollView, View, Image } from "react-native";
import { Drawer, DrawerTrigger, DrawerContent, Button, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

function MenuItem({ icon, label, isDark, badge }: { icon: string; label: string; isDark: boolean; badge?: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 2,
      }}
    >
      <Ionicons name={icon as any} size={20} color={isDark ? "#a3a3a3" : "#525252"} />
      <Text style={{ fontSize: 15, color: isDark ? "#e5e5e5" : "#171717", marginLeft: 14, flex: 1 }}>
        {label}
      </Text>
      {badge && (
        <View
          style={{
            backgroundColor: "#ef4444",
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 2,
            minWidth: 22,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 11, fontWeight: "700", color: "#ffffff" }}>{badge}</Text>
        </View>
      )}
    </View>
  );
}

function SectionLabel({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <Text
      style={{
        fontSize: 11,
        fontWeight: "700",
        color: isDark ? "#525252" : "#a3a3a3",
        letterSpacing: 1,
        textTransform: "uppercase",
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 8,
      }}
    >
      {label}
    </Text>
  );
}

export default function DrawerScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Drawer" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Drawer</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Mobile sidebar navigation with slide-in animation.
        </Text>

        {/* Navigation Drawer */}
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
            Navigation Sidebar
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Full app navigation with user profile, menu items, and badges.
          </Text>
          <Drawer>
            <DrawerTrigger>
              <Button size="sm">Open Menu</Button>
            </DrawerTrigger>
            <DrawerContent placement="left" size="md">
              {/* User profile */}
              <View style={{ alignItems: "center", paddingVertical: 8, marginBottom: 8 }}>
                <Image
                  source={require("../assets/ahmed-allem-profile.png")}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    marginBottom: 10,
                  }}
                />
                <Text style={{ fontSize: 16, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
                  Ahmed Allem
                </Text>
                <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
                  Premium Member
                </Text>
              </View>

              {/* Divider */}
              <View style={{ height: 1, backgroundColor: isDark ? "#262626" : "#e5e5e5", marginVertical: 8 }} />

              <SectionLabel label="Main" isDark={isDark} />
              <MenuItem icon="home-outline" label="Home" isDark={isDark} />
              <MenuItem icon="search-outline" label="Explore" isDark={isDark} />
              <MenuItem icon="notifications-outline" label="Notifications" isDark={isDark} badge="3" />
              <MenuItem icon="chatbubble-outline" label="Messages" isDark={isDark} badge="12" />

              <SectionLabel label="Account" isDark={isDark} />
              <MenuItem icon="person-outline" label="Profile" isDark={isDark} />
              <MenuItem icon="bookmark-outline" label="Saved" isDark={isDark} />
              <MenuItem icon="settings-outline" label="Settings" isDark={isDark} />

              {/* Divider */}
              <View style={{ height: 1, backgroundColor: isDark ? "#262626" : "#e5e5e5", marginTop: 16, marginBottom: 12 }} />

              <MenuItem icon="log-out-outline" label="Sign Out" isDark={isDark} />
            </DrawerContent>
          </Drawer>
        </View>

        {/* Settings Drawer */}
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
            Settings Panel
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Right-side settings panel with grouped options.
          </Text>
          <Drawer>
            <DrawerTrigger>
              <Button size="sm" variant="outline">Settings</Button>
            </DrawerTrigger>
            <DrawerContent title="Settings" placement="right" size="md">
              <SectionLabel label="Appearance" isDark={isDark} />
              <MenuItem icon="moon-outline" label="Dark Mode" isDark={isDark} />
              <MenuItem icon="text-outline" label="Font Size" isDark={isDark} />
              <MenuItem icon="color-palette-outline" label="Theme" isDark={isDark} />

              <SectionLabel label="Privacy" isDark={isDark} />
              <MenuItem icon="lock-closed-outline" label="Password" isDark={isDark} />
              <MenuItem icon="finger-print-outline" label="Biometrics" isDark={isDark} />
              <MenuItem icon="shield-outline" label="Two-Factor Auth" isDark={isDark} />

              <SectionLabel label="About" isDark={isDark} />
              <MenuItem icon="information-circle-outline" label="Version 1.0.0" isDark={isDark} />
              <MenuItem icon="document-text-outline" label="Terms of Service" isDark={isDark} />
            </DrawerContent>
          </Drawer>
        </View>

        {/* Bottom Sheet Drawer */}
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
            Quick Actions
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Bottom drawer for quick actions.
          </Text>
          <Drawer>
            <DrawerTrigger>
              <Button size="sm" color="neutral">Quick Actions</Button>
            </DrawerTrigger>
            <DrawerContent title="Create New" placement="bottom" size="sm">
              <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }}>
                {[
                  { icon: "camera-outline", label: "Photo" },
                  { icon: "videocam-outline", label: "Video" },
                  { icon: "document-outline", label: "File" },
                  { icon: "location-outline", label: "Location" },
                ].map((item) => (
                  <View key={item.label} style={{ alignItems: "center" }}>
                    <View
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        backgroundColor: isDark ? "#262626" : "#f5f5f5",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 6,
                      }}
                    >
                      <Ionicons name={item.icon as any} size={24} color={isDark ? "#818cf8" : "#4f46e5"} />
                    </View>
                    <Text style={{ fontSize: 12, color: isDark ? "#a3a3a3" : "#525252" }}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </DrawerContent>
          </Drawer>
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
            Drawer slides in with spring animation from any edge. Tap backdrop to dismiss. Supports left, right, top, bottom placements and sm/md/lg/xl sizes.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
