import { cn } from "../../utils/cn";
import type { ReactNode, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes, HTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: "simple" | "striped" | "bordered";
  children: ReactNode;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

const variantStyles: Record<string, string> = {
  simple: "",
  striped: "[&_tbody_tr:nth-child(even)]:bg-neutral-50 dark:[&_tbody_tr:nth-child(even)]:bg-neutral-900",
  bordered: "[&_th]:border [&_td]:border border-neutral-200 dark:border-neutral-800 [&_th]:border-neutral-200 [&_td]:border-neutral-200 dark:[&_th]:border-neutral-800 dark:[&_td]:border-neutral-800",
};

export function Table({ variant = "simple", className, children, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg ring-1 ring-neutral-950/5 dark:ring-white/10">
      <table
        className={cn("w-full text-sm text-left", variantStyles[variant], className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn(
        "border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50",
        className,
      )}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }: TableBodyProps) {
  return (
    <tbody className={cn("divide-y divide-neutral-200 dark:divide-neutral-800", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...props }: TableRowProps) {
  return (
    <tr
      className={cn("transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900", className)}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...props }: TableCellProps) {
  return (
    <td
      className={cn("px-4 py-3 text-neutral-700 dark:text-neutral-300", className)}
      {...props}
    >
      {children}
    </td>
  );
}
