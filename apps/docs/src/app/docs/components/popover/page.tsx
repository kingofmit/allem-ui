"use client";

import { PopoverTrigger, Popover, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function PopoverPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A floating panel anchored to a trigger element.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<PopoverTrigger>\n  <Button>Open Popover</Button>\n  <Popover>\n    <p>Popover content here.</p>\n  </Popover>\n</PopoverTrigger>`}>
          <PopoverTrigger>
            <Button variant="outline">Open Popover</Button>
            <Popover>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">This is the popover content. Click outside to dismiss.</p>
            </Popover>
          </PopoverTrigger>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Popover Props</h2>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "—", description: "Popover content" },
          { name: "showArrow", type: "boolean", default: "true", description: "Show arrow pointer" },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
