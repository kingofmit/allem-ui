"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  useCommandPalette,
} from "@allem-ui/command";

const items = [
  { label: "Home", group: "Pages", shortcut: "⌘H" },
  { label: "Settings", group: "Pages", shortcut: "⌘," },
  { label: "Profile", group: "Pages" },
  { label: "Create project", group: "Actions", shortcut: "⌘N" },
  { label: "Invite team member", group: "Actions" },
  { label: "Toggle dark mode", group: "Actions", shortcut: "⌘D" },
];

function CommandDemo() {
  const { isOpen, setIsOpen } = useCommandPalette();
  const [search, setSearch] = useState("");

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

  const pages = filtered.filter((i) => i.group === "Pages");
  const actions = filtered.filter((i) => i.group === "Actions");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400">
          <path d="M11 11L14 14M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Search commands...
        <kbd className="ml-4 rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-[11px] font-medium text-neutral-400">⌘K</kbd>
      </button>

      <CommandPalette open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput value={search} onValueChange={setSearch} />
        <CommandList>
          {filtered.length === 0 ? (
            <CommandEmpty>No results for &ldquo;{search}&rdquo;</CommandEmpty>
          ) : (
            <>
              {pages.length > 0 && (
                <CommandGroup heading="Pages">
                  {pages.map((item) => (
                    <CommandItem
                      key={item.label}
                      onSelect={() => { setIsOpen(false); }}
                      shortcut={item.shortcut}
                    >
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {actions.length > 0 && (
                <CommandGroup heading="Actions">
                  {actions.map((item) => (
                    <CommandItem
                      key={item.label}
                      onSelect={() => { setIsOpen(false); }}
                      shortcut={item.shortcut}
                    >
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandPalette>
    </>
  );
}

function SimpleDemo() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands = ["New file", "Open project", "Save all", "Toggle terminal"];
  const filtered = commands.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        Quick actions...
      </button>

      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandInput value={search} onValueChange={setSearch} placeholder="Search actions..." />
        <CommandList>
          {filtered.length === 0 ? (
            <CommandEmpty />
          ) : (
            filtered.map((cmd) => (
              <CommandItem key={cmd} onSelect={() => setOpen(false)}>
                {cmd}
              </CommandItem>
            ))
          )}
        </CommandList>
      </CommandPalette>
    </>
  );
}

export default function CommandPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Command Palette</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/command</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Spotlight-style command palette with keyboard navigation, grouped results, and shortcut badges. Opens with ⌘K.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code="npm install @allem-ui/command">
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/command</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Basic Usage</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">A flat list of commands without groups. Click the button to open.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { CommandPalette, CommandInput, CommandList, CommandItem, CommandEmpty } from "@allem-ui/command";\n\nconst [open, setOpen] = useState(false);\nconst [search, setSearch] = useState("");\n\n<CommandPalette open={open} onOpenChange={setOpen}>\n  <CommandInput value={search} onValueChange={setSearch} placeholder="Search actions..." />\n  <CommandList>\n    <CommandItem onSelect={() => setOpen(false)}>New file</CommandItem>\n    <CommandItem onSelect={() => setOpen(false)}>Open project</CommandItem>\n    <CommandEmpty />\n  </CommandList>\n</CommandPalette>`}>
          <SimpleDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Grouped with Shortcuts</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Click the button or press ⌘K to open. Items are organized into groups with keyboard shortcut badges.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty, useCommandPalette } from "@allem-ui/command";\n\nconst { isOpen, setIsOpen } = useCommandPalette();\nconst [search, setSearch] = useState("");\n\n<CommandPalette open={isOpen} onOpenChange={setIsOpen}>\n  <CommandInput value={search} onValueChange={setSearch} />\n  <CommandList>\n    <CommandGroup heading="Pages">\n      <CommandItem onSelect={() => {}} shortcut="⌘H">Home</CommandItem>\n      <CommandItem onSelect={() => {}} shortcut="⌘,">Settings</CommandItem>\n    </CommandGroup>\n    <CommandGroup heading="Actions">\n      <CommandItem onSelect={() => {}} shortcut="⌘N">Create project</CommandItem>\n    </CommandGroup>\n    <CommandEmpty>No results found.</CommandEmpty>\n  </CommandList>\n</CommandPalette>`}>
          <CommandDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Built-in Behavior</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Keyboard navigation</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">↑↓ to navigate items, ↵ to select, Esc to close. Wraps around at edges.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Shortcuts footer</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Built-in footer showing navigation hints (↑↓ navigate, ↵ select, esc close).</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Backdrop dismiss</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Clicking outside the palette closes it automatically.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Scroll lock</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Body scroll is locked while the palette is open.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Auto-focus</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Input is automatically focused when the palette opens.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Clear button</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">An × button appears in the input when it has a value.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Auto-scroll</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Active item scrolls into view during keyboard navigation.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Animations</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Fade-in and slide-up entrance animations.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Accessibility</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Full ARIA support — role="dialog", aria-modal, aria-selected on items, role="listbox".</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-xl font-semibold">CommandPalette Props</h2>
      <PropsTable
        props={[
          { name: "open", type: "boolean", required: true, description: "Whether the palette is open" },
          { name: "onOpenChange", type: "(open: boolean) => void", required: true, description: "Callback when open state changes" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", required: true, description: "CommandInput, CommandList, etc." },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CommandInput Props</h2>
      <PropsTable
        props={[
          { name: "value", type: "string", required: true, description: "Current input value" },
          { name: "onValueChange", type: "(value: string) => void", required: true, description: "Callback when input changes" },
          { name: "placeholder", type: "string", default: '"Type a command or search..."', description: "Input placeholder text" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CommandItem Props</h2>
      <PropsTable
        props={[
          { name: "onSelect", type: "() => void", required: true, description: "Called when item is selected" },
          { name: "icon", type: "ReactNode", description: "Icon on the left" },
          { name: "shortcut", type: "string", description: "Keyboard shortcut badge" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the item" },
          { name: "active", type: "boolean", default: "false", description: "Whether the item is currently active" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CommandGroup Props</h2>
      <PropsTable
        props={[
          { name: "heading", type: "string", required: true, description: "Group heading text" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", required: true, description: "CommandItem elements" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CommandList Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", required: true, description: "CommandGroup, CommandItem, or CommandEmpty elements" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CommandEmpty Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", default: '"No results found."', description: "Custom empty state message" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">useCommandPalette</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Hook that manages open state and registers a global ⌘K (Ctrl+K) keyboard shortcut.
      </p>
      <PropsTable
        props={[
          { name: "shortcut", type: "string", default: '"k"', description: "Key to combine with ⌘/Ctrl to toggle" },
        ]}
      />
      <h3 className="mt-6 text-lg font-medium">Return Value</h3>
      <PropsTable
        props={[
          { name: "isOpen", type: "boolean", description: "Current open state" },
          { name: "open", type: "() => void", description: "Open the palette" },
          { name: "close", type: "() => void", description: "Close the palette" },
          { name: "toggle", type: "() => void", description: "Toggle the palette" },
          { name: "setIsOpen", type: "(value: boolean) => void", description: "Set open state directly" },
        ]}
      />
    </div>
  );
}
