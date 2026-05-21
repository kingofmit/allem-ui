"use client";

import { Breadcrumbs, BreadcrumbItem } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

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
    </div>
  );
}
