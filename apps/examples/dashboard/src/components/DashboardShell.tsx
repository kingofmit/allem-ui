"use client";

import { useState, useEffect } from "react";
import { Avatar } from "@allem-ui/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Analytics", href: "/analytics" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Users", href: "/users" },
  { label: "Chat", href: "/chat" },
  { label: "Calendar", href: "/calendar" },
  { label: "Rich Text Editor", href: "/rich-text" },
  { label: "File Upload", href: "/file-upload" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "Settings", href: "/settings" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function DashboardShell({
  active,
  title,
  headerRight,
  children,
}: {
  active: string;
  title: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 lg:block">
        <a href="/" className="text-xl font-bold tracking-tight no-underline text-neutral-900 dark:text-white">
          Dashboard
        </a>
        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors cursor-pointer no-underline ${
                item.href === active
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
                  : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center gap-3">
            {headerRight}
            <ThemeToggle />
            <Avatar name="Ahmed Allem" status="online" />
          </div>
        </header>

        <div className="p-6 space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
