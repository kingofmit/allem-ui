import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Code, Text, Heading, Divider } from "@allem-ui/native";

export default function CodeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Code" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Code</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Inline code</Text>
        <Text className="mb-4">
          Use <Code>npm install @allem-ui/native</Code> to install.
        </Text>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Code block</Text>
        <Code block className="mb-4">{`import { Button } from "@allem-ui/native";

export function App() {
  return (
    <Button onPress={() => alert("Hello!")}>
      Press me
    </Button>
  );
}`}</Code>

        <Text size="sm" className="mb-2 text-neutral-500">Another block</Text>
        <Code block>{`const colors = {
  primary: "#4f46e5",
  success: "#10b981",
  danger: "#ef4444",
};`}</Code>
      </ScrollView>
    </>
  );
}
