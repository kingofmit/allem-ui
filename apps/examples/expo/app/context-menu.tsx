import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, Text, Heading, Divider } from "@allem-ui/native";

export default function ContextMenuScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Context Menu" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Context Menu</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Long-press activated menu with actions.</Text>

        <ContextMenu className="mb-4">
          <View className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 items-center">
            <Text size="sm" className="text-neutral-500">Long press this area</Text>
          </View>
          <ContextMenuContent>
            <ContextMenuItem onAction={() => Alert.alert("Copy")}>Copy</ContextMenuItem>
            <ContextMenuItem onAction={() => Alert.alert("Paste")}>Paste</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onAction={() => Alert.alert("Select All")}>Select All</ContextMenuItem>
            <ContextMenuItem color="danger" onAction={() => Alert.alert("Delete")}>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <Divider className="mb-4" />

        <Text size="sm" className="text-neutral-500">Long press the box above for ~500ms to trigger the context menu.</Text>
      </ScrollView>
    </>
  );
}
