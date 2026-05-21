import type { ColumnDef } from "@tanstack/react-table";

export type { ColumnDef };

export interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableRowSelection?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  className?: string;
}
