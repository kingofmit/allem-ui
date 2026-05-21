"use client";

import { Heading } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function HeadingPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Heading</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Semantic heading elements with consistent typography.</p>
      <h2 className="mt-12 text-xl font-semibold">Levels</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Heading as="h1" size="2xl">Heading 1</Heading>\n<Heading as="h2" size="xl">Heading 2</Heading>\n<Heading as="h3" size="lg">Heading 3</Heading>`}>
          <div className="space-y-4">
            <Heading as="h1" size="2xl">Heading 1</Heading>
            <Heading as="h2" size="xl">Heading 2</Heading>
            <Heading as="h3" size="lg">Heading 3</Heading>
            <Heading as="h4" size="md">Heading 4</Heading>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
