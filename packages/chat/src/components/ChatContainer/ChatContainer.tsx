"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface ChatContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function ChatContainer({ className, children }: ChatContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-full overflow-hidden",
        "bg-white dark:bg-neutral-950",
        className
      )}
    >
      {children}
    </div>
  );
}
