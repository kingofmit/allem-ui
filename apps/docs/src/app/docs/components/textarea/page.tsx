"use client";

import { Textarea } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "label", type: "string", description: "Field label" },
  { name: "description", type: "string", description: "Helper text below the field" },
  { name: "errorMessage", type: "string", description: "Error message (shows red styling)" },
  { name: "placeholder", type: "string", description: "Placeholder text" },
  { name: "rows", type: "number", default: "3", description: "Number of visible text rows" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

export default function TextareaPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A multi-line text input.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Textarea label="Message" placeholder="Write your message..." />`}>
          <div className="w-full max-w-sm">
            <Textarea label="Message" placeholder="Write your message..." />
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
