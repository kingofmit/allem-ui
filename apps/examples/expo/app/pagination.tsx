import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Pagination, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function PaginationScreen() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(1);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Pagination" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Pagination</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Page navigation with smart ellipsis and haptic feedback.
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
            Basic (10 pages)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Standard pagination with prev/next arrows.
          </Text>
          <Pagination total={10} current={page1} onChange={setPage1} />
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", marginTop: 10 }}>
            Page {page1} of 10
          </Text>
        </View>

        {/* Many pages */}
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
            Many Pages (20)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Smart ellipsis collapses distant pages automatically.
          </Text>
          <Pagination total={20} current={page2} onChange={setPage2} />
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", marginTop: 10 }}>
            Page {page2} of 20
          </Text>
        </View>

        {/* Small */}
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
            Small Size
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Compact pagination for tight layouts.
          </Text>
          <Pagination total={8} current={page3} onChange={setPage3} size="sm" />
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
            Smart ellipsis algorithm shows first, last, and sibling pages around the current selection. Haptic feedback on page change. Supports 3 sizes (sm, md, lg). Press highlights on buttons.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
