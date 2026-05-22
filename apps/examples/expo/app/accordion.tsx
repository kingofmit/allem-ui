import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Accordion, AccordionItem, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function AccordionScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Accordion" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Accordion</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Expandable content sections with animated transitions.
        </Text>

        {/* FAQ */}
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
            FAQ
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap a question to reveal the answer.
          </Text>
          <Accordion>
            <AccordionItem title="What is Allem UI?">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252", lineHeight: 20 }}>
                Allem UI is a cross-platform component library for React and React Native with consistent design across web and mobile.
              </Text>
            </AccordionItem>
            <AccordionItem title="How do I install it?">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252", lineHeight: 20 }}>
                Run pnpm add @allem-ui/native for React Native or pnpm add @allem-ui/react for web.
              </Text>
            </AccordionItem>
            <AccordionItem title="Does it support dark mode?">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252", lineHeight: 20 }}>
                Yes! All components automatically adapt to dark mode. Colors switch seamlessly between light and dark themes.
              </Text>
            </AccordionItem>
          </Accordion>
        </View>

        {/* Default Expanded */}
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
            Default Expanded
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            First section starts open to highlight key info.
          </Text>
          <Accordion>
            <AccordionItem title="Getting Started" defaultExpanded>
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252", lineHeight: 20 }}>
                This section is expanded by default to show important information immediately.
              </Text>
            </AccordionItem>
            <AccordionItem title="Advanced Usage">
              <Text style={{ fontSize: 13, color: isDark ? "#a3a3a3" : "#525252", lineHeight: 20 }}>
                Tap the header to expand this section and learn more about advanced features.
              </Text>
            </AccordionItem>
          </Accordion>
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
            Uses LayoutAnimation for smooth expand/collapse transitions. Haptic feedback on toggle. Supports controlled and uncontrolled modes with defaultExpanded.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
