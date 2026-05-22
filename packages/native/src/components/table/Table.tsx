import { View, Text, ScrollView } from "react-native";
import { createContext, useContext, Children, cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TableVariant = "simple" | "striped" | "bordered";

const TableContext = createContext<{ variant: TableVariant }>({ variant: "simple" });

export interface TableProps {
  variant?: TableVariant;
  children: ReactNode;
  className?: string;
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export interface TableRowProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export function Table({ variant = "simple", children, className }: TableProps) {
  return (
    <TableContext.Provider value={{ variant }}>
      <ScrollView
        horizontal
        accessibilityRole="none"
        accessibilityLabel="Data table"
        className={cn(
          "rounded-lg border border-neutral-200 dark:border-neutral-800",
          className,
        )}
      >
        <View className="min-w-full">{children}</View>
      </ScrollView>
    </TableContext.Provider>
  );
}

export function TableHeader({ children, className }: TableHeaderProps) {
  const { variant } = useContext(TableContext);
  return (
    <View
      className={cn(
        "border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50",
        variant === "bordered" && "border-b-2",
        className,
      )}
    >
      {children}
    </View>
  );
}

export function TableBody({ children, className }: TableBodyProps) {
  const { variant } = useContext(TableContext);

  // Auto-inject index for striped variant
  const indexedChildren = Children.map(children, (child, i) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<any>, { index: i });
    }
    return child;
  });

  return <View className={cn(className)}>{indexedChildren}</View>;
}

export function TableRow({ children, index = 0, className }: TableRowProps) {
  const { variant } = useContext(TableContext);
  const isEven = index % 2 === 0;

  return (
    <View
      className={cn(
        "flex-row border-b border-neutral-100 dark:border-neutral-800/50",
        variant === "striped" && !isEven && "bg-neutral-50/50 dark:bg-neutral-800/30",
        variant === "bordered" && "border-b border-neutral-200 dark:border-neutral-700",
        className,
      )}
      accessibilityRole="none"
    >
      {children}
    </View>
  );
}

export function TableHead({ children, className }: TableHeadProps) {
  const { variant } = useContext(TableContext);
  return (
    <View
      className={cn(
        "px-4 py-3",
        variant === "bordered" && "border-r border-neutral-200 dark:border-neutral-700 last:border-r-0",
        className,
      )}
    >
      <Text className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        {children}
      </Text>
    </View>
  );
}

export function TableCell({ children, className }: TableCellProps) {
  const { variant } = useContext(TableContext);
  return (
    <View
      className={cn(
        "px-4 py-3",
        variant === "bordered" && "border-r border-neutral-200 dark:border-neutral-700 last:border-r-0",
        className,
      )}
    >
      <Text className="text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </Text>
    </View>
  );
}
