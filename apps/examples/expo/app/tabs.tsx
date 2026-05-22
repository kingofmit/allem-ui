import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Tabs, TabList, Tab, TabPanel, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function TabsScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Tabs" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Tabs</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Tabbed content with multiple style variants.
        </Text>

        {/* Underline */}
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
            Underline (Default)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Classic underline indicator for the selected tab.
          </Text>
          <Tabs defaultSelectedKey="tab1">
            <TabList>
              <Tab id="tab1">Overview</Tab>
              <Tab id="tab2">Features</Tab>
              <Tab id="tab3">Pricing</Tab>
            </TabList>
            <TabPanel id="tab1">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Welcome to the overview tab. Here you can see a summary of the product.
              </Text>
            </TabPanel>
            <TabPanel id="tab2">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Components, Theming, Dark Mode, Accessibility — all built in.
              </Text>
            </TabPanel>
            <TabPanel id="tab3">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Allem UI is free and open source!
              </Text>
            </TabPanel>
          </Tabs>
        </View>

        {/* Solid */}
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
            Solid
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Elevated card-style indicator with shadow.
          </Text>
          <Tabs variant="solid" defaultSelectedKey="s1">
            <TabList>
              <Tab id="s1">All</Tab>
              <Tab id="s2">Active</Tab>
              <Tab id="s3">Archived</Tab>
            </TabList>
            <TabPanel id="s1">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Showing all items.
              </Text>
            </TabPanel>
            <TabPanel id="s2">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Only active items shown.
              </Text>
            </TabPanel>
            <TabPanel id="s3">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Archived items listed here.
              </Text>
            </TabPanel>
          </Tabs>
        </View>

        {/* Pills */}
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
            Pills
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Rounded pill-style tabs with filled background.
          </Text>
          <Tabs variant="pills" defaultSelectedKey="p1">
            <TabList>
              <Tab id="p1">Day</Tab>
              <Tab id="p2">Week</Tab>
              <Tab id="p3">Month</Tab>
            </TabList>
            <TabPanel id="p1">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Daily view selected.
              </Text>
            </TabPanel>
            <TabPanel id="p2">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Weekly view selected.
              </Text>
            </TabPanel>
            <TabPanel id="p3">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252" }}>
                Monthly view selected.
              </Text>
            </TabPanel>
          </Tabs>
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
            3 variants: underline, solid, and pills. Haptic feedback on tab switch. Horizontally scrollable tab list for many tabs. Controlled and uncontrolled modes supported.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
