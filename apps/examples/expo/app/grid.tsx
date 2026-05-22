import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Grid, Text, Heading, Divider } from "@allem-ui/native";

function Cell({ label, color }: { label: string; color: string }) {
  return (
    <View className={`p-4 rounded-lg items-center ${color}`}>
      <Text size="sm" className="text-neutral-900 dark:text-white font-medium">{label}</Text>
    </View>
  );
}

export default function GridScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Grid" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Grid</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Flex-wrap based grid layout.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">2 columns</Text>
        <Grid columns={2} gap="sm" className="mb-4">
          <Cell label="1" color="bg-indigo-500" />
          <Cell label="2" color="bg-indigo-500" />
          <Cell label="3" color="bg-indigo-500" />
          <Cell label="4" color="bg-indigo-500" />
        </Grid>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">3 columns</Text>
        <Grid columns={3} gap="sm" className="mb-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Cell key={n} label={`${n}`} color="bg-emerald-500" />
          ))}
        </Grid>
      </ScrollView>
    </>
  );
}
