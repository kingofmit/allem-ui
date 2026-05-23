"use client";

import { Select, SelectItem } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "label", type: "string", description: "Label text." },
  { name: "placeholder", type: "string", description: "Placeholder text." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
  { name: "description", type: "string", description: "Helper text." },
  { name: "errorMessage", type: "string", description: "Error message." },
];

export default function SelectPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Select</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A dropdown select menu for choosing from a list of options.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Select label="Country" placeholder="Choose a country">\n  <SelectItem id="us">United States</SelectItem>\n  <SelectItem id="uk">United Kingdom</SelectItem>\n  <SelectItem id="fr">France</SelectItem>\n</Select>`}>
          <Select label="Country" placeholder="Choose a country">
            <SelectItem id="us">United States</SelectItem>
            <SelectItem id="uk">United Kingdom</SelectItem>
            <SelectItem id="fr">France</SelectItem>
          </Select>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>

      <h2 className="mt-12 text-xl font-semibold">SelectItem Props</h2>
      <div className="mt-4">
        <PropsTable
          props={[
            { name: "children", type: "ReactNode", required: true, description: "Item label content" },
            { name: "className", type: "string", description: "Additional CSS classes" },
          ]}
        />
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          SelectItem also accepts all React Aria ListBoxItem props.
        </p>
      </div>
    </div>
  );
}
