import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Switch, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function SwitchScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [airplane, setAirplane] = useState(false);
  const [darkMode, setDarkMode] = useState(isDark);
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(true);

  return (
    <>
      <Stack.Screen options={{ title: "Switch" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Switch</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Toggle switch with spring animation and haptic feedback.
        </Text>

        {/* Settings */}
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
            Settings
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Common device toggles.
          </Text>
          <View style={{ gap: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Ionicons name="wifi" size={20} color={isDark ? "#818cf8" : "#4f46e5"} />
                <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Wi-Fi</Text>
              </View>
              <Switch isSelected={wifi} onChange={setWifi} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Ionicons name="bluetooth" size={20} color={isDark ? "#818cf8" : "#4f46e5"} />
                <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Bluetooth</Text>
              </View>
              <Switch isSelected={bluetooth} onChange={setBluetooth} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Ionicons name="airplane" size={20} color={isDark ? "#818cf8" : "#4f46e5"} />
                <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Airplane Mode</Text>
              </View>
              <Switch isSelected={airplane} onChange={setAirplane} />
            </View>
          </View>
        </View>

        {/* Preferences */}
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
            Preferences
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            App preferences with descriptions.
          </Text>
          <View style={{ gap: 18 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 2 }}>
                  <Ionicons name="moon-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} />
                  <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Dark Mode</Text>
                </View>
                <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginLeft: 28 }}>
                  Use dark theme across the app
                </Text>
              </View>
              <Switch isSelected={darkMode} onChange={setDarkMode} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 2 }}>
                  <Ionicons name="notifications-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} />
                  <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Notifications</Text>
                </View>
                <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginLeft: 28 }}>
                  Receive push notifications
                </Text>
              </View>
              <Switch isSelected={notifications} onChange={setNotifications} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 2 }}>
                  <Ionicons name="location-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} />
                  <Text style={{ fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>Location</Text>
                </View>
                <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginLeft: 28 }}>
                  Allow access to your location
                </Text>
              </View>
              <Switch isSelected={location} onChange={setLocation} />
            </View>
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
          <View style={{ gap: 14 }}>
            <Switch defaultSelected size="sm" label="Small" />
            <Switch defaultSelected size="md" label="Medium (default)" />
            <Switch defaultSelected size="lg" label="Large" />
          </View>
        </View>

        {/* Disabled */}
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
            Disabled
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Non-interactive switches.
          </Text>
          <View style={{ gap: 14 }}>
            <Switch isSelected isDisabled label="On & disabled" />
            <Switch isDisabled label="Off & disabled" />
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
            Spring-animated thumb slides with bounce effect. 3 sizes, controlled or uncontrolled mode, haptic feedback, and disabled state. Indigo track when on, neutral when off. Thumb has subtle shadow.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
