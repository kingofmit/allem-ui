import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Popover, PopoverTrigger, PopoverTriggerButton, Button, Text, Heading, Divider } from "@allem-ui/native";

export default function PopoverScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Popover" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Popover</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Floating content panel triggered by a button.</Text>

        <PopoverTrigger>
          <PopoverTriggerButton>
            <Button size="sm" className="mb-4">Show Popover</Button>
          </PopoverTriggerButton>
          <Popover>
            <Heading size="sm" className="mb-2">Quick Info</Heading>
            <Text size="sm">This is popover content displayed in a centered modal.</Text>
          </Popover>
        </PopoverTrigger>

        <Divider className="mb-4" />

        <PopoverTrigger>
          <PopoverTriggerButton>
            <Button size="sm" variant="outline" className="mb-4">User Details</Button>
          </PopoverTriggerButton>
          <Popover>
            <Heading size="sm" className="mb-2">Ahmed Allem</Heading>
            <Text size="sm" className="mb-1">Role: Founder</Text>
            <Text size="sm" className="mb-1">Status: Active</Text>
            <Text size="sm">Joined: 2024</Text>
          </Popover>
        </PopoverTrigger>
      </ScrollView>
    </>
  );
}
