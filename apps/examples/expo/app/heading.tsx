import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Heading, Text, Divider } from "@allem-ui/native";

export default function HeadingScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Heading" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Heading</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Accessible headings with accessibilityRole="header".</Text>

        <Heading size="xs" className="mb-2">Extra Small Heading (xs)</Heading>
        <Heading size="sm" className="mb-2">Small Heading (sm)</Heading>
        <Heading size="md" className="mb-2">Medium Heading (md)</Heading>
        <Heading size="lg" className="mb-2">Large Heading (lg)</Heading>
        <Heading size="xl" className="mb-2">Extra Large Heading (xl)</Heading>
        <Heading size="2xl" className="mb-4">2XL Heading</Heading>

        <Divider className="mb-4" />

        <Heading size="md" className="text-indigo-600 mb-2">Colored Heading</Heading>
        <Heading size="md" className="text-emerald-600 mb-2">Another Color</Heading>
      </ScrollView>
    </>
  );
}
