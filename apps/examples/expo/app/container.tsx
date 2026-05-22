import { Stack } from "expo-router";
import { View } from "react-native";
import { Container, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function ContainerScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Container" }} />
      <View className="flex-1 bg-white dark:bg-neutral-950">
        <Container>
          <Heading size="md" style={{ marginBottom: 8, marginTop: 16 }}>Container</Heading>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 24 }}>
            Scrollable container with consistent padding and max-width constraint.
          </Text>

          {/* Info card */}
          <View
            style={{
              borderRadius: 12,
              backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
              borderWidth: 1,
              borderColor: isDark ? "#312e81" : "#c7d2fe",
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
              Content inside a Container gets consistent horizontal padding and is scrollable by default. On larger screens, the max-width keeps content readable.
            </Text>
          </View>

          {/* Scrollable items */}
          {Array.from({ length: 12 }, (_, i) => (
            <View
              key={i}
              style={{
                padding: 14,
                marginBottom: 8,
                backgroundColor: isDark ? "#1c1c1e" : "#f5f5f5",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: isDark ? "#262626" : "#e5e5e5",
              }}
            >
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>
                Scrollable item {i + 1}
              </Text>
            </View>
          ))}
        </Container>
      </View>
    </>
  );
}
