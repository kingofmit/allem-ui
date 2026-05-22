<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Data Grid" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/data-grid"><img src="https://img.shields.io/npm/v/@allem-ui/data-grid.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/tanstack_table-v8-orange" alt="TanStack Table" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/data-grid

Advanced data grid with sorting, filtering, and pagination for Allem UI -- powered by TanStack Table.

## Installation

```bash
npm install @allem-ui/data-grid @allem-ui/react @allem-ui/theme
```

## Quick Start

```tsx
import { DataGrid, DataGridToolbar, DataGridPagination } from "@allem-ui/data-grid";
import type { ColumnDef } from "@allem-ui/data-grid";

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
];

export function UsersTable() {
  return (
    <div>
      <DataGridToolbar />
      <DataGrid data={users} columns={columns} />
      <DataGridPagination />
    </div>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `DataGrid` | Main data table with sorting, filtering, and row selection |
| `DataGridToolbar` | Search, filter controls, and bulk actions bar |
| `DataGridPagination` | Page navigation with page size selector |
| `DataGridColumnHeader` | Sortable column header with sort indicators |

## Features

- **Powered by TanStack Table** -- Built on [TanStack Table v8](https://tanstack.com/table) for robust data handling
- **Sorting** -- Click column headers to sort ascending/descending
- **Filtering** -- Global search and per-column filtering
- **Pagination** -- Client-side pagination with configurable page sizes
- **Composable** -- Use DataGrid alone or with Toolbar and Pagination
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with generic `ColumnDef<T>` types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
