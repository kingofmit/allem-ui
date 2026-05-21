"use client";

import { useState } from "react";
import { Pagination } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

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
    </div>
  );
}
