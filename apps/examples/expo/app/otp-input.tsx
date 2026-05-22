import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { OTPInput, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function OTPInputScreen() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "OTP Input" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">OTP Input</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Multi-digit verification code input with haptic feedback.
        </Text>

        {/* 6 digits */}
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
            6-Digit Code
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap the cells and type your code. Haptic on each digit.
          </Text>
          <OTPInput
            value={value1}
            onChange={setValue1}
            onComplete={(code) => Alert.alert("Code entered", code)}
          />
        </View>

        {/* 4 digits */}
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
            4-Digit PIN
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Shorter code for PIN-style verification.
          </Text>
          <OTPInput
            length={4}
            value={value2}
            onChange={setValue2}
            onComplete={(code) => Alert.alert("PIN entered", code)}
          />
        </View>

        {/* Error */}
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
            Error State
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Shows red border and error message when invalid.
          </Text>
          <OTPInput
            value={value3}
            onChange={setValue3}
            error
            errorMessage="Invalid code. Please try again."
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
            Hidden TextInput captures keyboard input. Each cell bounces on entry with spring animation. Completion triggers a success haptic and celebration bounce on all cells.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
