"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Card, CardHeader, CardBody,
  Badge,
  Avatar,
  Tabs, TabList, Tab, TabPanel,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Dropdown, DropdownMenu, DropdownItem, DropdownSeparator,
  Pagination,
  Switch,
  ToastProvider, useToast,
} from "@allem-ui/react";
import {
  CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty,
  useCommandPalette,
} from "@allem-ui/command";
import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";
import { OnboardingWizard, OnboardingStep, OnboardingProgress, useOnboarding, SpotlightTour, useTour } from "@allem-ui/onboarding";
import { RichTextEditor } from "@allem-ui/rich-text";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
  { label: "Subscriptions", value: "2,350", change: "+180", up: true },
  { label: "Active Users", value: "12,234", change: "+19%", up: true },
  { label: "Bounce Rate", value: "21.3%", change: "-4.3%", up: false },
];

const users = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "online" as const },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "away" as const },
  { name: "Carol Davis", email: "carol@example.com", role: "Viewer", status: "offline" as const },
  { name: "Dan Wilson", email: "dan@example.com", role: "Editor", status: "online" as const },
  { name: "Eve Martinez", email: "eve@example.com", role: "Admin", status: "busy" as const },
];

const commands = [
  { label: "Home", group: "Pages", shortcut: "⌘H" },
  { label: "Analytics", group: "Pages", shortcut: "⌘A" },
  { label: "Users", group: "Pages", shortcut: "⌘U" },
  { label: "Settings", group: "Pages", shortcut: "⌘," },
  { label: "Create project", group: "Actions", shortcut: "⌘N" },
  { label: "Export report", group: "Actions", shortcut: "⌘E" },
  { label: "Toggle dark mode", group: "Actions", shortcut: "⌘D" },
  { label: "Invite member", group: "Actions" },
];

function DashboardContent() {
  const [page, setPage] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { toast } = useToast();

  // Command Palette
  const { isOpen, setIsOpen } = useCommandPalette();
  const [search, setSearch] = useState("");
  const filtered = commands.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );
  const pages = filtered.filter((i) => i.group === "Pages");
  const actions = filtered.filter((i) => i.group === "Actions");

  // File Upload
  const { files, addFiles, removeFile } = useFileUpload({
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    accept: ["image/*", ".pdf", ".docx"],
  });

  // Onboarding
  const onboarding = useOnboarding({
    totalSteps: 3,
    onComplete: () => {
      setShowOnboarding(false);
      toast({ title: "Onboarding complete!", description: "You're all set." });
    },
    onSkip: () => setShowOnboarding(false),
  });

  // Spotlight Tour
  const tour = useTour({
    steps: [
      { target: "[data-tour='stats']", title: "Key Metrics", content: "Track your revenue, subscriptions, active users, and bounce rate at a glance.", placement: "bottom" },
      { target: "[data-tour='team']", title: "Team Members", content: "View and manage your team. Filter by role, export data, or add new members.", placement: "top" },
      { target: "[data-tour='editor']", title: "Rich Text Editor", content: "Write notes with full formatting — bold, italic, headings, lists, and more.", placement: "top" },
    ],
    onComplete: () => toast({ title: "Tour complete!", description: "You've seen the key features." }),
    onSkip: () => toast({ title: "Tour skipped" }),
  });

  return (
    <div className="min-h-screen">
      {/* Command Palette */}
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
                    <CommandItem key={item.label} onSelect={() => { setIsOpen(false); toast({ title: item.label, description: `Navigating to ${item.label}` }); }} shortcut={item.shortcut}>
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {actions.length > 0 && (
                <CommandGroup heading="Actions">
                  {actions.map((item) => (
                    <CommandItem key={item.label} onSelect={() => { setIsOpen(false); toast({ title: item.label, description: `Running ${item.label}` }); }} shortcut={item.shortcut}>
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandPalette>

      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg mx-4">
            <OnboardingWizard {...onboarding} onNext={onboarding.next} onPrev={onboarding.prev} onSkip={onboarding.skip} progressVariant="dots">
              <OnboardingStep title="Welcome to Dashboard" description="Let's get you set up in just a few steps.">
                <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-3xl">
                  👋
                </div>
              </OnboardingStep>
              <OnboardingStep title="Customize Your View" description="Pick your preferences and make the dashboard yours.">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-3xl">
                  ⚙️
                </div>
              </OnboardingStep>
              <OnboardingStep title="You're Ready!" description="Start exploring your analytics dashboard.">
                <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-3xl">
                  🚀
                </div>
              </OnboardingStep>
            </OnboardingWizard>
            <OnboardingProgress currentStep={onboarding.currentStep} totalSteps={onboarding.totalSteps} variant="bar" className="mt-4" />
          </div>
        </div>
      )}

      {/* Spotlight Tour */}
      <SpotlightTour
        isActive={tour.isActive}
        step={tour.step}
        targetRect={tour.targetRect}
        currentStep={tour.currentStep}
        totalSteps={tour.totalSteps}
        isFirst={tour.isFirst}
        isLast={tour.isLast}
        onNext={tour.next}
        onPrev={tour.prev}
        onSkip={tour.skip}
      />

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 lg:block">
        <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        <nav className="mt-8 flex flex-col gap-1">
          {[
            { label: "Overview", href: "/" },
            { label: "Rich Text Editor", href: "/rich-text" },
            { label: "File Upload", href: "/file-upload" },
            { label: "Analytics", href: "/analytics" },
            { label: "Users", href: "/users" },
            { label: "Settings", href: "/settings" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors cursor-pointer no-underline ${
                i === 0
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
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer w-64"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400">
              <path d="M11 11L14 14M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Search...
            <kbd className="ml-auto rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-[11px] font-medium text-neutral-400">⌘K</kbd>
          </button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onPress={() => tour.start()}
            >
              Tour
            </Button>
            <Button
              variant="outline"
              size="sm"
              onPress={() => { setShowOnboarding(true); onboarding.reset(); }}
            >
              Wizard
            </Button>
            <Button
              variant="outline"
              size="sm"
              onPress={() => toast({ title: "Exported!", description: "Report has been exported." })}
            >
              Export
            </Button>
            {mounted ? (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            ) : (
              <div className="w-9 h-9" />
            )}
            <Avatar name="Ahmed Allem" status="online" />
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div data-tour="stats" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardBody>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                    <Badge color={stat.up ? "success" : "danger"} size="sm">
                      {stat.change}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Tabs + Table */}
          <Card data-tour="team">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Team Members</span>
                <Dropdown>
                  <Button variant="outline" size="sm">Actions</Button>
                  <DropdownMenu>
                    <DropdownItem id="add" onAction={() => toast({ title: "Coming soon", description: "Add member feature." })}>Add member</DropdownItem>
                    <DropdownItem id="export">Export CSV</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem id="remove" color="danger">Remove all</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <Tabs>
                <TabList>
                  <Tab id="all">All</Tab>
                  <Tab id="admins">Admins</Tab>
                  <Tab id="editors">Editors</Tab>
                </TabList>
                <TabPanel id="all" className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.email}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar name={user.name} size="sm" status={user.status} />
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="subtle" color={user.role === "Admin" ? "primary" : "neutral"}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="subtle"
                              color={user.status === "online" ? "success" : user.status === "busy" ? "danger" : "neutral"}
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabPanel>
                <TabPanel id="admins" className="p-4">
                  <p className="text-sm text-neutral-500">Showing admin users only.</p>
                </TabPanel>
                <TabPanel id="editors" className="p-4">
                  <p className="text-sm text-neutral-500">Showing editor users only.</p>
                </TabPanel>
              </Tabs>
            </CardBody>
          </Card>

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination total={5} current={page} onChange={setPage} />
          </div>

          {/* Rich Text + File Upload row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Rich Text Editor */}
            <Card data-tour="editor">
              <CardHeader><span className="font-semibold">Notes</span></CardHeader>
              <CardBody>
                <RichTextEditor
                  initialValue="<p>Write your meeting notes, project updates, or any rich content here.</p>"
                  onChange={() => {}}
                  placeholder="Start writing..."
                  minHeight={180}
                  maxHeight={300}
                />
              </CardBody>
            </Card>

            {/* File Upload */}
            <Card>
              <CardHeader><span className="font-semibold">Attachments</span></CardHeader>
              <CardBody className="space-y-4">
                <FileUpload
                  onFilesSelected={addFiles}
                  accept="image/*,.pdf,.docx"
                  multiple
                />
                <FileUploadList files={files} onRemove={removeFile} />
              </CardBody>
            </Card>
          </div>

          {/* Settings */}
          <Card>
            <CardHeader><span className="font-semibold">Settings</span></CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Switch defaultSelected>Email notifications</Switch>
                <Switch>SMS notifications</Switch>
                <Switch defaultSelected>Marketing emails</Switch>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ToastProvider>
      <DashboardContent />
    </ToastProvider>
  );
}
