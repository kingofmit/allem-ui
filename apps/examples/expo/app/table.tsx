import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function TableScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Table" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Table</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Horizontally scrollable data table with rows and columns.
        </Text>

        {/* Simple */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Simple (Default)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Clean table with minimal borders.
          </Text>
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
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#10b981" }} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>Active</Text>
                  </View>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#10b981" }} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>Active</Text>
                  </View>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#f59e0b" }} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>Away</Text>
                  </View>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alice Brown</TableCell>
                <TableCell>PM</TableCell>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#a3a3a3" }} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>Offline</Text>
                  </View>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </View>

        {/* Striped */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Striped
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Alternating row backgrounds for readability.
          </Text>
          <Table variant="striped">
            <TableHeader>
              <TableRow>
                <TableHead>Package</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Downloads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Ionicons name="cube-outline" size={14} color={isDark ? "#818cf8" : "#4f46e5"} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>@allem-ui/react</Text>
                  </View>
                </TableCell>
                <TableCell>0.0.1</TableCell>
                <TableCell>1.2k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Ionicons name="cube-outline" size={14} color={isDark ? "#818cf8" : "#4f46e5"} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>@allem-ui/theme</Text>
                  </View>
                </TableCell>
                <TableCell>0.0.1</TableCell>
                <TableCell>980</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Ionicons name="cube-outline" size={14} color={isDark ? "#818cf8" : "#4f46e5"} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>@allem-ui/native</Text>
                  </View>
                </TableCell>
                <TableCell>0.0.1</TableCell>
                <TableCell>450</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Ionicons name="cube-outline" size={14} color={isDark ? "#818cf8" : "#4f46e5"} />
                    <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>@allem-ui/hooks</Text>
                  </View>
                </TableCell>
                <TableCell>0.0.1</TableCell>
                <TableCell>320</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </View>

        {/* Bordered */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Bordered
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Full grid borders on all cells.
          </Text>
          <Table variant="bordered">
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Phase</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Button</TableCell>
                <TableCell>Form</TableCell>
                <TableCell>
                  <Badge color="success" size="sm">Done</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Modal</TableCell>
                <TableCell>Overlay</TableCell>
                <TableCell>
                  <Badge color="success" size="sm">Done</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>
                  <Badge color="warning" size="sm">In Progress</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Form</TableCell>
                <TableCell>
                  <Badge color="neutral" size="sm">Planned</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </View>

        {/* Info */}
        <View
          style={{
            borderRadius: 12,
            backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
            borderWidth: 1,
            borderColor: isDark ? "#312e81" : "#c7d2fe",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca", marginBottom: 4 }}>
            How it works
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
            3 variants: simple (clean), striped (alternating rows), bordered (full grid). Horizontally scrollable via ScrollView. TableCell accepts text or custom ReactNode children. Auto-indexes rows for striped variant.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
