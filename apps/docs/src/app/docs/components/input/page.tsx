"use client";

import { Input } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "label", type: "string", description: "Label text shown above the input." },
  { name: "description", type: "string", description: "Helper text shown below the input." },
  { name: "errorMessage", type: "string", description: "Error message (replaces description)." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the input." },
];

export default function InputPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Input</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A text input field with label, description, and validation support.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Input label="Email" placeholder="you@example.com" />`}>
          <Input label="Email" placeholder="you@example.com" />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">With description</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Input label="Username" description="Must be 3-20 characters." />`}>
          <Input label="Username" description="Must be 3-20 characters." />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Sizes</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Input label="Small" size="sm" />\n<Input label="Medium" size="md" />\n<Input label="Large" size="lg" />`}>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input label="Small" size="sm" />
            <Input label="Medium" size="md" />
            <Input label="Large" size="lg" />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4">
        <PropsTable props={props} />
      </div>
    </div>
  );
}
