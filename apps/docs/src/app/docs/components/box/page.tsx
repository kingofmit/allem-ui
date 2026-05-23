"use client";

import { Box } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function BoxPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Box</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A generic container element. Renders a div by default.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Box className="p-4 bg-indigo-50 rounded-lg">Content</Box>`}>
          <Box className="p-4 bg-indigo-50 rounded-lg text-sm dark:bg-indigo-950/50">Box content</Box>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Box Props</h2>
      <PropsTable
        props={[
          { name: "as", type: "ElementType", default: '"div"', description: "HTML element or component to render" },
          { name: "children", type: "ReactNode", description: "Content" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
