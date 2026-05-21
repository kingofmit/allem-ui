"use client";

import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb as AriaBreadcrumb,
  Link,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  type BreadcrumbProps as AriaBreadcrumbProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface BreadcrumbsProps<T extends object> extends AriaBreadcrumbsProps<T> {
  separator?: ReactNode;
  className?: string;
}

export interface BreadcrumbItemProps extends AriaBreadcrumbProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Breadcrumbs<T extends object>({ className, ...props }: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      className={cn("flex items-center gap-1 text-sm", className)}
      {...props}
    />
  );
}

export function BreadcrumbItem({ href, children, className, ...props }: BreadcrumbItemProps) {
  return (
    <AriaBreadcrumb
      className={cn(
        "flex items-center gap-1 text-neutral-500 dark:text-neutral-400 last:text-neutral-900 dark:last:text-white last:font-medium",
        "[&:not(:last-child)]::after:content-['/'] [&:not(:last-child)]::after:ml-1 [&:not(:last-child)]::after:text-neutral-300 dark:[&:not(:last-child)]::after:text-neutral-600",
        className,
      )}
      {...props}
    >
      {href ? (
        <Link
          href={href}
          className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
        >
          {children}
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </AriaBreadcrumb>
  );
}
