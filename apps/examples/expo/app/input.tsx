import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Input, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function InputScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Input" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4" keyboardShouldPersistTaps="handled">
        <Heading size="md" className="mb-2">Input</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Text input field with label, description, and validation.
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
            <Input
              label="Full Name"
              placeholder="Ahmed Allem"
              value={name}
              onChangeText={setName}
            />
            <Input
              label="Email"
              placeholder="you@example.com"
              description="We'll never share your email."
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
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
            Leading and trailing icon slots.
          </Text>
          <View style={{ gap: 16 }}>
            <Input
              placeholder="Search components..."
              value={search}
              onChangeText={setSearch}
              leftIcon={<Ionicons name="search" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
            />
            <Input
              label="Password"
              placeholder="Enter password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              leftIcon={<Ionicons name="lock-closed-outline" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
              rightIcon={<Ionicons name="eye-outline" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
            />
            <Input
              label="Website"
              placeholder="kingallem.com"
              autoCapitalize="none"
              leftIcon={<Ionicons name="globe-outline" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
            />
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
            Small, medium, and large inputs.
          </Text>
          <View style={{ gap: 16 }}>
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
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
          <View style={{ gap: 16 }}>
            <Input
              label="Email"
              placeholder="Enter email"
              errorMessage="Please enter a valid email address."
              leftIcon={<Ionicons name="mail-outline" size={18} color={isDark ? "#f87171" : "#dc2626"} />}
            />
            <Input
              label="Username"
              placeholder="Choose a username"
              errorMessage="Username is already taken."
              leftIcon={<Ionicons name="person-outline" size={18} color={isDark ? "#f87171" : "#dc2626"} />}
            />
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
            Non-editable input with reduced opacity.
          </Text>
          <Input
            label="Organization"
            placeholder="Cannot edit"
            value="Allem UI"
            disabled
            leftIcon={<Ionicons name="business-outline" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
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
            3 sizes, focus highlight (indigo border), error state (red border + message). Supports leftIcon and rightIcon slots, label, description, and disabled state. All inline styles for consistent rendering.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
