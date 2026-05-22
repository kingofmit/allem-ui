import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Tooltip, TooltipContent, Button, Text, Heading, Divider } from "@allem-ui/native";

export default function TooltipScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Tooltip" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Tooltip</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Long-press to reveal contextual info.</Text>

        <Tooltip className="mb-4">
          <Button size="sm">Long press me</Button>
          <TooltipContent>
            <Text size="sm">This is a tooltip!</Text>
          </TooltipContent>
        </Tooltip>

        <Divider className="my-4" />

        <Tooltip className="mb-4">
          <Button size="sm" variant="outline">Help</Button>
          <TooltipContent>
            <Text size="sm">Press this button to get assistance with your account settings.</Text>
          </TooltipContent>
        </Tooltip>

        <Divider className="my-4" />

        <Text size="sm" className="text-neutral-500">Long press any button above for ~300ms to see the tooltip.</Text>
      </ScrollView>
    </>
  );
}
