# Data Grid

```bash
npm i @allem-ui/data-grid @tanstack/react-table
```

```tsx
import { DataGrid } from "@allem-ui/data-grid";
import { createColumnHelper } from "@tanstack/react-table";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Basic usage

```tsx
import { DataGrid } from "@allem-ui/data-grid";
import { createColumnHelper } from "@tanstack/react-table";

type User = { id: number; name: string; email: string; role: string };

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
];

const data: User[] = [
  { id: 1, name: "John", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane", email: "jane@example.com", role: "User" },
];

<DataGrid data={data} columns={columns} />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `data` | `T[]` | required |
| `columns` | `ColumnDef<T>[]` | required |
| `enableSorting` | `boolean` | `true` |
| `enableFiltering` | `boolean` | `true` |
| `enableRowSelection` | `boolean` | `false` |
| `enablePagination` | `boolean` | `true` |
| `pageSize` | `number` | `10` |
| `loading` | `boolean` | `false` |
| `emptyMessage` | `string` | `"No data available"` |
| `onRowClick` | `(row: T) => void` | — |
| `className` | `string` | — |

## Features

### Sorting
Click column headers to sort. Enabled by default. Arrow indicators show sort direction.

### Filtering
A global search input appears in the toolbar. Filters across all columns.

### Row selection
```tsx
<DataGrid data={data} columns={columns} enableRowSelection />
```
Adds a checkbox column. Selected row count appears in the toolbar.

### Pagination
```tsx
<DataGrid data={data} columns={columns} pageSize={20} />
```
Shows page navigation and rows-per-page selector (10/20/50/100).

### Loading state
```tsx
<DataGrid data={[]} columns={columns} loading />
```
Shows a centered spinner overlay.

### Row click
```tsx
<DataGrid data={data} columns={columns} onRowClick={(row) => navigate(`/users/${row.id}`)} />
```

## Advanced columns

```tsx
const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Badge color={info.getValue() === "active" ? "success" : "neutral"}>{info.getValue()}</Badge>,
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (info) => <Button size="sm" variant="ghost" onPress={() => edit(info.row.original)}>Edit</Button>,
  }),
];
```

## Sub-components

For custom layouts, you can use the exported sub-components: `DataGridToolbar`, `DataGridPagination`, `DataGridColumnHeader`.
