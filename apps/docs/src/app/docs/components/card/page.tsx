"use client";

import { Card, CardHeader, CardBody, CardFooter, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "variant", type: '"outline" | "filled" | "elevated"', default: '"outline"', description: "The visual style." },
];

export default function CardPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Card</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A container for grouping related content with optional header and footer.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Card>\n  <CardHeader>Title</CardHeader>\n  <CardBody>Content goes here.</CardBody>\n  <CardFooter>\n    <Button size="sm">Action</Button>\n  </CardFooter>\n</Card>`}>
          <Card className="w-full max-w-sm">
            <CardHeader><span className="font-semibold">Card Title</span></CardHeader>
            <CardBody><p className="text-sm text-neutral-600 dark:text-neutral-400">This is the card content. You can put anything here.</p></CardBody>
            <CardFooter><Button size="sm">Action</Button></CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Variants</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Card variant="outline">Outline</Card>\n<Card variant="filled">Filled</Card>\n<Card variant="elevated">Elevated</Card>`}>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Card variant="outline"><CardBody><span className="text-sm font-medium">Outline</span></CardBody></Card>
            <Card variant="filled"><CardBody><span className="text-sm font-medium">Filled</span></CardBody></Card>
            <Card variant="elevated"><CardBody><span className="text-sm font-medium">Elevated</span></CardBody></Card>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>

      <h2 className="mt-8 text-xl font-semibold">CardHeader Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "children", type: "ReactNode", default: "—", description: "Header content." },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        ]} />
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Accepts all standard HTML div attributes.</p>
      </div>

      <h2 className="mt-8 text-xl font-semibold">CardBody Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "children", type: "ReactNode", default: "—", description: "Body content." },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        ]} />
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Accepts all standard HTML div attributes.</p>
      </div>

      <h2 className="mt-8 text-xl font-semibold">CardFooter Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "children", type: "ReactNode", default: "—", description: "Footer content." },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        ]} />
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Accepts all standard HTML div attributes.</p>
      </div>
    </div>
  );
}
