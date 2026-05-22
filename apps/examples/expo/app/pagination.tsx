import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Pagination, Text, Heading, Divider } from "@allem-ui/native";

export default function PaginationScreen() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(1);

  return (
    <>
      <Stack.Screen options={{ title: "Pagination" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Pagination</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Page navigation with smart ellipsis.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Basic (10 pages)</Text>
        <Pagination total={10} current={page1} onChange={setPage1} className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Many pages (20)</Text>
        <Pagination total={20} current={page2} onChange={setPage2} className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Small size</Text>
        <Pagination total={8} current={page3} onChange={setPage3} size="sm" />
      </ScrollView>
    </>
  );
}
