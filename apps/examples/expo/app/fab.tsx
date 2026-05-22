import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { FAB, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function FABScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "FAB" }} />
      <View className="flex-1 bg-white dark:bg-neutral-950">
        <ScrollView className="flex-1 p-4">
          <Heading size="md" className="mb-2">FAB</Heading>
          <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
            Floating action button with position, size, and color variants.
          </Text>

          {/* Features */}
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
            <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 12 }}>
              Features
            </Text>
            {[
              "5 colors: primary, neutral, danger, success, warning",
              "3 sizes: sm (48px), md (56px), lg (64px)",
              "3 positions: bottom-right, bottom-left, bottom-center",
              "Optional icon and label",
              "Shadow + haptic feedback on press",
            ].map((item, i) => (
              <View key={i} style={{ flexDirection: "row", marginBottom: 6 }}>
                <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", marginRight: 8 }}>
                  •
                </Text>
                <Text style={{ fontSize: 13, color: isDark ? "#d4d4d4" : "#404040", flex: 1 }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>

          {/* Usage */}
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
              The FAB is absolutely positioned within its parent. Tap the indigo button at the bottom-right of this screen to see it in action.
            </Text>
          </View>
        </ScrollView>

        {/* The actual FAB */}
        <FAB
          onPress={() => Alert.alert("FAB pressed!", "This is a floating action button.")}
          icon={<Ionicons name="add" size={24} color="#ffffff" />}
          color="primary"
          position="bottom-right"
          size="md"
        />
      </View>
    </>
  );
}
