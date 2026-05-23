"use client";

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function ContextMenuPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A menu triggered by right-click.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<ContextMenu>\n  <div>Right-click here</div>\n  <ContextMenuContent>\n    <ContextMenuItem>Cut</ContextMenuItem>\n    <ContextMenuItem>Copy</ContextMenuItem>\n    <ContextMenuSeparator />\n    <ContextMenuItem color="danger">Delete</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>`}>
          <ContextMenu>
            <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              Right-click here
            </div>
            <ContextMenuContent>
              <ContextMenuItem onAction={() => {}}>Cut</ContextMenuItem>
              <ContextMenuItem onAction={() => {}}>Copy</ContextMenuItem>
              <ContextMenuItem onAction={() => {}}>Paste</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onAction={() => {}} color="danger">Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">ContextMenuItem Props</h2>
      <PropsTable
        props={[
          { name: "onAction", type: "() => void", default: "—", description: "Called when item is clicked" },
          { name: "color", type: '"default" | "danger"', default: '"default"', description: "Item color" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the item" },
          { name: "children", type: "ReactNode", default: "—", description: "Item content" },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-12 text-xl font-semibold">ContextMenuSeparator Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", default: "—", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
