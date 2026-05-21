"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface PricingTableProps {
  children: React.ReactNode;
  className?: string;
}

export function PricingTable({ children, className }: PricingTableProps) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
        "items-start",
        className
      )}
    >
      {children}
    </div>
  );
}
