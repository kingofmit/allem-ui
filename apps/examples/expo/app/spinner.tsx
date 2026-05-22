import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Spinner, Text, Heading, Flex, Divider } from "@allem-ui/native";

export default function SpinnerScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Spinner" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Spinner</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Animated loading indicator with rotation animation.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Flex direction="row" gap="lg" align="center" className="mb-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Colors</Text>
        <Flex direction="row" gap="lg" align="center" className="mb-4">
          <Spinner color="primary" />
          <Spinner color="neutral" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
        </Flex>
      </ScrollView>
    </>
  );
}
