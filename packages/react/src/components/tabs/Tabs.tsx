"use client";

import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  type TabsProps as AriaTabsProps,
  type TabListProps as AriaTabListProps,
  type TabProps as AriaTabProps,
  type TabPanelProps as AriaTabPanelProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";

export interface TabsProps extends AriaTabsProps {
  variant?: "underline" | "solid" | "pills";
}

export interface TabListProps<T extends object> extends AriaTabListProps<T> {}

export interface TabProps extends AriaTabProps {}

export interface TabPanelProps extends AriaTabPanelProps {}

const variantTabStyles: Record<string, string> = {
  underline:
    "px-4 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 border-b-2 border-transparent cursor-pointer transition-all duration-200 hover:text-neutral-900 dark:hover:text-white selected:text-indigo-600 selected:border-indigo-600 dark:selected:text-indigo-400 dark:selected:border-indigo-400 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2",
  solid:
    "px-4 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 rounded-lg cursor-pointer transition-all duration-200 hover:text-neutral-900 dark:hover:text-white selected:bg-white selected:text-neutral-900 selected:shadow-sm dark:selected:bg-neutral-800 dark:selected:text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50",
  pills:
    "px-4 py-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 rounded-full cursor-pointer transition-all duration-200 hover:text-neutral-900 dark:hover:text-white selected:bg-indigo-600 selected:text-white selected:shadow-sm selected:shadow-indigo-600/25 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2",
};

const variantListStyles: Record<string, string> = {
  underline: "border-b border-neutral-200 dark:border-neutral-800",
  solid: "bg-neutral-100 dark:bg-neutral-900 rounded-lg p-1",
  pills: "gap-1",
};

export function Tabs({ variant = "underline", className, ...props }: TabsProps) {
  return (
    <AriaTabs
      className={cn("flex flex-col", className as string)}
      data-variant={variant}
      {...props}
    />
  );
}

export function TabList<T extends object>({ className, ...props }: TabListProps<T>) {
  return (
    <AriaTabList
      className={cn("flex", variantListStyles.underline, className as string)}
      {...props}
    />
  );
}

export function Tab({ className, ...props }: TabProps) {
  return (
    <AriaTab
      className={cn(variantTabStyles.underline, className as string)}
      {...props}
    />
  );
}

export function TabPanel({ className, ...props }: TabPanelProps) {
  return (
    <AriaTabPanel
      className={cn("py-4 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg", className as string)}
      {...props}
    />
  );
}
