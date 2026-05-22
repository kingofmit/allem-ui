import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Switch, Text, Heading, Divider } from "@allem-ui/native";

export default function SwitchScreen() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [c, setC] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Switch" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Switch</Heading>

        <Switch checked={a} onChange={setA} label="Wi-Fi" className="mb-3" />
        <Switch checked={b} onChange={setB} label="Bluetooth" className="mb-3" />
        <Switch checked={c} onChange={setC} label="Airplane mode" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Switch checked size="sm" label="Small" className="mb-3" />
        <Switch checked size="md" label="Medium (default)" className="mb-3" />
        <Switch checked size="lg" label="Large" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Disabled</Text>
        <Switch checked disabled label="On & disabled" className="mb-3" />
        <Switch disabled label="Off & disabled" />
      </ScrollView>
    </>
  );
}
