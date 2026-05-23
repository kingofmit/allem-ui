"use client";

import { Skeleton } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

export default function SkeletonPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Placeholder loading indicators.</p>
      <h2 className="mt-12 text-xl font-semibold">Variants</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Skeleton variant="text" />\n<Skeleton variant="circular" width={48} height={48} />\n<Skeleton variant="rounded" width="100%" height={120} />`}>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="flex items-center gap-3">
              <Skeleton variant="circular" width={48} height={48} />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </div>
            </div>
            <Skeleton variant="rounded" width="100%" height={120} />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-8 text-xl font-semibold">Skeleton Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "variant", type: '"text" | "circular" | "rectangular" | "rounded"', default: '"text"', description: "Shape variant." },
          { name: "width", type: "string | number", default: "—", description: "Width (number = pixels)." },
          { name: "height", type: "string | number", default: "—", description: "Height (number = pixels)." },
          { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        ]} />
      </div>
    </div>
  );
}
