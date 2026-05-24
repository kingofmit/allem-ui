"use client";

import { useState } from "react";
import {
  Card, CardBody,
  Badge,
  Button,
  Input,
  Textarea,
  Breadcrumbs, BreadcrumbItem,
  Drawer, DrawerContent,
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator,
  ToastProvider, useToast,
} from "@allem-ui/react";
import {
  KanbanBoard,
  KanbanColumn,
  KanbanCard,
  KanbanHeader,
  KanbanAddCard,
  type KanbanColumnData,
} from "@allem-ui/kanban";
import { DatePicker } from "@allem-ui/date-picker";
import { DashboardShell } from "../../components/DashboardShell";

const initialColumns: KanbanColumnData[] = [
  {
    id: "backlog",
    title: "Backlog",
    color: "#94a3b8",
    items: [
      { id: "t1", title: "Design system tokens", description: "Define spacing, color, and typography tokens", labels: [{ text: "design", color: "#8b5cf6" }], assignee: "Alice" },
      { id: "t2", title: "API rate limiting", description: "Implement rate limiting middleware", labels: [{ text: "backend", color: "#f59e0b" }], assignee: "Dan", dueDate: "Jun 2" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#3b82f6",
    items: [
      { id: "t3", title: "User dashboard redesign", description: "Redesign the main dashboard with new metrics", labels: [{ text: "feature", color: "#10b981" }], assignee: "Carol", dueDate: "May 30" },
      { id: "t4", title: "Fix login redirect loop", description: "Users get stuck in a redirect loop on expired sessions", labels: [{ text: "bug", color: "#ef4444" }], assignee: "Bob" },
      { id: "t5", title: "Add export to CSV", description: "Allow exporting data grid to CSV format", labels: [{ text: "feature", color: "#10b981" }], assignee: "Eve" },
    ],
  },
  {
    id: "review",
    title: "In Review",
    color: "#f59e0b",
    items: [
      { id: "t6", title: "Dark mode improvements", description: "Fix contrast issues in dark mode", labels: [{ text: "design", color: "#8b5cf6" }], assignee: "Alice", dueDate: "May 28" },
      { id: "t7", title: "Onboarding wizard", description: "Multi-step onboarding flow for new users", labels: [{ text: "feature", color: "#10b981" }], assignee: "Grace" },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    items: [
      { id: "t8", title: "Set up CI/CD pipeline", labels: [{ text: "infra", color: "#06b6d4" }], assignee: "Dan" },
      { id: "t9", title: "Implement file upload", labels: [{ text: "feature", color: "#10b981" }], assignee: "Bob" },
    ],
  },
];

function ProjectsContent() {
  const { toast } = useToast();
  const [columns, setColumns] = useState(initialColumns);
  const [selectedTask, setSelectedTask] = useState<{ columnId: string; taskId: string } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editDescription, setEditDescription] = useState("");

  const selectedItem = selectedTask
    ? columns.find((c) => c.id === selectedTask.columnId)?.items.find((i) => i.id === selectedTask.taskId)
    : null;

  const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => {
    setColumns((prev) => {
      const next = prev.map((col) => ({ ...col, items: [...col.items] }));
      const fromCol = next.find((c) => c.id === fromColumnId);
      const toCol = next.find((c) => c.id === toColumnId);
      if (!fromCol || !toCol) return prev;

      const cardIndex = fromCol.items.findIndex((i) => i.id === cardId);
      if (cardIndex === -1) return prev;

      const [card] = fromCol.items.splice(cardIndex, 1);
      toCol.items.splice(newIndex, 0, card);
      return next;
    });
    toast({ title: "Card moved", description: `Moved to ${columns.find((c) => c.id === toColumnId)?.title}` });
  };

  const handleAddCard = (columnId: string, title: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, items: [...col.items, { id: `new-${Date.now()}`, title, assignee: "You" }] }
          : col
      )
    );
  };

  const handleDelete = (columnId: string, taskId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, items: col.items.filter((i) => i.id !== taskId) }
          : col
      )
    );
    toast({ title: "Task deleted" });
  };

  const openDrawer = (columnId: string, taskId: string) => {
    const item = columns.find((c) => c.id === columnId)?.items.find((i) => i.id === taskId);
    setSelectedTask({ columnId, taskId });
    setEditDescription(item?.description || "");
    setDrawerOpen(true);
  };

  return (
    <DashboardShell
      active="/projects"
      title="Projects"
      headerRight={
        <>
          <Breadcrumbs>
            <BreadcrumbItem href="#">All Projects</BreadcrumbItem>
            <BreadcrumbItem>Sprint 12</BreadcrumbItem>
          </Breadcrumbs>
          <Button
            variant="solid"
            size="sm"
            onPress={() => toast({ title: "Sprint created", description: "Sprint 13 has been created." })}
          >
            New Sprint
          </Button>
        </>
      }
    >
      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        {columns.map((col) => (
          <Badge key={col.id} variant="subtle" color="neutral" size="sm">
            {col.title}: {col.items.length}
          </Badge>
        ))}
        <Badge variant="subtle" color="primary" size="sm">
          Total: {columns.reduce((sum, col) => sum + col.items.length, 0)}
        </Badge>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto -mx-6 px-6 pb-4">
        <KanbanBoard columns={columns} onCardMove={handleCardMove}>
          {columns.map((col) => (
            <KanbanColumn
              key={col.id}
              id={col.id}
              title={col.title}
              count={col.items.length}
              color={col.color}
              onDrop={(cardId, targetColumnId, index) => handleCardMove(cardId, col.id, targetColumnId, index)}
            >
              <KanbanHeader title={col.title} count={col.items.length} color={col.color} />
              {col.items.map((item) => (
                <ContextMenu key={item.id}>
                  <div onClick={() => openDrawer(col.id, item.id)} className="cursor-pointer">
                    <KanbanCard
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      labels={item.labels}
                      assignee={item.assignee}
                      dueDate={item.dueDate}
                    />
                  </div>
                  <ContextMenuContent>
                    <ContextMenuItem onAction={() => openDrawer(col.id, item.id)}>Edit task</ContextMenuItem>
                    <ContextMenuItem onAction={() => toast({ title: "Copied", description: `Link to "${item.title}" copied.` })}>Copy link</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem color="danger" onAction={() => handleDelete(col.id, item.id)}>Delete task</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
              <KanbanAddCard onAdd={(title) => handleAddCard(col.id, title)} />
            </KanbanColumn>
          ))}
        </KanbanBoard>
      </div>

      {/* Task Detail Drawer */}
      <Drawer isOpen={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent title={selectedItem?.title || "Task Details"} placement="right" size="md">
          {selectedItem && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Status</label>
                <Badge variant="subtle" color="primary">
                  {columns.find((c) => c.id === selectedTask?.columnId)?.title}
                </Badge>
              </div>

              {selectedItem.assignee && (
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Assignee</label>
                  <span className="text-sm">{selectedItem.assignee}</span>
                </div>
              )}

              {selectedItem.labels && selectedItem.labels.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Labels</label>
                  <div className="flex gap-2">
                    {selectedItem.labels.map((label) => (
                      <span
                        key={label.text}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                        style={{ backgroundColor: label.color }}
                      >
                        {label.text}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Due Date</label>
                <DatePicker label="" className="w-full" />
              </div>

              <Textarea
                label="Description"
                value={editDescription}
                onChange={setEditDescription}
                placeholder="Add a description..."
                rows={4}
              />

              <div className="flex gap-2 pt-2">
                <Button
                  variant="solid"
                  size="sm"
                  onPress={() => {
                    setDrawerOpen(false);
                    toast({ title: "Task updated", description: `"${selectedItem.title}" saved.` });
                  }}
                >
                  Save
                </Button>
                <Button variant="outline" size="sm" onPress={() => setDrawerOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </DashboardShell>
  );
}

export default function ProjectsPage() {
  return (
    <ToastProvider>
      <ProjectsContent />
    </ToastProvider>
  );
}
