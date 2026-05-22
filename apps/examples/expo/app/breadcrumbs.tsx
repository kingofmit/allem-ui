import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Breadcrumbs, BreadcrumbItem, Text, Heading, Divider } from "@allem-ui/native";

export default function BreadcrumbsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Breadcrumbs" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Breadcrumbs</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Horizontal navigation trail with separator.</Text>

        <Breadcrumbs className="mb-4">
          <BreadcrumbItem onPress={() => {}}>Home</BreadcrumbItem>
          <BreadcrumbItem onPress={() => {}}>Products</BreadcrumbItem>
          <BreadcrumbItem>Shoes</BreadcrumbItem>
        </Breadcrumbs>

        <Divider className="mb-4" />

        <Breadcrumbs className="mb-4">
          <BreadcrumbItem onPress={() => {}}>Dashboard</BreadcrumbItem>
          <BreadcrumbItem onPress={() => {}}>Settings</BreadcrumbItem>
          <BreadcrumbItem onPress={() => {}}>Account</BreadcrumbItem>
          <BreadcrumbItem>Security</BreadcrumbItem>
        </Breadcrumbs>
      </ScrollView>
    </>
  );
}
