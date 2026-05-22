import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Select, Text, Heading, Divider } from "@allem-ui/native";

export default function SelectScreen() {
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("md");

  return (
    <>
      <Stack.Screen options={{ title: "Select" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-4">Select</Heading>
        <Text size="sm" className="mb-4 text-neutral-500">Modal-based bottom sheet picker for mobile.</Text>

        <Select
          label="Country"
          placeholder="Choose a country"
          items={[
            { key: "us", label: "United States" },
            { key: "uk", label: "United Kingdom" },
            { key: "ca", label: "Canada" },
            { key: "au", label: "Australia" },
            { key: "de", label: "Germany" },
            { key: "fr", label: "France" },
            { key: "jp", label: "Japan" },
          ]}
          selectedKey={country}
          onSelectionChange={setCountry}
          className="mb-4"
        />

        <Divider className="mb-4" />

        <Select
          label="Size"
          items={[
            { key: "sm", label: "Small" },
            { key: "md", label: "Medium" },
            { key: "lg", label: "Large" },
            { key: "xl", label: "Extra Large" },
          ]}
          selectedKey={size}
          onSelectionChange={setSize}
          className="mb-4"
        />

        <Text size="sm" className="text-indigo-600">Selected size: {size}</Text>
      </ScrollView>
    </>
  );
}
