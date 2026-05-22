import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Avatar, Text, Heading, Flex, Divider } from "@allem-ui/native";

export default function AvatarScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Avatar" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Avatar</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Flex direction="row" gap="sm" align="center" className="mb-4">
          <Avatar src="https://i.pravatar.cc/100?img=1" name="Alice" size="sm" />
          <Avatar src="https://i.pravatar.cc/100?img=2" name="Bob" size="md" />
          <Avatar src="https://i.pravatar.cc/100?img=3" name="Charlie" size="lg" />
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Initials fallback</Text>
        <Flex direction="row" gap="sm" align="center" className="mb-4">
          <Avatar name="Ahmed Allem" size="md" />
          <Avatar name="Jane Smith" size="md" />
          <Avatar name="Bob" size="md" />
          <Avatar size="md" />
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Status indicators</Text>
        <Flex direction="row" gap="sm" align="center" className="mb-4">
          <Avatar src="https://i.pravatar.cc/100?img=4" name="Online" size="lg" status="online" />
          <Avatar src="https://i.pravatar.cc/100?img=5" name="Offline" size="lg" status="offline" />
          <Avatar src="https://i.pravatar.cc/100?img=6" name="Busy" size="lg" status="busy" />
          <Avatar src="https://i.pravatar.cc/100?img=7" name="Away" size="lg" status="away" />
        </Flex>
      </ScrollView>
    </>
  );
}
