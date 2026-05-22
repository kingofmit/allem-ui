import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Skeleton, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function SkeletonScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Skeleton" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Skeleton</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Animated placeholder with pulsing opacity effect.
        </Text>

        {/* Text Lines */}
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
            Text Lines
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Paragraph placeholder with varying widths.
          </Text>
          <View style={{ gap: 8 }}>
            <Skeleton />
            <Skeleton width="85%" />
            <Skeleton width="70%" />
            <Skeleton width="40%" />
          </View>
        </View>

        {/* Profile Card */}
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
            Profile Card
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Avatar with name and bio placeholder.
          </Text>
          <View
            style={{
              borderRadius: 12,
              borderWidth: 1,
              borderColor: isDark ? "#262626" : "#e5e5e5",
              backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
              padding: 16,
            }}
          >
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Skeleton variant="circular" width={48} height={48} />
              <View style={{ flex: 1, gap: 8, justifyContent: "center" }}>
                <Skeleton height={16} width="60%" />
                <Skeleton height={12} width="40%" />
              </View>
            </View>
            <View style={{ gap: 6, marginTop: 14 }}>
              <Skeleton height={12} />
              <Skeleton height={12} width="90%" />
              <Skeleton height={12} width="75%" />
            </View>
          </View>
        </View>

        {/* Media Card */}
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
            Media Card
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Image with title and description.
          </Text>
          <View
            style={{
              borderRadius: 12,
              borderWidth: 1,
              borderColor: isDark ? "#262626" : "#e5e5e5",
              backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
              overflow: "hidden",
            }}
          >
            <Skeleton variant="rectangular" height={140} />
            <View style={{ padding: 16, gap: 8 }}>
              <Skeleton height={18} width="70%" />
              <Skeleton height={12} />
              <Skeleton height={12} width="85%" />
              <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
                <Skeleton variant="rounded" height={32} width={80} borderRadius={8} />
                <Skeleton variant="rounded" height={32} width={80} borderRadius={8} />
              </View>
            </View>
          </View>
        </View>

        {/* List */}
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
            List Items
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Repeating row placeholders.
          </Text>
          <View style={{ gap: 14 }}>
            {[1, 2, 3, 4].map((i) => (
              <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <Skeleton variant="rounded" width={44} height={44} borderRadius={10} />
                <View style={{ flex: 1, gap: 6 }}>
                  <Skeleton height={14} width="65%" />
                  <Skeleton height={10} width="40%" />
                </View>
                <Skeleton variant="rounded" width={60} height={24} borderRadius={12} />
              </View>
            ))}
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
            Pulsing opacity animation (0.4 → 1.0) at 750ms intervals. 4 variants: text (rounded), circular (avatar), rectangular (image), rounded (card). Custom width, height, and borderRadius props. Native driver for smooth 60fps.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
