"use client";

import { useState } from "react";
import {
  Button,
  Card, CardHeader, CardBody,
  Input,
  Badge,
  Avatar,
  Tabs, TabList, Tab, TabPanel,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Dropdown, DropdownMenu, DropdownItem, DropdownSeparator,
  Pagination,
  Spinner,
  Switch,
  ToastProvider, useToast,
} from "@allem-ui/react";

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

function DashboardContent() {
  const [page, setPage] = useState(1);
  const { toast } = useToast();

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 lg:block">
        <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        <nav className="mt-8 flex flex-col gap-1">
          {["Overview", "Analytics", "Users", "Settings"].map((item, i) => (
            <button
              key={item}
              type="button"
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors cursor-pointer ${
                i === 0
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
                  : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80">
          <Input placeholder="Search..." aria-label="Search" className="w-64" />
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onPress={() => toast({ title: "Exported!", description: "Report has been exported." })}
            >
              Export
            </Button>
            <Avatar name="Ahmed Allem" status="online" />
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <Card>
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

          {/* Settings preview */}
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
