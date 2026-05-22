import { Stack } from "expo-router";
import { View } from "react-native";
import { Text, Heading, Button } from "@allem-ui/native";
import { useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View className="flex-1 bg-white dark:bg-neutral-950 items-center justify-center p-4">
        <Heading size="lg" className="mb-2">404</Heading>
        <Text size="sm" className="text-neutral-500 mb-6">This screen doesn't exist.</Text>
        <Button onPress={() => router.replace("/")}>Go Home</Button>
      </View>
    </>
  );
}
