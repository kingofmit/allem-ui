import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Flex, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

function ColorBox({ label, color }: { label: string; color: string }) {
  return (
    <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: color }}>
      <Text style={{ fontSize: 13, fontWeight: "600", color: "#ffffff" }}>{label}</Text>
    </View>
  );
}

export default function FlexScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Flex" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Flex</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Flexible layout component with direction, gap, wrap, and alignment.
        </Text>

        {/* Row */}
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
            Row (Default)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Items laid out horizontally with gap.
          </Text>
          <Flex direction="row" gap="sm">
            <ColorBox label="1" color="#4f46e5" />
            <ColorBox label="2" color="#059669" />
            <ColorBox label="3" color="#d97706" />
          </Flex>
        </View>

        {/* Column */}
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
            Column
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Items stacked vertically.
          </Text>
          <Flex direction="column" gap="sm">
            <ColorBox label="1" color="#4f46e5" />
            <ColorBox label="2" color="#059669" />
            <ColorBox label="3" color="#d97706" />
          </Flex>
        </View>

        {/* Wrap */}
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
            Wrap
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Items wrap to the next line when they overflow.
          </Text>
          <Flex direction="row" gap="sm" wrap>
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((l) => (
              <ColorBox key={l} label={l} color="#4f46e5" />
            ))}
          </Flex>
        </View>

        {/* Justify & Align */}
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
            Justify & Align
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Space-between with centered alignment.
          </Text>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: isDark ? "#262626" : "#f5f5f5",
              padding: 12,
            }}
          >
            <Flex direction="row" justify="between" align="center">
              <ColorBox label="Start" color="#dc2626" />
              <ColorBox label="Center" color="#2563eb" />
              <ColorBox label="End" color="#059669" />
            </Flex>
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
            Flex maps direction, align, justify, wrap, and gap props to inline flexbox styles. No className dependency — pure inline styles for reliable rendering.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
