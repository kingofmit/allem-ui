import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { RadioGroup, Radio, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function RadioScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [plan, setPlan] = useState("pro");
  const [shipping, setShipping] = useState("standard");
  const [theme, setTheme] = useState("system");

  return (
    <>
      <Stack.Screen options={{ title: "Radio" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">RadioGroup & Radio</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Single selection from a group with animated dot and haptics.
        </Text>

        {/* Pricing Plans */}
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
            Pricing Plan
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Choose a plan with description support.
          </Text>
          <RadioGroup value={plan} onChange={setPlan}>
            <Radio value="free" label="Free" description="Basic features, up to 3 projects" />
            <Radio value="pro" label="Pro — $19/mo" description="Unlimited projects, priority support" />
            <Radio value="enterprise" label="Enterprise — $99/mo" description="Custom integrations, SLA, dedicated manager" />
          </RadioGroup>
          <View
            style={{
              marginTop: 12,
              backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Ionicons name="checkmark-circle" size={16} color={isDark ? "#818cf8" : "#4f46e5"} />
            <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", fontWeight: "500" }}>
              Selected: {plan.charAt(0).toUpperCase() + plan.slice(1)}
            </Text>
          </View>
        </View>

        {/* Shipping */}
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
            Shipping Method
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Select your delivery preference.
          </Text>
          <RadioGroup value={shipping} onChange={setShipping}>
            <Radio value="standard" label="Standard — Free" description="5-7 business days" />
            <Radio value="express" label="Express — $9.99" description="2-3 business days" />
            <Radio value="overnight" label="Overnight — $24.99" description="Next business day" />
          </RadioGroup>
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
            Small, medium, and large radio buttons.
          </Text>
          <View style={{ gap: 20 }}>
            <RadioGroup value={theme} onChange={setTheme} size="sm" label="Small">
              <Radio value="light" label="Light" />
              <Radio value="dark" label="Dark" />
              <Radio value="system" label="System" />
            </RadioGroup>
            <RadioGroup value={theme} onChange={setTheme} size="md" label="Medium (default)">
              <Radio value="light" label="Light" />
              <Radio value="dark" label="Dark" />
              <Radio value="system" label="System" />
            </RadioGroup>
            <RadioGroup value={theme} onChange={setTheme} size="lg" label="Large">
              <Radio value="light" label="Light" />
              <Radio value="dark" label="Dark" />
              <Radio value="system" label="System" />
            </RadioGroup>
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
            Non-interactive radio group.
          </Text>
          <RadioGroup value="a" onChange={() => {}} isDisabled>
            <Radio value="a" label="Option A (selected)" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
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
            RadioGroup provides context for single selection. Radio items animate with bounce and dot scale-in. Supports label + description on each item, 3 sizes, group-level label/error, controlled or uncontrolled mode, and haptic feedback.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
