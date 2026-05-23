import Link from "next/link";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Usage", href: "/docs/getting-started/usage" },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Radio", href: "/docs/components/radio" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Slider", href: "/docs/components/slider" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Table", href: "/docs/components/table" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Toast", href: "/docs/components/toast" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Breadcrumbs", href: "/docs/components/breadcrumbs" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Link", href: "/docs/components/link" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown", href: "/docs/components/dropdown" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Context Menu", href: "/docs/components/context-menu" },
    ],
  },
  {
    title: "Disclosure",
    items: [{ title: "Accordion", href: "/docs/components/accordion" }],
  },
  {
    title: "Typography",
    items: [
      { title: "Heading", href: "/docs/components/heading" },
      { title: "Text", href: "/docs/components/text" },
      { title: "Code", href: "/docs/components/code" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Box", href: "/docs/components/box" },
      { title: "Flex", href: "/docs/components/flex" },
      { title: "Grid", href: "/docs/components/grid" },
      { title: "Container", href: "/docs/components/container" },
      { title: "Divider", href: "/docs/components/divider" },
    ],
  },
  {
    title: "Packages",
    items: [
      { title: "Date Picker", href: "/docs/packages/date-picker" },
      { title: "Data Grid", href: "/docs/packages/data-grid" },
      { title: "Chat", href: "/docs/packages/chat" },
      { title: "Kanban", href: "/docs/packages/kanban" },
      { title: "Pricing", href: "/docs/packages/pricing" },
      { title: "Changelog", href: "/docs/packages/changelog" },
      { title: "Command", href: "/docs/packages/command" },
      { title: "File Upload", href: "/docs/packages/file-upload" },
      { title: "Onboarding", href: "/docs/packages/onboarding" },
      { title: "Rich Text", href: "/docs/packages/rich-text" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-lg dark:border-neutral-800/50 dark:bg-neutral-950/80">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Allem UI
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/docs/getting-started/installation"
                className="text-sm font-medium text-neutral-900 dark:text-white"
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
        </div>
      </nav>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
            <nav className="flex flex-col gap-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 px-8 py-12 lg:px-16">{children}</main>
      </div>
    </div>
  );
}
