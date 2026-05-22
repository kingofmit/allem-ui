import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Text, Heading, Divider } from "@allem-ui/native";

export default function TextScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Text" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Text</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Text size="xs" className="mb-1">Extra Small (xs)</Text>
        <Text size="sm" className="mb-1">Small (sm)</Text>
        <Text size="md" className="mb-1">Medium (md) — default</Text>
        <Text size="lg" className="mb-1">Large (lg)</Text>
        <Text size="xl" className="mb-4">Extra Large (xl)</Text>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Weights</Text>
        <Text weight="normal" className="mb-1">Normal weight</Text>
        <Text weight="medium" className="mb-1">Medium weight</Text>
        <Text weight="semibold" className="mb-1">Semibold weight</Text>
        <Text weight="bold" className="mb-4">Bold weight</Text>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Colors</Text>
        <Text color="primary" className="mb-1">Primary color</Text>
        <Text color="success" className="mb-1">Success color</Text>
        <Text color="danger" className="mb-1">Danger color</Text>
        <Text color="warning" className="mb-1">Warning color</Text>
        <Text color="neutral" className="mb-1">Neutral color</Text>
      </ScrollView>
    </>
  );
}
