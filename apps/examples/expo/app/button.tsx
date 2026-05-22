import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Text, Heading, Flex, Divider } from "@allem-ui/native";

export default function ButtonScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Button" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Button</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Variants</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Button onPress={() => {}}>Solid</Button>
          <Button variant="outline" onPress={() => {}}>Outline</Button>
          <Button variant="ghost" onPress={() => {}}>Ghost</Button>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Colors</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Button color="primary" onPress={() => {}}>Primary</Button>
          <Button color="neutral" onPress={() => {}}>Neutral</Button>
          <Button color="success" onPress={() => {}}>Success</Button>
          <Button color="danger" onPress={() => {}}>Danger</Button>
          <Button color="warning" onPress={() => {}}>Warning</Button>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Flex direction="row" gap="sm" align="center" wrap="wrap" className="mb-4">
          <Button size="sm" onPress={() => {}}>Small</Button>
          <Button size="md" onPress={() => {}}>Medium</Button>
          <Button size="lg" onPress={() => {}}>Large</Button>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">States</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Button loading onPress={() => {}}>Loading</Button>
          <Button disabled onPress={() => {}}>Disabled</Button>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Full width</Text>
        <Button className="w-full" onPress={() => {}}>Full Width Button</Button>
      </ScrollView>
    </>
  );
}
