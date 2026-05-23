"use client";

import { Accordion, AccordionItem } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function AccordionPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Collapsible content sections.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Accordion>\n  <AccordionItem title="What is Allem UI?">\n    A modern React component library.\n  </AccordionItem>\n  <AccordionItem title="Is it accessible?">\n    Yes, built on React Aria.\n  </AccordionItem>\n</Accordion>`}>
          <Accordion className="w-full max-w-md">
            <AccordionItem title="What is Allem UI?">A modern, accessible React component library built with Tailwind CSS.</AccordionItem>
            <AccordionItem title="Is it accessible?">Yes — every component is built on React Aria with full keyboard and screen reader support.</AccordionItem>
            <AccordionItem title="Can I customize it?">Absolutely. Every component accepts a className prop for Tailwind overrides.</AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Accordion Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-12 text-xl font-semibold">AccordionItem Props</h2>
      <PropsTable
        props={[
          { name: "title", type: "string", required: true, description: "Item heading text" },
          { name: "children", type: "ReactNode", required: true, description: "Content shown when expanded" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
