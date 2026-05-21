# Kanban

```bash
npm i @allem-ui/kanban
```

```tsx
import {
  KanbanBoard,
  KanbanColumn,
  KanbanCard,
  KanbanHeader,
  KanbanAddCard,
} from "@allem-ui/kanban";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Data-driven usage

```tsx
import { useState } from "react";
import { KanbanBoard } from "@allem-ui/kanban";
import type { KanbanColumnData } from "@allem-ui/kanban";

const [columns, setColumns] = useState<KanbanColumnData[]>([
  {
    id: "todo",
    title: "To Do",
    color: "#6366f1",
    items: [
      { id: "1", title: "Design homepage", description: "Create wireframes", labels: [{ text: "Design", color: "#8b5cf6" }] },
      { id: "2", title: "Setup CI/CD", assignee: "John", dueDate: "Jan 20" },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "#f59e0b",
    items: [
      { id: "3", title: "Build API", description: "REST endpoints", assignee: "Jane" },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    items: [],
  },
]);

const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => {
  setColumns((prev) => {
    const next = prev.map((col) => ({ ...col, items: [...col.items] }));
    const fromCol = next.find((c) => c.id === fromColumnId)!;
    const toCol = next.find((c) => c.id === toColumnId)!;
    const cardIndex = fromCol.items.findIndex((i) => i.id === cardId);
    const [card] = fromCol.items.splice(cardIndex, 1);
    toCol.items.splice(newIndex, 0, card);
    return next;
  });
};

<KanbanBoard columns={columns} onCardMove={handleCardMove} />
```

## Types

```ts
type KanbanItem = {
  id: string;
  title: string;
  description?: string;
  labels?: { text: string; color: string }[];
  assignee?: string;
  dueDate?: string;
};

type KanbanColumnData = {
  id: string;
  title: string;
  items: KanbanItem[];
  color?: string;  // CSS color for column indicator dot
};
```

## Composable usage

For custom layouts, use individual components:

```tsx
<KanbanBoard>
  <KanbanColumn id="todo" title="To Do" count={3} color="#6366f1">
    <KanbanCard id="1" title="Task 1" description="Details here" />
    <KanbanCard
      id="2"
      title="Task 2"
      labels={[{ text: "Bug", color: "#ef4444" }]}
      assignee="Alice"
      dueDate="Jan 15"
    />
    <KanbanAddCard onAdd={(title) => addCard("todo", title)} />
  </KanbanColumn>
</KanbanBoard>
```

## KanbanAddCard

Inline card creation. Shows "+ Add card" button that expands to a text input.

```tsx
<KanbanAddCard onAdd={(title) => createCard(columnId, title)} />
```

Enter confirms, Escape cancels.

## Features

- **Drag and drop** — Native HTML drag-and-drop. Cards show 50% opacity while dragging, columns show dashed border as drop zone.
- **Labels** — Colored tags with customizable CSS colors
- **Assignees** — Shown as initials avatar on the card
- **Due dates** — Displayed as text string (format however you want)
- **Column indicators** — Colored dot in the header, item count badge
