import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Badge, Text, Heading, Flex, Divider } from "@allem-ui/native";

export default function BadgeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Badge" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Badge</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Solid (default)</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Badge color="primary">Primary</Badge>
          <Badge color="neutral">Neutral</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Outline</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Badge variant="outline" color="primary">Primary</Badge>
          <Badge variant="outline" color="neutral">Neutral</Badge>
          <Badge variant="outline" color="success">Success</Badge>
          <Badge variant="outline" color="danger">Danger</Badge>
          <Badge variant="outline" color="warning">Warning</Badge>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Subtle</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          <Badge variant="subtle" color="primary">Primary</Badge>
          <Badge variant="subtle" color="neutral">Neutral</Badge>
          <Badge variant="subtle" color="success">Success</Badge>
          <Badge variant="subtle" color="danger">Danger</Badge>
          <Badge variant="subtle" color="warning">Warning</Badge>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Flex direction="row" gap="sm" align="center" className="mb-4">
          <Badge size="sm" color="primary">Small</Badge>
          <Badge size="md" color="primary">Medium</Badge>
          <Badge size="lg" color="primary">Large</Badge>
        </Flex>
      </ScrollView>
    </>
  );
}
