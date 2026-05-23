"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import { DataGrid } from "@allem-ui/data-grid";
import type { ColumnDef } from "@allem-ui/data-grid";

type User = { name: string; email: string; role: string };

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
];

const data: User[] = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { name: "Carol Davis", email: "carol@example.com", role: "Viewer" },
  { name: "Dan Wilson", email: "dan@example.com", role: "Editor" },
];

export default function DataGridPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Data Grid</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/data-grid</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Advanced data table with sorting, filtering, row selection, and pagination. Built on TanStack Table.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/data-grid`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/data-grid</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Basic Usage</h2>
      <div className="mt-4">
        <ComponentPreview code={`import { DataGrid, type ColumnDef } from "@allem-ui/data-grid";\n\ntype User = { name: string; email: string; role: string };\n\nconst columns: ColumnDef<User>[] = [\n  { accessorKey: "name", header: "Name" },\n  { accessorKey: "email", header: "Email" },\n  { accessorKey: "role", header: "Role" },\n];\n\nconst data: User[] = [\n  { name: "Alice", email: "alice@example.com", role: "Admin" },\n  { name: "Bob", email: "bob@example.com", role: "Editor" },\n];\n\n<DataGrid data={data} columns={columns} />`}>
          <DataGrid data={data} columns={columns} />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">With Sorting & Filtering</h2>
      <div className="mt-4">
        <ComponentPreview code={`<DataGrid\n  data={data}\n  columns={columns}\n  enableSorting\n  enableFiltering\n/>`}>
          <DataGrid data={data} columns={columns} enableSorting enableFiltering />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Features</h2>
      <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400">
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Column sorting (click headers)</li>
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Global search filtering</li>
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Row selection with checkboxes</li>
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Pagination with page size control</li>
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Loading and empty states</li>
        <li className="flex items-start gap-2"><span className="mt-1 text-emerald-500">&#10003;</span> Custom cell renderers</li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <PropsTable
        props={[
          { name: "data", type: "T[]", required: true, description: "Array of data to display" },
          { name: "columns", type: "ColumnDef<T>[]", required: true, description: "Column definitions (from TanStack Table)" },
          { name: "enableSorting", type: "boolean", default: "false", description: "Enable column sorting" },
          { name: "enableFiltering", type: "boolean", default: "false", description: "Enable global search filter" },
          { name: "enableRowSelection", type: "boolean", default: "false", description: "Enable row selection checkboxes" },
          { name: "enablePagination", type: "boolean", default: "false", description: "Enable pagination" },
          { name: "pageSize", type: "number", default: "10", description: "Rows per page" },
          { name: "loading", type: "boolean", default: "false", description: "Show loading overlay" },
          { name: "emptyMessage", type: "string", description: "Message when no data" },
          { name: "onRowClick", type: "(row: T) => void", description: "Row click handler" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">DataGridToolbar Props</h2>
      <PropsTable
        props={[
          { name: "globalFilter", type: "string", required: true, description: "Current search value" },
          { name: "onGlobalFilterChange", type: "(value: string) => void", required: true, description: "Search change handler" },
          { name: "selectedCount", type: "number", description: "Number of selected rows" },
          { name: "totalCount", type: "number", description: "Total rows" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", description: "Extra toolbar content" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">DataGridPagination Props</h2>
      <PropsTable
        props={[
          { name: "pageIndex", type: "number", required: true, description: "Current page index" },
          { name: "pageCount", type: "number", required: true, description: "Total pages" },
          { name: "pageSize", type: "number", required: true, description: "Rows per page" },
          { name: "onPageChange", type: "(page: number) => void", required: true, description: "Page change handler" },
          { name: "onPageSizeChange", type: "(size: number) => void", description: "Page size change handler" },
          { name: "totalRows", type: "number", required: true, description: "Total row count" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">DataGridColumnHeader Props</h2>
      <PropsTable
        props={[
          { name: "sorted", type: 'false | "asc" | "desc"', required: true, description: "Current sort state" },
          { name: "onSort", type: "() => void", required: true, description: "Sort toggle handler" },
          { name: "children", type: "ReactNode", required: true, description: "Header label" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
