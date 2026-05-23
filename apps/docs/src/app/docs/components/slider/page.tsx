"use client";

import { Slider } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "label", type: "string", description: "Slider label" },
  { name: "showOutput", type: "boolean", default: "false", description: "Show current value" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Slider size" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

export default function SliderPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A range slider for selecting numeric values.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Slider label="Volume" defaultValue={50} showOutput />`}>
          <div className="w-full max-w-xs">
            <Slider label="Volume" defaultValue={50} showOutput />
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
