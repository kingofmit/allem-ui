"use client";

import React, { useRef, useCallback, useState } from "react";
import { cn } from "../../utils/cn";

export interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ChatInput({
  onSend,
  placeholder = "Type a message...",
  isLoading = false,
  disabled = false,
  className,
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    const lineHeight = 24;
    const maxHeight = lineHeight * 5;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || isLoading || disabled) return;
    onSend(trimmed);
    setValue("");
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
    }
  }, [value, isLoading, disabled, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      adjustHeight();
    },
    [adjustHeight]
  );

  const canSend = value.trim().length > 0 && !isLoading && !disabled;

  return (
    <div
      className={cn(
        "flex items-end gap-2 p-4",
        "border-t border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-950",
        className
      )}
    >
      <div
        className={cn(
          "flex-1 flex items-end",
          "rounded-2xl",
          "bg-neutral-50 dark:bg-neutral-900",
          "ring-1 ring-neutral-950/5 dark:ring-white/10",
          "shadow-sm",
          "transition-shadow duration-200",
          "focus-within:ring-2 focus-within:ring-indigo-500/50"
        )}
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none",
            "px-4 py-3",
            "bg-transparent",
            "text-sm text-neutral-900 dark:text-neutral-100",
            "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "leading-6"
          )}
          style={{ maxHeight: "120px" }}
        />
      </div>

      <button
        onClick={handleSend}
        disabled={!canSend}
        className={cn(
          "flex-shrink-0",
          "w-10 h-10 rounded-full",
          "flex items-center justify-center",
          "transition-all duration-200",
          "cursor-pointer",
          canSend
            ? "bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-sm"
            : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
        )}
        aria-label="Send message"
      >
        {isLoading ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="animate-spin"
          >
            <circle
              cx="9"
              cy="9"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="22 22"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14V4m0 0l-4 4m4-4l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
