"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

export interface KanbanAddCardProps {
  onAdd?: (title: string) => void;
  className?: string;
}

export function KanbanAddCard({ onAdd, className }: KanbanAddCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleAdd = () => {
    const trimmed = value.trim();
    if (trimmed && onAdd) {
      onAdd(trimmed);
    }
    setValue("");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue("");
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (!isEditing) {
    return (
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-neutral-500",
          "transition-colors duration-150",
          "hover:bg-neutral-200/60 hover:text-neutral-700",
          "dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200",
          className
        )}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add card
      </button>
    );
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter card title..."
        className={cn(
          "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm",
          "placeholder:text-neutral-400",
          "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100",
          "dark:placeholder:text-neutral-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20"
        )}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white",
            "transition-colors duration-150",
            "hover:bg-primary-700",
            "dark:bg-primary-500 dark:hover:bg-primary-600"
          )}
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-600",
            "transition-colors duration-150",
            "hover:bg-neutral-200/60",
            "dark:text-neutral-400 dark:hover:bg-neutral-700/50"
          )}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
