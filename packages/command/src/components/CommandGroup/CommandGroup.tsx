"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface CommandGroupProps {
  heading: string;
  className?: string;
  children: React.ReactNode;
}

export function CommandGroup({ heading, className, children }: CommandGroupProps) {
  return (
    <div role="group" aria-label={heading} className={cn("px-2 py-1.5", className)}>
      <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        {heading}
      </div>
      <div role="listbox" className="flex flex-col gap-0.5">
        {children}
      </div>
    </div>
  );
}
