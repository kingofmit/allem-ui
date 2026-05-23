"use client";

import { Drawer, DrawerContent, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function DrawerPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A slide-out panel from the edge of the screen.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Drawer>\n  <Button>Open Drawer</Button>\n  <DrawerContent title="Settings" placement="right">\n    <p>Drawer content here.</p>\n  </DrawerContent>\n</Drawer>`}>
          <Drawer>
            <Button variant="outline">Open Drawer</Button>
            <DrawerContent title="Settings" placement="right">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Drawer content goes here. Click outside or press Escape to close.</p>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">DrawerContent Props</h2>
      <PropsTable
        props={[
          { name: "title", type: "string", default: "—", description: "Drawer title" },
          { name: "placement", type: '"left" | "right" | "top" | "bottom"', default: '"right"', description: "Slide-in direction" },
          { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Drawer width/height" },
          { name: "children", type: "ReactNode", default: "—", description: "Drawer body content" },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
