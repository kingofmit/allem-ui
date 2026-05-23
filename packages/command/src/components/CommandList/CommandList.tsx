"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { cn } from "../../utils/cn";

export interface CommandListProps {
  className?: string;
  children: React.ReactNode;
}

export function CommandList({ className, children }: CommandListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getItems = useCallback((): HTMLButtonElement[] => {
    if (!listRef.current) return [];
    return Array.from(listRef.current.querySelectorAll('button[role="option"]:not([aria-disabled="true"])'));
  }, []);

  const updateActive = useCallback(
    (index: number) => {
      const items = getItems();
      if (items.length === 0) return;

      const clamped = Math.max(0, Math.min(index, items.length - 1));
      setActiveIndex(clamped);

      // Update aria-selected
      items.forEach((item, i) => {
        if (i === clamped) {
          item.setAttribute("aria-selected", "true");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.setAttribute("aria-selected", "false");
        }
      });
    },
    [getItems]
  );

  // Reset active index when children change (search filtering)
  useEffect(() => {
    updateActive(0);
  }, [children, updateActive]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const items = getItems();
      if (items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = activeIndex + 1 >= items.length ? 0 : activeIndex + 1;
        setActiveIndex(next);
        updateActive(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = activeIndex - 1 < 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(prev);
        updateActive(prev);
      } else if (e.key === "Enter") {
        e.preventDefault();
        items[activeIndex]?.click();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, getItems, updateActive]);

  return (
    <div
      ref={listRef}
      className={cn(
        "max-h-[320px] overflow-y-auto overscroll-contain",
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700",
        className
      )}
    >
      {children}
    </div>
  );
}
