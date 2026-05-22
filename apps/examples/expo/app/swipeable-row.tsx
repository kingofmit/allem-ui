import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { SwipeableRow, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";

function RowContent({ title, subtitle }: { title: string; subtitle: string }) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        backgroundColor: isDark ? "#171717" : "#ffffff",
        borderWidth: 1,
        borderColor: isDark ? "#262626" : "#e5e5e5",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 15, color: isDark ? "#ffffff" : "#171717" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
        {subtitle}
      </Text>
    </View>
  );
}

export default function SwipeableRowScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Swipeable Row" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Swipeable Row</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Swipe left or right to reveal actions with spring physics.
        </Text>

        {/* Demo 1: Right swipe */}
        <View className="mb-4">
          <Text size="sm" className="mb-2 text-neutral-500 dark:text-neutral-400 font-medium">
            Swipe left
          </Text>
          <SwipeableRow
            rightActions={[
              { key: "archive", label: "Archive", color: "#4f46e5", onPress: () => Alert.alert("Archived") },
              { key: "delete", label: "Delete", color: "#dc2626", onPress: () => Alert.alert("Deleted") },
            ]}
          >
            <RowContent title="Meeting notes" subtitle="Swipe left for archive & delete" />
          </SwipeableRow>
        </View>

        {/* Demo 2: Left swipe */}
        <View className="mb-4">
          <Text size="sm" className="mb-2 text-neutral-500 dark:text-neutral-400 font-medium">
            Swipe right
          </Text>
          <SwipeableRow
            leftActions={[
              { key: "pin", label: "Pin", color: "#f59e0b", onPress: () => Alert.alert("Pinned") },
              { key: "read", label: "Read", color: "#059669", onPress: () => Alert.alert("Read") },
            ]}
          >
            <RowContent title="New message" subtitle="Swipe right for pin & read" />
          </SwipeableRow>
        </View>

        {/* Demo 3: Both directions */}
        <View className="mb-6">
          <Text size="sm" className="mb-2 text-neutral-500 dark:text-neutral-400 font-medium">
            Both directions
          </Text>
          <SwipeableRow
            leftActions={[
              { key: "star", label: "Star", color: "#f59e0b", onPress: () => Alert.alert("Starred") },
            ]}
            rightActions={[
              { key: "trash", label: "Trash", color: "#dc2626", onPress: () => Alert.alert("Trashed") },
            ]}
          >
            <RowContent title="Important document" subtitle="Star left, trash right" />
          </SwipeableRow>
        </View>

        {/* Info */}
        <View className="rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 p-4">
          <Text size="sm" className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
            How it works
          </Text>
          <Text size="sm" className="text-indigo-600 dark:text-indigo-400 leading-5">
            PanResponder drives the swipe gesture with spring physics. Action buttons are revealed behind the content. Haptic feedback fires when actions snap open.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
