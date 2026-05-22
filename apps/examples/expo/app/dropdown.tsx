import { Stack } from "expo-router";
import { ScrollView, Alert } from "react-native";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator, Button, Text, Heading, Divider } from "@allem-ui/native";

export default function DropdownScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Dropdown" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Dropdown</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Bottom-sheet style menu with action items.</Text>

        <Dropdown className="mb-4">
          <DropdownTrigger>
            <Button size="sm">Open Menu</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onAction={() => Alert.alert("Edit")}>Edit</DropdownItem>
            <DropdownItem onAction={() => Alert.alert("Duplicate")}>Duplicate</DropdownItem>
            <DropdownSeparator />
            <DropdownItem onAction={() => Alert.alert("Archive")}>Archive</DropdownItem>
            <DropdownItem color="danger" onAction={() => Alert.alert("Delete")}>Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">With disabled items</Text>
        <Dropdown>
          <DropdownTrigger>
            <Button size="sm" variant="outline">Actions</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onAction={() => {}}>Share</DropdownItem>
            <DropdownItem onAction={() => {}} isDisabled>Export (Pro)</DropdownItem>
            <DropdownSeparator />
            <DropdownItem color="danger" onAction={() => {}}>Remove</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ScrollView>
    </>
  );
}
