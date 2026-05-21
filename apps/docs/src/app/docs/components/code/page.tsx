"use client";

import { Code } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function CodePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Code</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Inline and block code display.</p>
      <h2 className="mt-12 text-xl font-semibold">Inline</h2>
      <div className="mt-4">
        <ComponentPreview code={`<p>Run <Code>npm install</Code> to get started.</p>`}>
          <p className="text-sm">Run <Code>npm install @allem-ui/react</Code> to get started.</p>
        </ComponentPreview>
      </div>
      <h2 className="mt-12 text-xl font-semibold">Block</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Code variant="block">{\`const x = 42;\nconsole.log(x);\`}</Code>`}>
          <Code variant="block" className="w-full">{`import { Button } from "@allem-ui/react";

export function App() {
  return <Button>Hello</Button>;
}`}</Code>
        </ComponentPreview>
      </div>
    </div>
  );
}
