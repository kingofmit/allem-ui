import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, Divider } from "@allem-ui/native";

export default function CardScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Card" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Card</Heading>

        <Text size="sm" className="mb-2 text-neutral-500">Outline (default)</Text>
        <Card className="mb-4">
          <CardHeader>
            <Heading size="sm">Card Title</Heading>
          </CardHeader>
          <CardBody>
            <Text size="sm">This is the card body with some content.</Text>
          </CardBody>
          <CardFooter>
            <Button size="sm" onPress={() => {}}>Action</Button>
          </CardFooter>
        </Card>

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Filled</Text>
        <Card variant="filled" className="mb-4">
          <CardHeader>
            <Heading size="sm">Filled Card</Heading>
          </CardHeader>
          <CardBody>
            <Text size="sm">Card with a filled background.</Text>
          </CardBody>
        </Card>

        <Text size="sm" className="mb-2 text-neutral-500">Elevated</Text>
        <Card variant="elevated" className="mb-4">
          <CardHeader>
            <Heading size="sm">Elevated Card</Heading>
          </CardHeader>
          <CardBody>
            <Text size="sm">Card with shadow elevation.</Text>
          </CardBody>
          <CardFooter>
            <Button size="sm" variant="outline" onPress={() => {}}>Learn More</Button>
          </CardFooter>
        </Card>
      </ScrollView>
    </>
  );
}
