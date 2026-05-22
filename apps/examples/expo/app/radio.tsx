import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { RadioGroup, Radio, Text, Heading, Divider } from "@allem-ui/native";

export default function RadioScreen() {
  const [plan, setPlan] = useState("pro");
  const [size, setSize] = useState("md");

  return (
    <>
      <Stack.Screen options={{ title: "Radio" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">RadioGroup & Radio</Heading>

        <RadioGroup value={plan} onChange={setPlan} label="Select a plan">
          <Radio value="free" label="Free — $0/month" />
          <Radio value="pro" label="Pro — $19/month" />
          <Radio value="enterprise" label="Enterprise — $99/month" />
        </RadioGroup>

        <Text size="sm" className="mt-2 text-indigo-600">Selected: {plan}</Text>

        <Divider className="my-4" />

        <RadioGroup value={size} onChange={setSize} label="Size">
          <Radio value="sm" label="Small" />
          <Radio value="md" label="Medium" />
          <Radio value="lg" label="Large" />
        </RadioGroup>

        <Divider className="my-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Disabled group</Text>
        <RadioGroup value="a" onChange={() => {}} label="Disabled" disabled>
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </ScrollView>
    </>
  );
}
