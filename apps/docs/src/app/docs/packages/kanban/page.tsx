"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import { KanbanBoard } from "@allem-ui/kanban";
import type { KanbanColumnData } from "@allem-ui/kanban";

const initialColumns: KanbanColumnData[] = [
  {
    id: "todo",
    title: "To Do",
    items: [
      { id: "1", title: "Design homepage", labels: [{ text: "Design", color: "indigo" }] },
      { id: "2", title: "Write docs" },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    items: [
      { id: "3", title: "Build components", assignee: "Ahmed" },
    ],
  },
  {
    id: "done",
    title: "Done",
    items: [
      { id: "4", title: "Setup repo" },
    ],
  },
];

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialColumns);

  const handleCardMove = (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => {
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
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Kanban</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/kanban</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Drag-and-drop kanban board with columns, cards, labels, and assignees. Zero external drag-and-drop dependencies.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/kanban`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/kanban</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Basic Usage</h2>
      <div className="mt-4">
        <ComponentPreview code={`import { KanbanBoard } from "@allem-ui/kanban";\n\nconst columns = [\n  { id: "todo", title: "To Do", items: [\n    { id: "1", title: "Design homepage", labels: [{ text: "Design", color: "indigo" }] },\n    { id: "2", title: "Write docs" },\n  ]},\n  { id: "progress", title: "In Progress", items: [\n    { id: "3", title: "Build components", assignee: "Ahmed" },\n  ]},\n  { id: "done", title: "Done", items: [\n    { id: "4", title: "Setup repo" },\n  ]},\n];\n\n<KanbanBoard\n  columns={columns}\n  onCardMove={(cardId, from, to, index) => { /* update state */ }}\n/>`}>
          <KanbanBoard columns={columns} onCardMove={handleCardMove} />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">KanbanBoard Props</h2>
      <PropsTable
        props={[
          { name: "columns", type: "KanbanColumnData[]", required: true, description: "Array of column definitions with items" },
          { name: "onCardMove", type: "(cardId, fromColumnId, toColumnId, newIndex) => void", description: "Called when a card is dragged to a new position" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">KanbanCard Props</h2>
      <PropsTable
        props={[
          { name: "id", type: "string", required: true, description: "Unique card identifier" },
          { name: "title", type: "string", required: true, description: "Card title" },
          { name: "description", type: "string", description: "Card description text" },
          { name: "labels", type: '{ text: string; color: string }[]', description: "Colored label badges" },
          { name: "assignee", type: "string", description: "Assignee name (shows initials avatar)" },
          { name: "dueDate", type: "string", description: "Due date text" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">KanbanColumn Props</h2>
      <PropsTable
        props={[
          { name: "id", type: "string", required: true, description: "Unique column ID" },
          { name: "title", type: "string", required: true, description: "Column heading" },
          { name: "count", type: "number", description: "Item count badge" },
          { name: "color", type: "string", description: "Accent color" },
          { name: "onAddCard", type: "() => void", description: "Show add card button" },
          { name: "onDrop", type: "(cardId, targetColumnId, index) => void", description: "Drop handler" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">KanbanHeader Props</h2>
      <PropsTable
        props={[
          { name: "title", type: "string", required: true, description: "Header text" },
          { name: "count", type: "number", description: "Count badge" },
          { name: "color", type: "string", description: "Accent color" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">KanbanAddCard Props</h2>
      <PropsTable
        props={[
          { name: "onAdd", type: "(title: string) => void", description: "Called with new card title" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
