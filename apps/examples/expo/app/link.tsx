import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Link, Text, Heading, Divider } from "@allem-ui/native";

export default function LinkScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Link" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Link</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Pressable that opens URLs via Linking.openURL.</Text>

        <Link href="https://github.com/kingofmit/allem-ui" className="mb-3">
          Allem UI on GitHub
        </Link>

        <Link href="https://docs.expo.dev" className="mb-3">
          Expo Documentation
        </Link>

        <Link href="https://nativewind.dev" className="mb-4">
          NativeWind Docs
        </Link>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Inline with text</Text>
        <Text>
          Visit <Link href="https://allem-ui.com">allem-ui.com</Link> for docs.
        </Text>
      </ScrollView>
    </>
  );
}
