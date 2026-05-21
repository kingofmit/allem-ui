"use client";

import React, { useCallback } from "react";
import { cn } from "../../utils/cn";
import type { KanbanColumnData } from "../../types";
import { KanbanColumn } from "../KanbanColumn";
import { KanbanCard } from "../KanbanCard";

export interface KanbanBoardProps {
  columns: KanbanColumnData[];
  onCardMove?: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => void;
  className?: string;
  children?: React.ReactNode;
}

export function KanbanBoard({
  columns,
  onCardMove,
  className,
  children,
}: KanbanBoardProps) {
  const handleDrop = useCallback(
    (cardId: string, targetColumnId: string, newIndex: number) => {
      if (!onCardMove) return;

      // Find which column currently holds this card
      const sourceColumn = columns.find((col) =>
        col.items.some((item) => item.id === cardId)
      );
      if (!sourceColumn) return;

      onCardMove(cardId, sourceColumn.id, targetColumnId, newIndex);
    },
    [columns, onCardMove]
  );

  return (
    <div
      className={cn(
        "flex gap-4 overflow-x-auto p-4",
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600",
        className
      )}
    >
      {children
        ? children
        : columns.map((column) => (
            <KanbanColumn
              key={column.id}
              id={column.id}
              title={column.title}
              count={column.items.length}
              color={column.color}
              onDrop={handleDrop}
            >
              {column.items.map((item) => (
                <KanbanCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  labels={item.labels}
                  assignee={item.assignee}
                  dueDate={item.dueDate}
                />
              ))}
            </KanbanColumn>
          ))}
    </div>
  );
}
