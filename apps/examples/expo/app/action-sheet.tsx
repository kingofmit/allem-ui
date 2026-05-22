import { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, View, Alert } from "react-native";
import { ActionSheet, Button, Text, Heading } from "@allem-ui/native";

export default function ActionSheetScreen() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Action Sheet" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Action Sheet</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          iOS-style action menu with spring animation.
        </Text>

        {/* Demo 1: Share */}
        <View className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 mb-4">
          <Text size="sm" className="font-semibold text-neutral-900 dark:text-white mb-1">
            Share Options
          </Text>
          <Text size="sm" className="text-neutral-500 dark:text-neutral-400 mb-4">
            Standard action sheet with title, message, and multiple options.
          </Text>
          <Button size="md" color="primary" onPress={() => setOpen1(true)}>
            Share Photo
          </Button>
        </View>

        {/* Demo 2: Destructive */}
        <View className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 mb-6">
          <Text size="sm" className="font-semibold text-neutral-900 dark:text-white mb-1">
            Destructive Action
          </Text>
          <Text size="sm" className="text-neutral-500 dark:text-neutral-400 mb-4">
            Includes a destructive action highlighted in red with warning haptic.
          </Text>
          <Button size="md" color="danger" variant="outline" onPress={() => setOpen2(true)}>
            Delete Item
          </Button>
        </View>

        {/* Info */}
        <View className="rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 p-4">
          <Text size="sm" className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
            How it works
          </Text>
          <Text size="sm" className="text-indigo-600 dark:text-indigo-400 leading-5">
            Native iOS-style sheet with grouped actions and a separate cancel button. Destructive actions get red text and warning haptics. Spring animation on open.
          </Text>
        </View>
      </ScrollView>

      <ActionSheet
        open={open1}
        onClose={() => setOpen1(false)}
        title="Share Photo"
        message="Choose how you'd like to share this photo."
        actions={[
          { key: "msg", label: "Messages", onPress: () => Alert.alert("Messages") },
          { key: "email", label: "Email", onPress: () => Alert.alert("Email") },
          { key: "copy", label: "Copy Link", onPress: () => Alert.alert("Copied") },
        ]}
      />

      <ActionSheet
        open={open2}
        onClose={() => setOpen2(false)}
        title="Delete Item"
        message="This action cannot be undone."
        actions={[
          { key: "delete", label: "Delete Forever", onPress: () => Alert.alert("Deleted"), destructive: true },
          { key: "archive", label: "Archive Instead", onPress: () => Alert.alert("Archived") },
        ]}
      />
    </>
  );
}
