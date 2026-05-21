"use client";

import { Container } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function ContainerPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Container</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A centered, max-width container for page layout.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Container size="md">Content here</Container>`}>
          <Container size="md" className="rounded-lg bg-indigo-50 p-4 text-sm dark:bg-indigo-950/50">Centered container with max-width</Container>
        </ComponentPreview>
      </div>
    </div>
  );
}
