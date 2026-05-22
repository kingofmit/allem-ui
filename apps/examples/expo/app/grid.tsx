import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Grid, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

function Cell({ label, color }: { label: string; color: string }) {
  return (
    <View style={{ padding: 16, borderRadius: 10, alignItems: "center", backgroundColor: color }}>
      <Text style={{ fontSize: 13, fontWeight: "600", color: "#ffffff" }}>{label}</Text>
    </View>
  );
}

export default function GridScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Grid" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Grid</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Flex-wrap based grid layout with column and gap props.
        </Text>

        {/* 2 Columns */}
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
            2 Columns
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Even two-column grid layout.
          </Text>
          <Grid columns={2} gap="sm">
            <Cell label="1" color="#4f46e5" />
            <Cell label="2" color="#4f46e5" />
            <Cell label="3" color="#4f46e5" />
            <Cell label="4" color="#4f46e5" />
          </Grid>
        </View>

        {/* 3 Columns */}
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
            3 Columns
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Three-column grid with gap.
          </Text>
          <Grid columns={3} gap="sm">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Cell key={n} label={`${n}`} color="#059669" />
            ))}
          </Grid>
        </View>

        {/* 4 Columns */}
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
            4 Columns
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Dense four-column grid.
          </Text>
          <Grid columns={4} gap="xs">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Cell key={n} label={`${n}`} color="#d97706" />
            ))}
          </Grid>
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
            Grid uses flexWrap with percentage-based widths. Supports 1-4 columns and 6 gap sizes. Negative margins on the container offset the cell padding for clean edges.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
