export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Get started with Allem UI in your React project.
      </p>

      {/* Step 1 */}
      <h2 className="mt-12 text-xl font-semibold">1. Install the package</h2>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <code className="text-sm text-neutral-100">npm install @allem-ui/react</code>
      </div>
      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
        Or use your preferred package manager:
      </p>
      <div className="mt-2 space-y-2">
        <div className="rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10">
          <code className="text-sm text-neutral-100">pnpm add @allem-ui/react</code>
        </div>
        <div className="rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10">
          <code className="text-sm text-neutral-100">yarn add @allem-ui/react</code>
        </div>
      </div>

      {/* Step 2 */}
      <h2 className="mt-12 text-xl font-semibold">2. Setup Tailwind CSS</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Allem UI uses Tailwind CSS v4 for styling. Add the{" "}
        <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">
          @source
        </code>{" "}
        directive to your main CSS file (e.g.{" "}
        <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm font-mono ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/10">
          globals.css
        </code>
        ) so Tailwind scans the component classes:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/theme";`}</pre>
      </div>
      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
        If you use standalone packages, add a{" "}
        <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">@source</code>{" "}
        line for each one:
      </p>
      <div className="mt-2 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`@source "@allem-ui/command";
@source "@allem-ui/file-upload";
@source "@allem-ui/rich-text";
@source "@allem-ui/onboarding";
@source "@allem-ui/chat";
@source "@allem-ui/data-grid";
@source "@allem-ui/kanban";
@source "@allem-ui/date-picker";
@source "@allem-ui/pricing";
@source "@allem-ui/changelog";`}</pre>
      </div>
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          <strong>Why is this needed?</strong> The{" "}
          <code className="font-mono">@source</code> directive tells Tailwind CSS v4
          to scan the package for class names. Without it, component styles like
          padding, borders, and colors won&apos;t be generated in your CSS output.
        </p>
      </div>

      {/* Step 3 */}
      <h2 className="mt-12 text-xl font-semibold">3. Add React Aria variants</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Allem UI components use React Aria data attributes for interactive
        states. Add these custom variants to your CSS:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`/* React Aria data attribute variants */
@custom-variant selected (&[data-selected]);
@custom-variant pressed (&[data-pressed]);
@custom-variant dragging (&[data-dragging]);
@custom-variant focus-visible (&[data-focus-visible]);
@custom-variant disabled (&[data-disabled]);
@custom-variant placeholder-shown (&[data-placeholder]);`}</pre>
      </div>

      {/* Step 4 */}
      <h2 className="mt-12 text-xl font-semibold">4. Add theme animations</h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Some components use custom animations. Add them to your CSS:
      </p>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`@theme {
  --animate-allem-spin: spin 0.6s linear infinite;
  --animate-allem-pulse: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-allem-fade-in: allemFadeIn 0.2s ease-out;
  --animate-allem-slide-up: allemSlideUp 0.2s ease-out;
}

@keyframes allemFadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes allemSlideUp {
  0% { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
}`}</pre>
      </div>

      {/* Step 5 */}
      <h2 className="mt-12 text-xl font-semibold">5. Start using components</h2>
      <div className="mt-4 rounded-xl bg-neutral-900 p-4 ring-1 ring-white/10 shadow-lg">
        <pre className="text-sm text-neutral-100">{`import { Button } from "@allem-ui/react";

export function App() {
  return <Button color="primary">Click me</Button>;
}`}</pre>
      </div>

      <div className="mt-12 rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950/30">
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300">
          Framework support
        </h3>
        <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-400">
          Allem UI works with Next.js, Vite, Remix, and any React framework.
          Components that use interactivity include the{" "}
          <code className="font-mono">&quot;use client&quot;</code> directive for
          React Server Components compatibility.
        </p>
      </div>
    </div>
  );
}
