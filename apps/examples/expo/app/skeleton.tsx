import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Skeleton, Text, Heading, Divider } from "@allem-ui/native";

export default function SkeletonScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Skeleton" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Skeleton</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Animated placeholder with pulsing opacity.</Text>

        <Text size="sm" className="mb-2 text-neutral-500">Basic shapes</Text>
        <Skeleton height={16} className="mb-2" />
        <Skeleton height={16} width="75%" className="mb-2" />
        <Skeleton height={16} width="50%" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Card skeleton</Text>
        <View className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 mb-4">
          <View className="flex-row gap-3">
            <Skeleton width={48} height={48} borderRadius={24} />
            <View className="flex-1 gap-2">
              <Skeleton height={14} width="60%" />
              <Skeleton height={12} width="40%" />
            </View>
          </View>
          <Skeleton height={12} className="mt-3" />
          <Skeleton height={12} width="80%" className="mt-2" />
          <Skeleton height={120} borderRadius={8} className="mt-3" />
        </View>

        <Text size="sm" className="mb-2 text-neutral-500">List skeleton</Text>
        {[1, 2, 3].map((i) => (
          <View key={i} className="flex-row gap-3 mb-3">
            <Skeleton width={40} height={40} borderRadius={8} />
            <View className="flex-1 gap-2 justify-center">
              <Skeleton height={14} width="70%" />
              <Skeleton height={10} width="40%" />
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
