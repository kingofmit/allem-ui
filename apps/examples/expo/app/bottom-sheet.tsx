import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { BottomSheet, Button, Text, Heading, Divider } from "@allem-ui/native";

export default function BottomSheetScreen() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Bottom Sheet" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Bottom Sheet</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Draggable sheet with snap points and spring animations.
        </Text>

        {/* Demo 1: Basic */}
        <View className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 mb-4">
          <Text size="sm" className="font-semibold text-neutral-900 dark:text-white mb-1">
            Basic Bottom Sheet
          </Text>
          <Text size="sm" className="text-neutral-500 dark:text-neutral-400 mb-4">
            Slides up with a draggable handle. Swipe down or tap backdrop to dismiss.
          </Text>
          <Button size="md" color="primary" onPress={() => setOpen1(true)}>
            Open Bottom Sheet
          </Button>
        </View>

        {/* Demo 2: Snap Points */}
        <View className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 mb-6">
          <Text size="sm" className="font-semibold text-neutral-900 dark:text-white mb-1">
            Custom Snap Points
          </Text>
          <Text size="sm" className="text-neutral-500 dark:text-neutral-400 mb-4">
            Snaps to 30%, 60%, and 90% of screen height. Drag between positions.
          </Text>
          <Button size="md" color="primary" variant="outline" onPress={() => setOpen2(true)}>
            Open with Snap Points
          </Button>
        </View>

        {/* Info */}
        <View className="rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 p-4">
          <Text size="sm" className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
            How it works
          </Text>
          <Text size="sm" className="text-indigo-600 dark:text-indigo-400 leading-5">
            Uses spring physics for natural motion. Supports multiple snap points, a drag handle, title bar, and backdrop dismiss. Haptic feedback on each snap.
          </Text>
        </View>
      </ScrollView>

      {/* Sheet 1: Basic */}
      <BottomSheet open={open1} onClose={() => setOpen1(false)} title="Details">
        <Text className="text-neutral-700 dark:text-neutral-300 mb-2">
          This is a bottom sheet with a draggable handle.
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400 mb-6">
          Drag down or tap the backdrop to dismiss.
        </Text>
        <Button size="md" color="neutral" onPress={() => setOpen1(false)}>
          Done
        </Button>
      </BottomSheet>

      {/* Sheet 2: Snap Points */}
      <BottomSheet
        open={open2}
        onClose={() => setOpen2(false)}
        title="Snap Points"
        snapPoints={[0.3, 0.6, 0.9]}
      >
        <Text className="text-neutral-700 dark:text-neutral-300 mb-2">
          This sheet has custom snap points at 30%, 60%, and 90%.
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400">
          Drag to snap between different heights.
        </Text>
      </BottomSheet>
    </>
  );
}
