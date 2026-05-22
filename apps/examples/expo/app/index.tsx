import { ScrollView, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, Heading, ThemeToggle } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";

interface ComponentItem {
  name: string;
  route: string;
}

interface Category {
  title: string;
  items: ComponentItem[];
}

const categories: Category[] = [
  {
    title: "Foundation",
    items: [
      { name: "Box", route: "/box" },
      { name: "Text", route: "/text" },
      { name: "Heading", route: "/heading" },
      { name: "Divider", route: "/divider" },
      { name: "Badge", route: "/badge" },
      { name: "Spinner", route: "/spinner" },
      { name: "Skeleton", route: "/skeleton" },
      { name: "Avatar", route: "/avatar" },
    ],
  },
  {
    title: "Forms",
    items: [
      { name: "Button", route: "/button" },
      { name: "Input", route: "/input" },
      { name: "Textarea", route: "/textarea" },
      { name: "Checkbox", route: "/checkbox" },
      { name: "Switch", route: "/switch" },
      { name: "Radio", route: "/radio" },
      { name: "Slider", route: "/slider" },
      { name: "Select", route: "/select" },
    ],
  },
  {
    title: "Layout & Data Display",
    items: [
      { name: "Flex", route: "/flex" },
      { name: "Grid", route: "/grid" },
      { name: "Container", route: "/container" },
      { name: "Code", route: "/code" },
      { name: "Link", route: "/link" },
      { name: "Card", route: "/card" },
      { name: "Table", route: "/table" },
      { name: "Breadcrumbs", route: "/breadcrumbs" },
    ],
  },
  {
    title: "Overlay & Navigation",
    items: [
      { name: "Modal", route: "/modal" },
      { name: "Drawer", route: "/drawer" },
      { name: "Accordion", route: "/accordion" },
      { name: "Tabs", route: "/tabs" },
      { name: "Tooltip", route: "/tooltip" },
      { name: "Popover", route: "/popover" },
      { name: "Dropdown", route: "/dropdown" },
      { name: "Context Menu", route: "/context-menu" },
      { name: "Toast", route: "/toast" },
      { name: "Pagination", route: "/pagination" },
    ],
  },
  {
    title: "Mobile Only",
    items: [
      { name: "Bottom Sheet", route: "/bottom-sheet" },
      { name: "Action Sheet", route: "/action-sheet" },
      { name: "Swipeable Row", route: "/swipeable-row" },
      { name: "Pull to Refresh", route: "/pull-to-refresh" },
      { name: "FAB", route: "/fab" },
      { name: "OTP Input", route: "/otp-input" },
      { name: "Search Bar", route: "/search-bar" },
      { name: "Segmented Control", route: "/segmented-control" },
      { name: "Status Bar Manager", route: "/status-bar-manager" },
      { name: "useHaptic", route: "/use-haptic" },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ title: "Allem UI Native", headerShown: false }} />
      <ScrollView
        className="flex-1 bg-white dark:bg-neutral-950"
        contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom + 20 }}
      >
        {/* Hero */}
        <View className="px-5 pt-6 pb-4">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <View className="w-8 h-8 rounded-lg bg-brand-500 items-center justify-center mr-3">
                <Text className="text-neutral-950 font-bold text-base">A</Text>
              </View>
              <Text className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Allem UI</Text>
            </View>
            <ThemeToggle
              size="md"
              lightIcon={(s) => <Ionicons name="sunny-outline" size={s} color="#f59e0b" />}
              darkIcon={(s) => <Ionicons name="moon-outline" size={s} color="#a5b4fc" />}
            />
          </View>
          <Heading size="xl" className="text-neutral-900 dark:text-white mb-1">
            Allem UI
          </Heading>
          <Text size="sm" className="text-neutral-500 dark:text-neutral-400 leading-5">
            Beautiful, accessible and dark-mode-ready{"\n"}React UI components for modern apps.
          </Text>

          {/* Stats row */}
          <View className="flex-row mt-5 gap-4">
            <View className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
              <Text className="text-brand-500 text-lg font-bold">34+</Text>
              <Text size="xs" className="text-neutral-500">Components</Text>
            </View>
            <View className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
              <Text className="text-brand-500 text-lg font-bold">10</Text>
              <Text size="xs" className="text-neutral-500">Mobile Only</Text>
            </View>
            <View className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
              <Text className="text-brand-500 text-lg font-bold">Dark</Text>
              <Text size="xs" className="text-neutral-500">Mode Ready</Text>
            </View>
          </View>
        </View>

        {/* Categories */}
        {categories.map((category) => (
          <View key={category.title} className="mt-5">
            <View className="px-5 mb-2">
              <Text size="xs" className="text-brand-500 font-semibold tracking-widest uppercase">
                {category.title}
              </Text>
            </View>
            <View className="mx-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
              {category.items.map((item) => (
                <Pressable
                  key={item.route}
                  className="flex-row items-center justify-between px-4 py-3.5 active:bg-neutral-100 dark:active:bg-neutral-800"
                  onPress={() => router.push(item.route as any)}
                >
                  <Text className="text-neutral-900 dark:text-white">{item.name}</Text>
                  <Text className="text-neutral-400 dark:text-neutral-600">›</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}

        {/* Footer */}
        <View className="mt-8 mb-4 items-center">
          <Text size="xs" className="text-neutral-400 dark:text-neutral-600">
            Built for developers.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
