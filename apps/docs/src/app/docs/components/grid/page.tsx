"use client";

import { Grid, Box } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function GridPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Grid</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A CSS grid container with columns and gap props.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Grid columns={3} gap="md">\n  <Box>1</Box>\n  <Box>2</Box>\n  <Box>3</Box>\n</Grid>`}>
          <Grid columns={3} gap="md" className="w-full">
            {[1,2,3,4,5,6].map(n => (
              <Box key={n} className="rounded-lg bg-indigo-100 px-4 py-3 text-center text-sm dark:bg-indigo-900">{n}</Box>
            ))}
          </Grid>
        </ComponentPreview>
      </div>
    </div>
  );
}
