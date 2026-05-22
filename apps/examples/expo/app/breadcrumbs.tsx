import { Stack } from "expo-router";
import { ScrollView, View, Text as RNText } from "react-native";
import { Breadcrumbs, BreadcrumbItem, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function BreadcrumbsScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Breadcrumbs" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Breadcrumbs</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Horizontal navigation trail with separators.
        </Text>

        {/* Basic */}
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
            Basic
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Simple breadcrumb with slash separator.
          </Text>
          <Breadcrumbs>
            <BreadcrumbItem onPress={() => {}}>Home</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Products</BreadcrumbItem>
            <BreadcrumbItem>Shoes</BreadcrumbItem>
          </Breadcrumbs>
        </View>

        {/* With Icons */}
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
            With Icons
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Breadcrumb items with leading icons.
          </Text>
          <Breadcrumbs>
            <BreadcrumbItem
              onPress={() => {}}
              icon={<Ionicons name="home-outline" size={14} color={isDark ? "#a3a3a3" : "#737373"} />}
            >
              Home
            </BreadcrumbItem>
            <BreadcrumbItem
              onPress={() => {}}
              icon={<Ionicons name="settings-outline" size={14} color={isDark ? "#a3a3a3" : "#737373"} />}
            >
              Settings
            </BreadcrumbItem>
            <BreadcrumbItem
              icon={<Ionicons name="shield-outline" size={14} color={isDark ? "#ffffff" : "#171717"} />}
            >
              Security
            </BreadcrumbItem>
          </Breadcrumbs>
        </View>

        {/* Custom Separator */}
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
            Custom Separator
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Using chevron icon as separator.
          </Text>
          <Breadcrumbs
            separator={
              <Ionicons
                name="chevron-forward"
                size={14}
                color={isDark ? "#525252" : "#a3a3a3"}
                style={{ marginHorizontal: 4 }}
              />
            }
          >
            <BreadcrumbItem onPress={() => {}}>Dashboard</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Projects</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Allem UI</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
          </Breadcrumbs>
        </View>

        {/* Long Trail */}
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
            Scrollable
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Long trails scroll horizontally.
          </Text>
          <Breadcrumbs
            separator={
              <Ionicons
                name="chevron-forward"
                size={14}
                color={isDark ? "#525252" : "#a3a3a3"}
                style={{ marginHorizontal: 4 }}
              />
            }
          >
            <BreadcrumbItem
              onPress={() => {}}
              icon={<Ionicons name="home-outline" size={14} color={isDark ? "#a3a3a3" : "#737373"} />}
            >
              Home
            </BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Electronics</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Computers</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>Laptops</BreadcrumbItem>
            <BreadcrumbItem onPress={() => {}}>MacBook Pro</BreadcrumbItem>
            <BreadcrumbItem>16-inch M4 Max</BreadcrumbItem>
          </Breadcrumbs>
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
            Last item renders bold as current page. Previous items are pressable links. Supports custom separator prop (default is "/"), icon prop on items, and horizontal scrolling for long trails.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
