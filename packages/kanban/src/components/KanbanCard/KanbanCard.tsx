"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  labels?: { text: string; color: string }[];
  assignee?: string;
  dueDate?: string;
  className?: string;
}

export function KanbanCard({
  id,
  title,
  description,
  labels,
  assignee,
  dueDate,
  className,
}: KanbanCardProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/kanban-card-id", id);
    e.dataTransfer.effectAllowed = "move";
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.dataset.dragging = "true";
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget instanceof HTMLElement) {
      delete e.currentTarget.dataset.dragging;
    }
  };

  const initials = assignee
    ? assignee
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : null;

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={cn(
        "group rounded-lg bg-white p-3 shadow-xs ring-1 ring-neutral-950/5",
        "transition-all duration-150 ease-in-out",
        "hover:shadow-sm hover:ring-neutral-950/10 cursor-grab",
        "data-[dragging=true]:opacity-50 data-[dragging=true]:cursor-grabbing",
        "dark:bg-neutral-800 dark:ring-white/10 dark:hover:ring-white/20",
        className
      )}
    >
      {labels && labels.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1.5">
          {labels.map((label, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${label.color}20`,
                color: label.color,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: label.color }}
              />
              {label.text}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
        {title}
      </p>

      {description && (
        <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>
      )}

      {(assignee || dueDate) && (
        <div className="mt-3 flex items-center justify-between">
          {dueDate && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {dueDate}
            </span>
          )}
          {assignee && initials && (
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-[10px] font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-300"
              title={assignee}
            >
              {initials}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
