"use client";

import {
  DisclosureGroup,
  Disclosure,
  DisclosurePanel,
  Button,
  Heading,
  type DisclosureGroupProps,
  type DisclosureProps as AriaDisclosureProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface AccordionProps extends DisclosureGroupProps {
  className?: string;
}

export interface AccordionItemProps extends AriaDisclosureProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <DisclosureGroup
      className={cn(
        "divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export function AccordionItem({ title, children, className, ...props }: AccordionItemProps) {
  return (
    <Disclosure className={cn("group", className)} {...props}>
      <Heading>
        <Button
          slot="trigger"
          className="flex w-full items-center justify-between py-4 px-4 text-left text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600/50 rounded-lg cursor-pointer"
        >
          {title}
          <svg
            className="h-4 w-4 text-neutral-500 transition-transform duration-200 group-data-[expanded]:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </Heading>
      <DisclosurePanel className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
}
