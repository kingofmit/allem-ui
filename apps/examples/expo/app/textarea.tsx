import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Textarea, Text, Heading, Divider } from "@allem-ui/native";

export default function TextareaScreen() {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Textarea" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4" keyboardShouldPersistTaps="handled">
        <Heading size="md" className="mb-4">Textarea</Heading>

        <Textarea label="Default" placeholder="Write your message..." value={value} onChangeText={setValue} className="mb-4" />

        <Textarea label="With description" description="Max 500 characters." placeholder="Tell us more..." className="mb-4" />

        <Textarea label="With error" error errorMessage="Message is too short" placeholder="..." className="mb-4" />

        <Divider className="mb-4" />

        <Textarea label="More rows" placeholder="Taller textarea" numberOfLines={6} className="mb-4" />

        <Textarea label="Disabled" placeholder="Cannot edit" disabled className="mb-4" />
      </ScrollView>
    </>
  );
}
