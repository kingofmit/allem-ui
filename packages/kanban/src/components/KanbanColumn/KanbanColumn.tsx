"use client";

import React, { useState, useCallback } from "react";
import { cn } from "../../utils/cn";
import { KanbanHeader } from "../KanbanHeader";

export interface KanbanColumnProps {
  id: string;
  title: string;
  count?: number;
  color?: string;
  children?: React.ReactNode;
  onAddCard?: () => void;
  onDrop?: (cardId: string, targetColumnId: string, index: number) => void;
  className?: string;
}

export function KanbanColumn({
  id,
  title,
  count,
  color,
  children,
  onAddCard,
  onDrop,
  className,
}: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    // Only handle leave if we're actually leaving the column, not entering a child
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);

      const cardId = e.dataTransfer.getData("application/kanban-card-id");
      if (!cardId) return;

      // Calculate drop index based on mouse position relative to cards
      const cardElements = Array.from(
        e.currentTarget.querySelectorAll("[draggable='true']")
      );

      let dropIndex = cardElements.length;
      for (let i = 0; i < cardElements.length; i++) {
        const rect = cardElements[i].getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
          dropIndex = i;
          break;
        }
      }

      onDrop?.(cardId, id, dropIndex);
    },
    [id, onDrop]
  );

  const hasChildren = React.Children.count(children) > 0;

  return (
    <div
      className={cn(
        "flex min-w-[300px] max-w-[340px] shrink-0 flex-col rounded-xl",
        "bg-neutral-50 dark:bg-neutral-900",
        className
      )}
    >
      <div className="px-3 pt-3">
        <KanbanHeader title={title} count={count} color={color} />
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "flex flex-1 flex-col gap-2 p-3 transition-colors duration-150",
          isDragOver && "bg-primary-50/50 dark:bg-primary-950/20"
        )}
      >
        {hasChildren ? (
          children
        ) : (
          <div
            className={cn(
              "flex min-h-[80px] items-center justify-center rounded-lg border-2 border-dashed",
              "text-sm text-neutral-400 dark:text-neutral-500",
              isDragOver
                ? "border-primary-400 bg-primary-50/50 text-primary-500 dark:border-primary-500 dark:bg-primary-950/30 dark:text-primary-400"
                : "border-neutral-200 dark:border-neutral-700"
            )}
          >
            Drop here
          </div>
        )}
      </div>
    </div>
  );
}
