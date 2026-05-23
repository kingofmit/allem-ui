"use client";

import { Flex, Box } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function FlexPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Flex</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A flexbox container with direction and gap props.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Flex gap="md">\n  <Box>Item 1</Box>\n  <Box>Item 2</Box>\n  <Box>Item 3</Box>\n</Flex>`}>
          <Flex gap="md">
            <Box className="rounded-lg bg-indigo-100 px-4 py-2 text-sm dark:bg-indigo-900">Item 1</Box>
            <Box className="rounded-lg bg-indigo-100 px-4 py-2 text-sm dark:bg-indigo-900">Item 2</Box>
            <Box className="rounded-lg bg-indigo-100 px-4 py-2 text-sm dark:bg-indigo-900">Item 3</Box>
          </Flex>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Flex Props</h2>
      <PropsTable
        props={[
          { name: "direction", type: '"row" | "column" | "row-reverse" | "column-reverse"', default: '"row"', description: "Flex direction" },
          { name: "align", type: '"start" | "center" | "end" | "stretch" | "baseline"', description: "Align items" },
          { name: "justify", type: '"start" | "center" | "end" | "between" | "around" | "evenly"', description: "Justify content" },
          { name: "wrap", type: "boolean", default: "false", description: "Enable flex wrap" },
          { name: "gap", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', default: '"none"', description: "Gap between items" },
          { name: "children", type: "ReactNode", description: "Content" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
