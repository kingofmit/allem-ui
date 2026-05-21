"use client";

import { Checkbox } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "children", type: "ReactNode", description: "Label text." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether disabled." },
  { name: "isSelected", type: "boolean", description: "Controlled checked state." },
  { name: "defaultSelected", type: "boolean", description: "Default checked state." },
];

export default function CheckboxPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A checkbox input for toggling boolean values.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Checkbox>Accept terms and conditions</Checkbox>`}>
          <Checkbox>Accept terms and conditions</Checkbox>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Sizes</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Checkbox size="sm">Small</Checkbox>\n<Checkbox size="md">Medium</Checkbox>\n<Checkbox size="lg">Large</Checkbox>`}>
          <div className="flex flex-col gap-3">
            <Checkbox size="sm">Small</Checkbox>
            <Checkbox size="md">Medium</Checkbox>
            <Checkbox size="lg">Large</Checkbox>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
