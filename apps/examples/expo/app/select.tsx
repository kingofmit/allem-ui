import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Select, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function SelectScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("en");
  const [role, setRole] = useState("");
  const chevron = <Ionicons name="chevron-down" size={16} color={isDark ? "#525252" : "#a3a3a3"} style={{ marginLeft: 8 }} />;

  return (
    <>
      <Stack.Screen options={{ title: "Select" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4" keyboardShouldPersistTaps="handled">
        <Heading size="md" className="mb-2">Select</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Bottom-sheet picker for single selection.
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
            Label, placeholder, and description.
          </Text>
          <View style={{ gap: 16 }}>
            <Select
              chevronIcon={chevron}
              label="Country"
              placeholder="Choose a country"
              description="Where are you based?"
              items={[
                { id: "us", label: "United States" },
                { id: "uk", label: "United Kingdom" },
                { id: "ca", label: "Canada" },
                { id: "au", label: "Australia" },
                { id: "de", label: "Germany" },
                { id: "fr", label: "France" },
                { id: "jp", label: "Japan" },
                { id: "kr", label: "South Korea" },
              ]}
              selectedKey={country}
              onSelectionChange={setCountry}
            />
            <Select
              chevronIcon={chevron}
              label="Language"
              items={[
                { id: "en", label: "English" },
                { id: "es", label: "Spanish" },
                { id: "fr", label: "French" },
                { id: "de", label: "German" },
                { id: "ja", label: "Japanese" },
                { id: "ar", label: "Arabic" },
              ]}
              selectedKey={language}
              onSelectionChange={setLanguage}
            />
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
            Items with leading icons in the sheet.
          </Text>
          <Select
              chevronIcon={chevron}
            label="Role"
            placeholder="Choose a role"
            items={[
              { id: "admin", label: "Admin", icon: <Ionicons name="shield-checkmark-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} /> },
              { id: "editor", label: "Editor", icon: <Ionicons name="create-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} /> },
              { id: "viewer", label: "Viewer", icon: <Ionicons name="eye-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} /> },
              { id: "billing", label: "Billing", icon: <Ionicons name="card-outline" size={18} color={isDark ? "#818cf8" : "#4f46e5"} /> },
            ]}
            selectedKey={role}
            onSelectionChange={setRole}
          />
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
            Small, medium, and large triggers.
          </Text>
          <View style={{ gap: 16 }}>
            <Select
              chevronIcon={chevron}
              size="sm"
              placeholder="Small select"
              items={[
                { id: "a", label: "Option A" },
                { id: "b", label: "Option B" },
              ]}
            />
            <Select
              chevronIcon={chevron}
              size="md"
              placeholder="Medium select (default)"
              items={[
                { id: "a", label: "Option A" },
                { id: "b", label: "Option B" },
              ]}
            />
            <Select
              chevronIcon={chevron}
              size="lg"
              placeholder="Large select"
              items={[
                { id: "a", label: "Option A" },
                { id: "b", label: "Option B" },
              ]}
            />
          </View>
        </View>

        {/* Validation */}
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
            Validation
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Error state with message.
          </Text>
          <Select
              chevronIcon={chevron}
            label="Category"
            placeholder="Select a category"
            errorMessage="Please select a category."
            items={[
              { id: "design", label: "Design" },
              { id: "dev", label: "Development" },
              { id: "marketing", label: "Marketing" },
            ]}
          />
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
            Non-interactive select with disabled items.
          </Text>
          <View style={{ gap: 16 }}>
            <Select
              chevronIcon={chevron}
              label="Plan"
              placeholder="Cannot change"
              isDisabled
              defaultSelectedKey="pro"
              items={[
                { id: "free", label: "Free" },
                { id: "pro", label: "Pro" },
                { id: "enterprise", label: "Enterprise" },
              ]}
            />
            <Select
              chevronIcon={chevron}
              label="With Disabled Items"
              placeholder="Some items disabled"
              items={[
                { id: "basic", label: "Basic" },
                { id: "standard", label: "Standard" },
                { id: "premium", label: "Premium (Coming Soon)", disabled: true },
              ]}
            />
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
            Opens a bottom-sheet modal with slide-up animation. Items support icons, selected checkmark, and disabled state. 3 trigger sizes, error validation, safe area insets, and haptic feedback on selection.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
