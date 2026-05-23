"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Avatar,
  Button,
  Input,
  Tabs, TabList, Tab, TabPanel,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Dropdown, DropdownMenu, DropdownItem, DropdownSeparator,
  Pagination,
  ToastProvider, useToast,
} from "@allem-ui/react";
import { DashboardShell } from "../../components/DashboardShell";

const allUsers = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "online" as const, joined: "Jan 12, 2024" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "away" as const, joined: "Feb 5, 2024" },
  { name: "Carol Davis", email: "carol@example.com", role: "Viewer", status: "offline" as const, joined: "Mar 18, 2024" },
  { name: "Dan Wilson", email: "dan@example.com", role: "Editor", status: "online" as const, joined: "Apr 2, 2024" },
  { name: "Eve Martinez", email: "eve@example.com", role: "Admin", status: "busy" as const, joined: "May 14, 2024" },
  { name: "Frank Lee", email: "frank@example.com", role: "Viewer", status: "offline" as const, joined: "Jun 8, 2024" },
  { name: "Grace Kim", email: "grace@example.com", role: "Editor", status: "online" as const, joined: "Jul 22, 2024" },
  { name: "Henry Chen", email: "henry@example.com", role: "Viewer", status: "away" as const, joined: "Aug 3, 2024" },
  { name: "Ivy Brown", email: "ivy@example.com", role: "Admin", status: "online" as const, joined: "Sep 11, 2024" },
  { name: "Jack Taylor", email: "jack@example.com", role: "Editor", status: "offline" as const, joined: "Oct 25, 2024" },
];

function UsersContent() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filtered = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );
  const admins = filtered.filter((u) => u.role === "Admin");
  const editors = filtered.filter((u) => u.role === "Editor");
  const viewers = filtered.filter((u) => u.role === "Viewer");

  const statusColor = (s: string) =>
    s === "online" ? "success" : s === "busy" ? "danger" : s === "away" ? "warning" : "neutral";

  const UserTable = ({ users }: { users: typeof allUsers }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead>{" "}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6}>
              <div className="py-8 text-center text-neutral-400">No users found</div>
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} size="sm" status={user.status} />
                  <span className="font-medium">{user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-neutral-500">{user.email}</TableCell>
              <TableCell>
                <Badge variant="subtle" color={user.role === "Admin" ? "primary" : "neutral"} size="sm">
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="subtle" color={statusColor(user.status)} size="sm">
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-neutral-500 text-sm">{user.joined}</TableCell>
              <TableCell>
                <Dropdown>
                  <Button variant="ghost" size="sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="3" r="1.5" fill="currentColor" />
                      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                      <circle cx="8" cy="13" r="1.5" fill="currentColor" />
                    </svg>
                  </Button>
                  <DropdownMenu>
                    <DropdownItem id="edit" onAction={() => toast({ title: "Edit", description: `Editing ${user.name}` })}>
                      Edit user
                    </DropdownItem>
                    <DropdownItem id="role" onAction={() => toast({ title: "Role", description: `Change role for ${user.name}` })}>
                      Change role
                    </DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem id="remove" color="danger" onAction={() => toast({ title: "Removed", description: `${user.name} has been removed` })}>
                      Remove user
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  return (
    <DashboardShell
      active="/users"
      title="Users"
      headerRight={
        <Button
          variant="solid"
          size="sm"
          onPress={() => toast({ title: "Invite sent!", description: "An invitation email has been sent." })}
        >
          Invite User
        </Button>
      }
    >
      {/* Stats row */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Total Users", value: allUsers.length.toString(), icon: "👥" },
          { label: "Admins", value: admins.length.toString(), icon: "🛡️" },
          { label: "Online Now", value: allUsers.filter((u) => u.status === "online").length.toString(), icon: "🟢" },
          { label: "New This Month", value: "3", icon: "✨" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Search + Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold">Team Members</span>
            <div className="w-64">
              <Input
                placeholder="Search users..."
                value={search}
                onChange={(v) => setSearch(v)}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Tabs>
            <TabList>
              <Tab id="all">All ({filtered.length})</Tab>
              <Tab id="admins">Admins ({admins.length})</Tab>
              <Tab id="editors">Editors ({editors.length})</Tab>
              <Tab id="viewers">Viewers ({viewers.length})</Tab>
            </TabList>
            <TabPanel id="all" className="p-0">
              <UserTable users={filtered} />
            </TabPanel>
            <TabPanel id="admins" className="p-0">
              <UserTable users={admins} />
            </TabPanel>
            <TabPanel id="editors" className="p-0">
              <UserTable users={editors} />
            </TabPanel>
            <TabPanel id="viewers" className="p-0">
              <UserTable users={viewers} />
            </TabPanel>
          </Tabs>
        </CardBody>
      </Card>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination total={3} current={page} onChange={setPage} />
      </div>
    </DashboardShell>
  );
}

export default function UsersPage() {
  return (
    <ToastProvider>
      <UsersContent />
    </ToastProvider>
  );
}
