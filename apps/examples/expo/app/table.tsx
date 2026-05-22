import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Text, Heading } from "@allem-ui/native";

export default function TableScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Table" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Table</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Horizontally scrollable table built with Views.</Text>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ahmed Allem</TableCell>
              <TableCell>Founder</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Away</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Alice Brown</TableCell>
              <TableCell>PM</TableCell>
              <TableCell>Offline</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollView>
    </>
  );
}
