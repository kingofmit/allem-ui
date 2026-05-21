"use client";

import { Text } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function TextPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Text</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Body text with size and color variants.</p>
      <h2 className="mt-12 text-xl font-semibold">Sizes</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Text size="sm">Small text</Text>\n<Text size="md">Medium text</Text>\n<Text size="lg">Large text</Text>`}>
          <div className="space-y-2">
            <Text size="sm">Small body text</Text>
            <Text size="md">Medium body text (default)</Text>
            <Text size="lg">Large body text</Text>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
