import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useToast, Button, Flex, Text, Heading, Divider } from "@allem-ui/native";

export default function ToastScreen() {
  const { toast } = useToast();

  return (
    <>
      <Stack.Screen options={{ title: "Toast" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Toast</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Auto-dismissing notification banners.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Variants</Text>
        <Flex direction="row" gap="sm" wrap className="mb-4">
          <Button
            size="sm"
            onPress={() => toast({ title: "Default", description: "This is a default toast." })}
          >
            Default
          </Button>
          <Button
            size="sm"
            color="success"
            onPress={() => toast({ title: "Success!", description: "Operation completed.", variant: "success" })}
          >
            Success
          </Button>
          <Button
            size="sm"
            color="danger"
            onPress={() => toast({ title: "Error", description: "Something went wrong.", variant: "danger" })}
          >
            Danger
          </Button>
          <Button
            size="sm"
            color="warning"
            onPress={() => toast({ title: "Warning", description: "Please check your input.", variant: "warning" })}
          >
            Warning
          </Button>
        </Flex>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Title only</Text>
        <Button
          size="sm"
          variant="outline"
          onPress={() => toast({ title: "Saved successfully!" })}
        >
          Show Title Only
        </Button>
      </ScrollView>
    </>
  );
}
