import Link from "next/link";

const features = [
  {
    title: "Accessible by Default",
    description:
      "Built on React Aria — every component ships with keyboard navigation, screen reader support, and WAI-ARIA compliance.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Tailwind CSS v4",
    description:
      "Styled with utility classes. Every component supports className overrides — customize anything without fighting the library.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Dark Mode Ready",
    description:
      "Every component includes dark mode variants. Just add the dark class to your html element and everything adapts.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    title: "TypeScript First",
    description:
      "Full type safety with exported interfaces for every component. IntelliSense works out of the box in VS Code.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "34+ Components",
    description:
      "Forms, data display, navigation, overlays, layout — everything you need to build production applications.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Lightweight & Tree-Shakable",
    description:
      "Import only what you use. ESM and CJS builds with full tree-shaking support for optimal bundle size.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-lg dark:border-neutral-800/50 dark:bg-neutral-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Allem UI
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/docs/getting-started/installation"
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                Docs
              </Link>
              <Link
                href="/docs/components/button"
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                Components
              </Link>
              <a
                href="https://github.com/kingofmit/allem-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <code className="hidden rounded-lg bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 sm:block">
              npm i @allem-ui/react
            </code>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(99,102,241,0.08),transparent)]" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:py-40">
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            v0.0.1 — Now in public preview
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build beautiful UIs{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              effortlessly
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            A modern React component library with first-class accessibility,
            Tailwind CSS v4 styling, and a refined design system. Open source and
            ready for production.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex h-11 items-center rounded-lg bg-indigo-600 px-6 text-sm font-medium text-white shadow-sm shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-600/30 active:scale-[0.97]"
            >
              Get Started
            </Link>
            <Link
              href="/docs/components/button"
              className="inline-flex h-11 items-center rounded-lg border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.97] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Browse Components
            </Link>
          </div>

          {/* Install command */}
          <div className="mx-auto mt-12 max-w-md">
            <div className="flex items-center rounded-xl bg-neutral-900 px-5 py-3.5 ring-1 ring-white/10 shadow-lg">
              <span className="mr-3 text-emerald-400">$</span>
              <code className="flex-1 text-left text-sm text-neutral-100">
                npm install @allem-ui/react
              </code>
              <button
                className="ml-2 rounded-md p-1.5 text-neutral-400 transition-colors hover:text-white"
                aria-label="Copy to clipboard"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Built for developers who care about quality, accessibility, and
              developer experience.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component preview */}
      <section className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              34+ polished components
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              From buttons to modals, forms to data tables — everything you need
              to ship production apps.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Button", "Input", "Select", "Checkbox",
              "Switch", "Slider", "Tabs", "Modal",
              "Dropdown", "Toast", "Card", "Table",
              "Avatar", "Badge", "Pagination", "Accordion",
            ].map((name) => (
              <Link
                key={name}
                href={`/docs/components/${name.toLowerCase()}`}
                className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600 dark:border-neutral-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400"
              >
                <div className="h-2 w-2 rounded-full bg-indigo-600/50" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Allem UI by <a href="https://kingallem.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 dark:hover:text-white">Ahmed Allem</a> — Open source under the MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://buymeacoffee.com/kingofmit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Buy me a coffee
            </a>
            <a
              href="https://github.com/kingofmit/allem-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
