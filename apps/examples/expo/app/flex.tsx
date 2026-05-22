import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Flex, Box, Text, Heading, Divider } from "@allem-ui/native";

function ColorBox({ label, color }: { label: string; color: string }) {
  return (
    <View className={`px-3 py-2 rounded-lg ${color}`}>
      <Text size="sm" className="text-neutral-900 dark:text-white">{label}</Text>
    </View>
  );
}

export default function FlexScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Flex" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Flex</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Row (default)</Text>
        <Flex direction="row" gap="sm" className="mb-4">
          <ColorBox label="1" color="bg-indigo-500" />
          <ColorBox label="2" color="bg-emerald-500" />
          <ColorBox label="3" color="bg-amber-500" />
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Column</Text>
        <Flex direction="column" gap="sm" className="mb-4">
          <ColorBox label="1" color="bg-indigo-500" />
          <ColorBox label="2" color="bg-emerald-500" />
          <ColorBox label="3" color="bg-amber-500" />
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Wrap</Text>
        <Flex direction="row" gap="sm" wrap="wrap" className="mb-4">
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((l) => (
            <ColorBox key={l} label={l} color="bg-indigo-500" />
          ))}
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Justify & Align</Text>
        <Flex direction="row" justify="between" align="center" className="mb-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <ColorBox label="Start" color="bg-red-500" />
          <ColorBox label="Center" color="bg-blue-500" />
          <ColorBox label="End" color="bg-green-500" />
        </Flex>
      </ScrollView>
    </>
  );
}
