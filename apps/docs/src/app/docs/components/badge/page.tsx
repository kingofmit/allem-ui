"use client";

import { Badge } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "variant", type: '"solid" | "outline" | "subtle"', default: '"subtle"', description: "The visual style." },
  { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"', description: "The color scheme." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
];

export default function BadgePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A small label for status, categories, or counts.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Variants</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Badge variant="subtle">Subtle</Badge>\n<Badge variant="solid">Solid</Badge>\n<Badge variant="outline">Outline</Badge>`}>
          <div className="flex items-center gap-3">
            <Badge variant="subtle">Subtle</Badge>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Colors</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Badge color="primary">Primary</Badge>\n<Badge color="success">Success</Badge>\n<Badge color="danger">Danger</Badge>\n<Badge color="warning">Warning</Badge>\n<Badge color="neutral">Neutral</Badge>`}>
          <div className="flex flex-wrap items-center gap-3">
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="neutral">Neutral</Badge>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
