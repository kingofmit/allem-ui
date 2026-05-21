"use client";

import { Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "variant", type: '"solid" | "outline" | "ghost" | "link"', default: '"solid"', description: "The visual style of the button." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the button." },
  { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"', description: "The color scheme." },
  { name: "fullWidth", type: "boolean", default: "false", description: "Whether the button takes full width." },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the button is disabled." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

export default function ButtonPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Button</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A clickable button with multiple variants, sizes, and colors.
      </p>

      {/* Default */}
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Button>Click me</Button>`}>
          <Button>Click me</Button>
        </ComponentPreview>
      </div>

      {/* Variants */}
      <h2 className="mt-12 text-xl font-semibold">Variants</h2>
      <div className="mt-4">
        <ComponentPreview
          code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentPreview>
      </div>

      {/* Colors */}
      <h2 className="mt-12 text-xl font-semibold">Colors</h2>
      <div className="mt-4">
        <ComponentPreview
          code={`<Button color="primary">Primary</Button>
<Button color="neutral">Neutral</Button>
<Button color="danger">Danger</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button color="primary">Primary</Button>
            <Button color="neutral">Neutral</Button>
            <Button color="danger">Danger</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
          </div>
        </ComponentPreview>
      </div>

      {/* Sizes */}
      <h2 className="mt-12 text-xl font-semibold">Sizes</h2>
      <div className="mt-4">
        <ComponentPreview
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentPreview>
      </div>

      {/* Disabled */}
      <h2 className="mt-12 text-xl font-semibold">Disabled</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Button isDisabled>Disabled</Button>`}>
          <Button isDisabled>Disabled</Button>
        </ComponentPreview>
      </div>

      {/* Props */}
      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4">
        <PropsTable props={props} />
      </div>
    </div>
  );
}
