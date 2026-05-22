import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Divider, Text, Heading } from "@allem-ui/native";

export default function DividerScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Divider" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Divider</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Horizontal (default)</Text>
        <Text className="mb-2">Content above</Text>
        <Divider className="mb-2" />
        <Text className="mb-4">Content below</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Vertical</Text>
        <View className="flex-row items-center h-10 mb-4">
          <Text>Left</Text>
          <Divider orientation="vertical" className="mx-3" />
          <Text>Center</Text>
          <Divider orientation="vertical" className="mx-3" />
          <Text>Right</Text>
        </View>

        <Text size="sm" className="mb-2 text-neutral-500">Custom color</Text>
        <Divider className="bg-indigo-500 mb-4" />
        <Divider className="bg-red-500 mb-4" />
        <Divider className="bg-emerald-500" />
      </ScrollView>
    </>
  );
}
