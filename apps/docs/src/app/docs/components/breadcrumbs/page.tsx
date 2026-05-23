"use client";

import { Breadcrumbs, BreadcrumbItem } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function BreadcrumbsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Breadcrumbs</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Navigation breadcrumb trail.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Breadcrumbs>\n  <BreadcrumbItem href="/">Home</BreadcrumbItem>\n  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>\n  <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>\n</Breadcrumbs>`}>
          <Breadcrumbs>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
          </Breadcrumbs>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Breadcrumbs Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "separator", type: "ReactNode", default: "-", description: "Custom separator between items" },
          { name: "className", type: "string", default: "-", description: "Additional CSS classes" },
        ]} />
      </div>

      <h2 className="mt-12 text-xl font-semibold">BreadcrumbItem Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "href", type: "string", default: "-", description: "URL for the breadcrumb link" },
          { name: "children", type: "ReactNode", default: "required", description: "Breadcrumb content" },
          { name: "className", type: "string", default: "-", description: "Additional CSS classes" },
        ]} />
      </div>
    </div>
  );
}
