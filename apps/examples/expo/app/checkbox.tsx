import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Checkbox, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function CheckboxScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [remember, setRemember] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emails, setEmails] = useState(false);
  const [sms, setSms] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Checkbox" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Checkbox</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Toggle selection with animated checkmark and haptic feedback.
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
            Basic
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap to toggle checked state.
          </Text>
          <View style={{ gap: 14 }}>
            <Checkbox isSelected={terms} onChange={setTerms} label="Accept terms and conditions" />
            <Checkbox isSelected={newsletter} onChange={setNewsletter} label="Subscribe to newsletter" />
            <Checkbox isSelected={remember} onChange={setRemember} label="Remember me on this device" />
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
            Notification Preferences
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Choose how you want to be notified.
          </Text>
          <View style={{ gap: 14 }}>
            <Checkbox isSelected={notifications} onChange={setNotifications} label="Push notifications" />
            <Checkbox isSelected={emails} onChange={setEmails} label="Email updates" />
            <Checkbox isSelected={sms} onChange={setSms} label="SMS alerts" />
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
            <Checkbox defaultSelected size="sm" label="Small checkbox" />
            <Checkbox defaultSelected size="md" label="Medium checkbox (default)" />
            <Checkbox defaultSelected size="lg" label="Large checkbox" />
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
            Non-interactive checkboxes.
          </Text>
          <View style={{ gap: 14 }}>
            <Checkbox isSelected isDisabled label="Checked & disabled" />
            <Checkbox isDisabled label="Unchecked & disabled" />
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
            Animated bounce on press with spring physics. Checkmark scales in/out smoothly. 3 sizes, controlled or uncontrolled mode, haptic feedback, and disabled state. Indigo fill when selected.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
