import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { SearchBar, Text, Heading } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function SearchBarScreen() {
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [submitted, setSubmitted] = useState("");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const items = ["Button", "Input", "Modal", "Drawer", "Tabs", "Card", "Badge", "Avatar"];
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query1.toLowerCase())
  );

  return (
    <>
      <Stack.Screen options={{ title: "Search Bar" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Search Bar</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Search input with animated cancel button and clear icon.
        </Text>

        {/* Demo 1: Filter list */}
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
            Filter List
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Type to filter components. Cancel button slides in on focus.
          </Text>
          <SearchBar
            value={query1}
            onChangeText={setQuery1}
            placeholder="Search components..."
            icon={<Ionicons name="search-outline" size={18} color="#9ca3af" />}
            clearIcon={<Ionicons name="close-circle" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
          />
          {query1 ? (
            <View style={{ marginTop: 12 }}>
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <View
                    key={item}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 12,
                      borderBottomWidth: i < filtered.length - 1 ? 1 : 0,
                      borderBottomColor: isDark ? "#262626" : "#e5e5e5",
                    }}
                  >
                    <Text style={{ fontSize: 14, color: isDark ? "#ffffff" : "#171717" }}>
                      {item}
                    </Text>
                  </View>
                ))
              ) : (
                <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", paddingVertical: 8 }}>
                  No results for "{query1}"
                </Text>
              )}
            </View>
          ) : null}
        </View>

        {/* Demo 2: Submit */}
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
            Submit Search
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Press return to submit. Haptic feedback on submit.
          </Text>
          <SearchBar
            value={query2}
            onChangeText={setQuery2}
            onSubmit={(text) => setSubmitted(text)}
            placeholder="Press return to search..."
            icon={<Ionicons name="search-outline" size={18} color="#9ca3af" />}
            clearIcon={<Ionicons name="close-circle" size={18} color={isDark ? "#737373" : "#a3a3a3"} />}
          />
          {submitted ? (
            <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", marginTop: 10 }}>
              Searched: "{submitted}"
            </Text>
          ) : null}
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
            Animated cancel button slides in on focus. Clear button appears when text is entered. Indigo focus ring highlights active state. Supports onSubmit for search actions.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
