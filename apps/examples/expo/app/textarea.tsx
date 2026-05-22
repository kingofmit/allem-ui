import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Textarea, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function TextareaScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [bio, setBio] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Textarea" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4" keyboardShouldPersistTaps="handled">
        <Heading size="md" className="mb-2">Textarea</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Multi-line text input for longer content.
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
            <Textarea
              label="Bio"
              placeholder="Tell us about yourself..."
              description="Max 200 characters."
              value={bio}
              onChangeText={setBio}
            />
            <Textarea
              label="Feedback"
              placeholder="What can we improve?"
              value={feedback}
              onChangeText={setFeedback}
            />
          </View>
        </View>

        {/* Rows */}
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
            Custom Height
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Control height with the rows prop.
          </Text>
          <View style={{ gap: 16 }}>
            <Textarea
              label="Short (2 rows)"
              placeholder="Quick note..."
              rows={2}
            />
            <Textarea
              label="Tall (6 rows)"
              placeholder="Write a detailed description..."
              rows={6}
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
          <Textarea
            label="Message"
            placeholder="Enter your message..."
            errorMessage="Message must be at least 20 characters."
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
            Non-editable textarea with reduced opacity.
          </Text>
          <Textarea
            label="Notes"
            placeholder="Cannot edit"
            value="This textarea is disabled and cannot be edited by the user."
            disabled
          />
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
            Multi-line TextInput with top-aligned text. Supports rows prop for height control, focus highlight (indigo border), error state (red border + message), label, description, and disabled state.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
