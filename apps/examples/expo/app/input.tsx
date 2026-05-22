import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Input, Text, Heading, Divider } from "@allem-ui/native";

export default function InputScreen() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Input" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4" keyboardShouldPersistTaps="handled">
        <Heading size="md" className="mb-4">Input</Heading>

        <Input label="Default" placeholder="Type something..." value={value} onChangeText={setValue} className="mb-4" />

        <Divider className="mb-4" />

        <Input label="With description" description="We'll never share your email." placeholder="you@example.com" className="mb-4" />

        <Input label="With error" placeholder="Enter email" error errorMessage="This field is required" className="mb-4" />

        <Divider className="mb-4" />

        <Text size="sm" className="mb-2 text-neutral-500">Sizes</Text>
        <Input size="sm" placeholder="Small input" className="mb-3" />
        <Input size="md" placeholder="Medium input (default)" className="mb-3" />
        <Input size="lg" placeholder="Large input" className="mb-4" />

        <Divider className="mb-4" />

        <Input label="Password" placeholder="Enter password" secureTextEntry value={password} onChangeText={setPassword} className="mb-4" />

        <Input label="Disabled" placeholder="Cannot edit" disabled className="mb-4" />
      </ScrollView>
    </>
  );
}
