import { View, ScrollView, Pressable, Image, useWindowDimensions, Linking } from "react-native";
import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, ThemeToggle } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

interface ComponentItem {
  name: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface Category {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  items: ComponentItem[];
}

const categories: Category[] = [
  {
    title: "Foundation",
    icon: "cube-outline",
    items: [
      { name: "Box", route: "/box", icon: "square-outline" },
      { name: "Text", route: "/text", icon: "text-outline" },
      { name: "Heading", route: "/heading", icon: "reader-outline" },
      { name: "Divider", route: "/divider", icon: "remove-outline" },
      { name: "Badge", route: "/badge", icon: "pricetag-outline" },
      { name: "Spinner", route: "/spinner", icon: "reload-outline" },
      { name: "Skeleton", route: "/skeleton", icon: "scan-outline" },
      { name: "Avatar", route: "/avatar", icon: "person-circle-outline" },
    ],
  },
  {
    title: "Forms",
    icon: "create-outline",
    items: [
      { name: "Button", route: "/button", icon: "radio-button-on-outline" },
      { name: "Input", route: "/input", icon: "pencil-outline" },
      { name: "Textarea", route: "/textarea", icon: "document-text-outline" },
      { name: "Checkbox", route: "/checkbox", icon: "checkbox-outline" },
      { name: "Switch", route: "/switch", icon: "toggle-outline" },
      { name: "Radio", route: "/radio", icon: "ellipse-outline" },
      { name: "Slider", route: "/slider", icon: "options-outline" },
      { name: "Select", route: "/select", icon: "chevron-down-circle-outline" },
    ],
  },
  {
    title: "Layout & Data",
    icon: "grid-outline",
    items: [
      { name: "Flex", route: "/flex", icon: "resize-outline" },
      { name: "Grid", route: "/grid", icon: "apps-outline" },
      { name: "Container", route: "/container", icon: "browsers-outline" },
      { name: "Code", route: "/code", icon: "code-slash-outline" },
      { name: "Link", route: "/link", icon: "link-outline" },
      { name: "Card", route: "/card", icon: "card-outline" },
      { name: "Table", route: "/table", icon: "grid-outline" },
      { name: "Breadcrumbs", route: "/breadcrumbs", icon: "trail-sign-outline" },
    ],
  },
  {
    title: "Overlay & Navigation",
    icon: "layers-outline",
    items: [
      { name: "Modal", route: "/modal", icon: "albums-outline" },
      { name: "Drawer", route: "/drawer", icon: "menu-outline" },
      { name: "Accordion", route: "/accordion", icon: "chevron-down-outline" },
      { name: "Tabs", route: "/tabs", icon: "copy-outline" },
      { name: "Tooltip", route: "/tooltip", icon: "chatbox-ellipses-outline" },
      { name: "Popover", route: "/popover", icon: "chatbubble-outline" },
      { name: "Dropdown", route: "/dropdown", icon: "caret-down-outline" },
      { name: "Context Menu", route: "/context-menu", icon: "ellipsis-horizontal-outline" },
      { name: "Toast", route: "/toast", icon: "notifications-outline" },
      { name: "Pagination", route: "/pagination", icon: "ellipsis-horizontal" },
    ],
  },
  {
    title: "Mobile Only",
    icon: "phone-portrait-outline",
    items: [
      { name: "Bottom Sheet", route: "/bottom-sheet", icon: "arrow-up-outline" },
      { name: "Action Sheet", route: "/action-sheet", icon: "list-outline" },
      { name: "Swipeable Row", route: "/swipeable-row", icon: "swap-horizontal-outline" },
      { name: "Pull to Refresh", route: "/pull-to-refresh", icon: "refresh-outline" },
      { name: "FAB", route: "/fab", icon: "add-circle-outline" },
      { name: "OTP Input", route: "/otp-input", icon: "keypad-outline" },
      { name: "Search Bar", route: "/search-bar", icon: "search-outline" },
      { name: "Segmented Control", route: "/segmented-control", icon: "git-compare-outline" },
      { name: "Status Bar Manager", route: "/status-bar-manager", icon: "settings-outline" },
      { name: "useHaptic", route: "/use-haptic", icon: "pulse-outline" },
    ],
  },
];

function Row({ item, isDark, onPress }: { item: ComponentItem; isDark: boolean; onPress: () => void }) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 13,
        backgroundColor: pressed
          ? isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"
          : "transparent",
      }}
    >
      <Ionicons
        name={item.icon}
        size={18}
        color={isDark ? "#525252" : "#a3a3a3"}
        style={{ marginRight: 12 }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          color: isDark ? "#ffffff" : "#171717",
        }}
      >
        {item.name}
      </Text>
      <Ionicons name="chevron-forward" size={16} color={isDark ? "#404040" : "#d4d4d4"} />
    </Pressable>
  );
}

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const { width: screenWidth } = useWindowDimensions();
  const imageHeight = (screenWidth * 630) / 1200; // aspect ratio of AllemUI.png

  return (
    <>
      <Stack.Screen options={{ title: "Allem UI Native", headerShown: false }} />

      <ScrollView
        style={{ flex: 1, backgroundColor: isDark ? "#0a0a0a" : "#ffffff" }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* Status bar background */}
        <View style={{ height: insets.top, backgroundColor: isDark ? "#0a0a0a" : "#ffffff" }} />

        {/* Banner */}
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: isDark ? "#1c1c1e" : "#e5e5e5",
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../assets/AllemUI.png")}
            style={{
              width: screenWidth - 34,
              height: ((screenWidth - 34) * 630) / 1200,
            }}
            resizeMode="cover"
          />
        </View>

        {/* Install + Theme toggle row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 16,
            marginTop: 16,
            marginBottom: 4,
            backgroundColor: isDark ? "#111111" : "#f9fafb",
            borderRadius: 14,
            borderWidth: 1,
            borderColor: isDark ? "#1c1c1e" : "#e5e5e5",
            paddingLeft: 14,
            paddingRight: 6,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: isDark ? "#525252" : "#a3a3a3",
              marginRight: 6,
            }}
          >
            $
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 13,
              fontFamily: "monospace",
              color: isDark ? "#e5e5e5" : "#171717",
              letterSpacing: -0.3,
            }}
            selectable
          >
            npm i @allem-ui/native
          </Text>
          <View
            style={{
              width: 1,
              height: 20,
              backgroundColor: isDark ? "#262626" : "#e5e5e5",
              marginHorizontal: 8,
            }}
          />
          <ThemeToggle
            size="md"
            lightIcon={(s) => <Ionicons name="sunny-outline" size={s} color="#f59e0b" />}
            darkIcon={(s) => <Ionicons name="moon-outline" size={s} color="#a5b4fc" />}
          />
        </View>

        {/* Author */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 16,
            marginTop: 12,
            marginBottom: 4,
            backgroundColor: isDark ? "#111111" : "#f9fafb",
            borderRadius: 14,
            borderWidth: 1,
            borderColor: isDark ? "#1c1c1e" : "#e5e5e5",
            padding: 14,
            gap: 12,
          }}
        >
          <Image
            source={require("../assets/ahmed-allem-profile.png")}
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              borderWidth: 1.5,
              borderColor: isDark ? "#262626" : "#e5e5e5",
            }}
          />
          <View style={{ flex: 1, gap: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>
              Ahmed Allem
            </Text>
            <Text style={{ fontSize: 11, color: isDark ? "#525252" : "#a3a3a3" }}>
              @kingofmit
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { icon: "logo-github" as const, url: "https://github.com/kingofmit" },
              { icon: "logo-twitter" as const, url: "https://x.com/kingofmit" },
              { icon: "logo-youtube" as const, url: "https://youtube.com/@kingofmit" },
              { icon: "logo-linkedin" as const, url: "https://linkedin.com/in/ahmedallem" },
              { icon: "globe-outline" as const, url: "https://kingallem.com" },
            ]).map((item) => (
              <Pressable
                key={item.icon}
                onPress={() => Linking.openURL(item.url)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: isDark ? "#1c1c1e" : "#f0f0f0",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name={item.icon} size={14} color={isDark ? "#a3a3a3" : "#525252"} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Categories */}
        {categories.map((category) => (
          <View key={category.title} style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                marginBottom: 8,
                gap: 6,
              }}
            >
              <Ionicons
                name={category.icon}
                size={14}
                color="#00E5CC"
              />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                  letterSpacing: 1.2,
                  color: "#00E5CC",
                  textTransform: "uppercase",
                }}
              >
                {category.title}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 16,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: isDark ? "#1c1c1e" : "#e5e5e5",
                backgroundColor: isDark ? "#111111" : "#f9fafb",
                overflow: "hidden",
              }}
            >
              {category.items.map((item, idx) => (
                <View key={item.route}>
                  {idx > 0 && (
                    <View
                      style={{
                        height: 1,
                        backgroundColor: isDark ? "#1c1c1e" : "#f0f0f0",
                        marginLeft: 46,
                      }}
                    />
                  )}
                  <Row
                    item={item}
                    isDark={isDark}
                    onPress={() => router.push(item.route as any)}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Footer */}
        <View style={{ marginTop: 32, marginBottom: 8, alignItems: "center" }}>
          <Text style={{ fontSize: 11, color: isDark ? "#404040" : "#d4d4d4" }}>
            Designed for React Native. Built for developers.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
