"use client";

import { Tooltip, TooltipContent, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function TooltipPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A popup that displays information on hover.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Tooltip>\n  <Button>Hover me</Button>\n  <TooltipContent>This is a tooltip</TooltipContent>\n</Tooltip>`}>
          <Tooltip>
            <Button variant="outline">Hover me</Button>
            <TooltipContent>This is a tooltip</TooltipContent>
          </Tooltip>
        </ComponentPreview>
      </div>
    </div>
  );
}
