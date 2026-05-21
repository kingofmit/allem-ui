"use client";

import { Spinner } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
  { name: "color", type: '"primary" | "neutral" | "white"', default: '"primary"', description: "The color." },
  { name: "label", type: "string", description: "Visible label text." },
];

export default function SpinnerPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Spinner</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">An animated loading indicator.</p>

      <h2 className="mt-12 text-xl font-semibold">Sizes & Colors</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner color="neutral" />`}>
          <div className="flex items-center gap-6">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner color="neutral" />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">With label</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Spinner label="Loading data..." />`}>
          <Spinner label="Loading data..." />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
