import { useState, useCallback } from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import { PullToRefresh, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function PullToRefreshScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setCount((c) => c + 1);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Pull to Refresh" }} />
      <PullToRefresh refreshing={refreshing} onRefresh={onRefresh} className="flex-1 bg-white dark:bg-neutral-950">
        <View className="p-4">
          <Heading size="md" className="mb-2">Pull to Refresh</Heading>
          <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
            Pull down from the top to trigger a refresh.
          </Text>

          {/* Status */}
          <View
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: isDark ? "#262626" : "#e5e5e5",
              backgroundColor: isDark ? "#171717" : "#f9fafb",
              padding: 20,
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Text style={{ fontSize: 32, marginBottom: 4 }}>
              {refreshing ? "🔄" : "✅"}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
              Refreshed {count} time{count !== 1 ? "s" : ""}
            </Text>
            <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
              {refreshing ? "Refreshing..." : "Pull down to refresh"}
            </Text>
          </View>

          {/* Sample list */}
          {Array.from({ length: 6 }, (_, i) => (
            <View
              key={i}
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: isDark ? "#262626" : "#e5e5e5",
                backgroundColor: isDark ? "#171717" : "#ffffff",
                padding: 16,
                marginBottom: 8,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>
                Item {i + 1}
              </Text>
              <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
                Sample list item — refreshed {count}x
              </Text>
            </View>
          ))}

          {/* Info */}
          <View
            style={{
              borderRadius: 12,
              backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
              borderWidth: 1,
              borderColor: isDark ? "#312e81" : "#c7d2fe",
              padding: 16,
              marginTop: 8,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca", marginBottom: 4 }}>
              How it works
            </Text>
            <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
              Wraps ScrollView with React Native's built-in RefreshControl. No external dependencies needed — just pass refreshing state and onRefresh callback.
            </Text>
          </View>
        </View>
      </PullToRefresh>
    </>
  );
}
