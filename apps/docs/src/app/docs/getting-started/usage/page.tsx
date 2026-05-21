export default function UsagePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Usage</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Learn the core patterns for using Allem UI components.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Importing components</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        All components are exported from the main package:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`import { Button, Input, Card, Modal } from "@allem-ui/react";`}</pre>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Variants, sizes, and colors</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Most components follow a consistent API with three standard props:
      </p>
      <div className="mt-4 space-y-4">
        <div className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <h3 className="font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">variant</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Controls the visual style. Common values: <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">solid</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">outline</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">ghost</code>
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <h3 className="font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">size</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Controls the size. Values: <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">sm</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">md</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">lg</code>
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <h3 className="font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">color</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Controls the color. Values: <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">primary</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">neutral</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">danger</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">success</code>, <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">warning</code>
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Styling with className</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Every component accepts a <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">className</code> prop for overrides:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`<Button className="rounded-full px-8">
  Custom styled button
</Button>`}</pre>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Dark mode</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        All components include dark mode styles using Tailwind&apos;s{" "}
        <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">dark:</code>{" "}
        prefix. Add the <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">dark</code> class to
        your <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">&lt;html&gt;</code> element:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`<html class="dark">
  <!-- Components automatically adapt -->
</html>`}</pre>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Accessibility</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Allem UI is built on{" "}
        <a
          href="https://react-spectrum.adobe.com/react-aria/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 underline underline-offset-4 decoration-indigo-600/30 hover:decoration-indigo-600 dark:text-indigo-400"
        >
          React Aria
        </a>{" "}
        — every interactive component includes keyboard navigation, focus
        management, screen reader announcements, and WAI-ARIA attributes
        automatically. You don&apos;t need to add <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono dark:bg-neutral-800">aria-*</code> props
        manually.
      </p>
    </div>
  );
}
