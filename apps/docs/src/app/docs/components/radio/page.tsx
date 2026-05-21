"use client";

import { RadioGroup, Radio } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function RadioPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Radio</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Radio buttons for single selection from a list.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<RadioGroup label="Plan">\n  <Radio value="free">Free</Radio>\n  <Radio value="pro">Pro</Radio>\n  <Radio value="enterprise">Enterprise</Radio>\n</RadioGroup>`}>
          <RadioGroup label="Plan">
            <Radio value="free">Free</Radio>
            <Radio value="pro">Pro</Radio>
            <Radio value="enterprise">Enterprise</Radio>
          </RadioGroup>
        </ComponentPreview>
      </div>
    </div>
  );
}
