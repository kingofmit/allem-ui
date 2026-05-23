"use client";

import { RadioGroup, Radio } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const radioGroupProps = [
  { name: "label", type: "string", description: "Group label" },
  { name: "description", type: "string", description: "Helper text" },
  { name: "errorMessage", type: "string", description: "Error message" },
  { name: "children", type: "ReactNode", default: "required", description: "Radio elements" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const radioProps = [
  { name: "children", type: "ReactNode", description: "Radio label content" },
  { name: "value", type: "string", default: "required", description: "Value for the radio option" },
];

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

      <h2 className="mt-12 text-xl font-semibold">RadioGroup Props</h2>
      <div className="mt-4">
        <PropsTable props={radioGroupProps} />
      </div>

      <h2 className="mt-12 text-xl font-semibold">Radio Props</h2>
      <div className="mt-4">
        <PropsTable props={radioProps} />
      </div>
    </div>
  );
}
