"use client";

import { useState } from "react";
import { Pagination } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <Pagination total={10} current={page} onChange={setPage} />;
}

export default function PaginationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Page navigation for paginated content.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Pagination total={10} current={page} onChange={setPage} />`}>
          <PaginationDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Pagination Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "total", type: "number", default: "required", description: "Total number of pages" },
          { name: "current", type: "number", default: "required", description: "Current active page" },
          { name: "onChange", type: "(page: number) => void", default: "required", description: "Called when page changes" },
          { name: "siblings", type: "number", default: "1", description: "Pages shown on each side of current" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
          { name: "className", type: "string", default: "-", description: "Additional CSS classes" },
        ]} />
      </div>
    </div>
  );
}
