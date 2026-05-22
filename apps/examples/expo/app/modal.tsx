import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Modal, ModalTrigger, ModalContent, Button, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

export default function ModalScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Modal" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Modal</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Centered dialog overlay with animated backdrop.
        </Text>

        {/* Default */}
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
            Default Modal
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Tap to open a basic dialog. Tap backdrop to dismiss.
          </Text>
          <Modal>
            <ModalTrigger>
              <Button size="sm">Open Modal</Button>
            </ModalTrigger>
            <ModalContent title="Welcome">
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040", marginBottom: 16 }}>
                This is a basic modal dialog with a title and content.
              </Text>
            </ModalContent>
          </Modal>
        </View>

        {/* Small Confirm */}
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
            Small Confirmation
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Compact dialog for quick confirmations.
          </Text>
          <Modal>
            <ModalTrigger>
              <Button size="sm" variant="outline">Small Modal</Button>
            </ModalTrigger>
            <ModalContent title="Confirm" size="sm">
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040", marginBottom: 16 }}>
                Are you sure you want to continue?
              </Text>
              <Button size="sm" onPress={() => {}}>Confirm</Button>
            </ModalContent>
          </Modal>
        </View>

        {/* Large */}
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
            Large Modal
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Wider dialog for longer content.
          </Text>
          <Modal>
            <ModalTrigger>
              <Button size="sm" color="neutral">Large Modal</Button>
            </ModalTrigger>
            <ModalContent title="Terms & Conditions" size="lg">
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040", marginBottom: 8 }}>
                Please read the following terms carefully before proceeding.
              </Text>
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040", marginBottom: 8 }}>
                1. You agree to use this software responsibly.
              </Text>
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040", marginBottom: 8 }}>
                2. All content is provided as-is.
              </Text>
              <Text style={{ fontSize: 14, color: isDark ? "#d4d4d4" : "#404040" }}>
                3. We reserve the right to update these terms.
              </Text>
            </ModalContent>
          </Modal>
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
            Modal uses RN Modal with transparent backdrop. Content animates in with fade + spring scale. Tap the backdrop to dismiss. Supports sm, md, lg, xl sizes.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
