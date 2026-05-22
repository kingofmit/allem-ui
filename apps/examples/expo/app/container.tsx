import { Stack } from "expo-router";
import { View } from "react-native";
import { Container, Text, Heading, Divider } from "@allem-ui/native";

export default function ContainerScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Container" }} />
      <Container>
        <Heading size="md" className="mb-4">Container</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Scrollable container with horizontal padding.</Text>

        <View className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-lg mb-4">
          <Text>Content inside a Container automatically gets consistent padding and is scrollable.</Text>
        </View>

        <Divider className="mb-4" />

        {Array.from({ length: 10 }, (_, i) => (
          <View key={i} className="p-3 mb-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <Text size="sm">Scrollable item {i + 1}</Text>
          </View>
        ))}
      </Container>
    </>
  );
}
