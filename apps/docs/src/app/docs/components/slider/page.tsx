"use client";

import { Slider } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

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
    </div>
  );
}
