"use client";

import { Divider } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function DividerPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Divider</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A horizontal or vertical line separator.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Divider />`}>
          <div className="w-full space-y-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Content above</p>
            <Divider />
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Content below</p>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
