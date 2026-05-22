<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Kanban" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/kanban"><img src="https://img.shields.io/npm/v/@allem-ui/kanban.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/kanban

Drag-and-drop kanban board components for Allem UI -- columns, cards, and headers for project management interfaces.

## Installation

```bash
npm install @allem-ui/kanban @allem-ui/react @allem-ui/theme
```

## Quick Start

```tsx
import {
  KanbanBoard,
  KanbanColumn,
  KanbanCard,
  KanbanHeader,
  KanbanAddCard,
} from "@allem-ui/kanban";

export function ProjectBoard() {
  return (
    <KanbanBoard>
      <KanbanColumn>
        <KanbanHeader title="To Do" count={3} />
        <KanbanCard title="Design homepage" />
        <KanbanCard title="Set up CI/CD" />
        <KanbanAddCard />
      </KanbanColumn>
      <KanbanColumn>
        <KanbanHeader title="In Progress" count={1} />
        <KanbanCard title="Build components" />
      </KanbanColumn>
    </KanbanBoard>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `KanbanBoard` | Top-level board container with drag-and-drop context |
| `KanbanColumn` | Vertical column that holds cards |
| `KanbanCard` | Draggable task card |
| `KanbanHeader` | Column header with title and card count |
| `KanbanAddCard` | Button/form to add a new card to a column |

## Features

- **Drag and drop** -- Move cards between columns with smooth animations
- **Composable** -- Build custom board layouts with individual components
- **Column headers** -- Built-in card count and column actions
- **Add cards** -- Inline card creation component
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with exported prop and data types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
