"use client";

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  type RowSelectionState,
  type PaginationState,
} from "@tanstack/react-table";
import { cn } from "../../utils/cn";
import type { DataGridProps } from "../../types";
import { DataGridColumnHeader } from "../DataGridColumnHeader";
import { DataGridToolbar } from "../DataGridToolbar";
import { DataGridPagination } from "../DataGridPagination";

function EmptyIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-neutral-300 dark:text-neutral-600"
    >
      <rect
        x="6"
        y="10"
        width="36"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 18H42"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 18V38"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 30L26 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 dark:bg-neutral-900/60 backdrop-blur-[1px]">
      <svg
        className="h-8 w-8 animate-spin text-indigo-600 dark:text-indigo-400"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </div>
  );
}

export function DataGrid<T extends Record<string, unknown>>({
  data,
  columns,
  enableSorting = true,
  enableFiltering = true,
  enableRowSelection = false,
  enablePagination = true,
  pageSize: initialPageSize = 10,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  className,
}: DataGridProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const tableColumns = useMemo(() => {
    if (!enableRowSelection) return columns;

    return [
      {
        id: "__selection",
        header: ({ table }: any) => (
          <input
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-800"
            aria-label="Select all rows"
          />
        ),
        cell: ({ row }: any) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-800"
            aria-label="Select row"
          />
        ),
        size: 40,
        enableSorting: false,
      },
      ...columns,
    ];
  }, [columns, enableRowSelection]);

  const table = useReactTable({
    data,
    columns: tableColumns as any,
    state: {
      sorting,
      globalFilter,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    enableSorting,
    enableGlobalFilter: enableFiltering,
    enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
  });

  const selectedCount = Object.keys(rowSelection).length;

  return (
    <div
      className={cn(
        "relative rounded-xl ring-1 ring-neutral-950/5 shadow-sm overflow-hidden",
        "bg-white dark:bg-neutral-900",
        "dark:ring-white/10",
        className
      )}
    >
      {enableFiltering && (
        <DataGridToolbar
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          selectedCount={enableRowSelection ? selectedCount : undefined}
          totalCount={data.length}
        />
      )}

      <div className="relative overflow-x-auto">
        {loading && <LoadingSpinner />}

        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="bg-neutral-50 dark:bg-neutral-800/50"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cn(
                      "sticky top-0 z-[1] px-4 py-3 text-left text-xs font-medium uppercase tracking-wider",
                      "text-neutral-500 dark:text-neutral-400",
                      "bg-neutral-50 dark:bg-neutral-800/50"
                    )}
                    style={{
                      width:
                        header.getSize() !== 150
                          ? header.getSize()
                          : undefined,
                    }}
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <DataGridColumnHeader
                        sorted={header.column.getIsSorted()}
                        onSort={header.column.getToggleSortingHandler()!}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </DataGridColumnHeader>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={tableColumns.length}
                  className="px-4 py-16 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <EmptyIcon />
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {emptyMessage}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => {
                const isSelected = row.getIsSelected();
                return (
                  <tr
                    key={row.id}
                    onClick={() => onRowClick?.(row.original)}
                    className={cn(
                      "border-b border-neutral-100 dark:border-neutral-800",
                      "transition-colors duration-100",
                      isSelected
                        ? "bg-indigo-50 dark:bg-indigo-950/20"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/30",
                      onRowClick && "cursor-pointer"
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {enablePagination && table.getPageCount() > 1 && (
        <DataGridPagination
          pageIndex={pagination.pageIndex}
          pageCount={table.getPageCount()}
          pageSize={pagination.pageSize}
          onPageChange={(page) =>
            setPagination((prev) => ({ ...prev, pageIndex: page }))
          }
          onPageSizeChange={(size) =>
            setPagination({ pageIndex: 0, pageSize: size })
          }
          totalRows={table.getFilteredRowModel().rows.length}
        />
      )}
    </div>
  );
}
