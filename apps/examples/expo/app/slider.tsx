import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Slider, Text, Heading, Divider } from "@allem-ui/native";

export default function SliderScreen() {
  const [v1, setV1] = useState(50);
  const [v2, setV2] = useState(25);
  const [v3, setV3] = useState(75);

  return (
    <>
      <Stack.Screen options={{ title: "Slider" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Slider</Heading>

        <Text size="sm" className="mb-1 text-neutral-500">Default (0–100): {v1}</Text>
        <Slider value={v1} onChange={setV1} min={0} max={100} className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-1 text-neutral-500">Volume: {v2}%</Text>
        <Slider value={v2} onChange={setV2} min={0} max={100} className="mb-4" />

        <Text size="sm" className="mb-1 text-neutral-500">Brightness: {v3}%</Text>
        <Slider value={v3} onChange={setV3} min={0} max={100} className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Slider value={50} onChange={() => {}} size="sm" className="mb-3" />
        <Slider value={50} onChange={() => {}} size="md" className="mb-3" />
        <Slider value={50} onChange={() => {}} size="lg" className="mb-4" />
      </ScrollView>
    </>
  );
}
