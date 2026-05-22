import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Checkbox, Text, Heading, Divider } from "@allem-ui/native";

export default function CheckboxScreen() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [c, setC] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Checkbox" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Checkbox</Heading>

        <Checkbox checked={a} onChange={setA} label="Accept terms and conditions" className="mb-3" />
        <Checkbox checked={b} onChange={setB} label="Subscribe to newsletter" className="mb-3" />
        <Checkbox checked={c} onChange={setC} label="Remember me" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Checkbox checked size="sm" label="Small checkbox" className="mb-3" />
        <Checkbox checked size="md" label="Medium checkbox (default)" className="mb-3" />
        <Checkbox checked size="lg" label="Large checkbox" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Disabled</Text>
        <Checkbox checked disabled label="Checked & disabled" className="mb-3" />
        <Checkbox disabled label="Unchecked & disabled" />
      </ScrollView>
    </>
  );
}
