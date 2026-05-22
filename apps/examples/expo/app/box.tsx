import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Box, Text, Heading } from "@allem-ui/native";

export default function BoxScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Box" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Box</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">A basic layout primitive that maps to View with className support.</Text>

        <Box className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg mb-3">
          <Text>Default Box with padding</Text>
        </Box>

        <Box className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-lg border border-emerald-300 mb-3">
          <Text>Box with border</Text>
        </Box>

        <Box className="p-6 bg-amber-100 dark:bg-amber-900 rounded-2xl shadow-lg mb-3">
          <Text>Box with shadow and large radius</Text>
        </Box>

        <Box className="flex-row gap-2 mb-3">
          <Box className="flex-1 p-3 bg-red-100 dark:bg-red-900 rounded-lg">
            <Text size="sm">Left</Text>
          </Box>
          <Box className="flex-1 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Text size="sm">Right</Text>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
}
