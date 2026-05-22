import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Tabs, TabList, Tab, TabPanel, Text, Heading, Divider } from "@allem-ui/native";

export default function TabsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Tabs" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Tabs</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Tabbed content with multiple style variants.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Underline (default)</Text>
        <Tabs defaultSelectedKey="tab1" className="mb-4">
          <TabList>
            <Tab id="tab1">Overview</Tab>
            <Tab id="tab2">Features</Tab>
            <Tab id="tab3">Pricing</Tab>
          </TabList>
          <TabPanel id="tab1">
            <Text size="sm">Welcome to the overview tab. Here you can see a summary.</Text>
          </TabPanel>
          <TabPanel id="tab2">
            <Text size="sm">Feature list: Components, Theming, Dark Mode, Accessibility.</Text>
          </TabPanel>
          <TabPanel id="tab3">
            <Text size="sm">Allem UI is free and open source!</Text>
          </TabPanel>
        </Tabs>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Solid</Text>
        <Tabs variant="solid" defaultSelectedKey="s1" className="mb-4">
          <TabList>
            <Tab id="s1">All</Tab>
            <Tab id="s2">Active</Tab>
            <Tab id="s3">Archived</Tab>
          </TabList>
          <TabPanel id="s1">
            <Text size="sm">Showing all items.</Text>
          </TabPanel>
          <TabPanel id="s2">
            <Text size="sm">Only active items shown.</Text>
          </TabPanel>
          <TabPanel id="s3">
            <Text size="sm">Archived items listed here.</Text>
          </TabPanel>
        </Tabs>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Pills</Text>
        <Tabs variant="pills" defaultSelectedKey="p1">
          <TabList>
            <Tab id="p1">Day</Tab>
            <Tab id="p2">Week</Tab>
            <Tab id="p3">Month</Tab>
          </TabList>
          <TabPanel id="p1">
            <Text size="sm">Daily view selected.</Text>
          </TabPanel>
          <TabPanel id="p2">
            <Text size="sm">Weekly view selected.</Text>
          </TabPanel>
          <TabPanel id="p3">
            <Text size="sm">Monthly view selected.</Text>
          </TabPanel>
        </Tabs>
      </ScrollView>
    </>
  );
}
