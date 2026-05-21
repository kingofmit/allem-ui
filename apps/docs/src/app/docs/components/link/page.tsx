"use client";

import { Link } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function LinkPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Link</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A styled anchor link.</p>
      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Link href="#">Click here</Link>\n<Link href="#" color="neutral">Neutral link</Link>`}>
          <div className="flex items-center gap-4">
            <Link href="#">Click here</Link>
            <Link href="#" color="neutral">Neutral link</Link>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
