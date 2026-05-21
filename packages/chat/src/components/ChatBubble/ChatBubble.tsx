"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface ChatBubbleProps {
  variant: "sent" | "received";
  children: React.ReactNode;
  avatar?: string;
  timestamp?: Date | string;
  status?: "sending" | "sent" | "delivered" | "read";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatTimestamp(timestamp: Date | string): string {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function StatusIndicator({ status }: { status: ChatBubbleProps["status"] }) {
  if (!status) return null;

  const icons: Record<string, React.ReactNode> = {
    sending: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle
          cx="6"
          cy="6"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-spin origin-center"
        />
      </svg>
    ),
    sent: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5l2.5 2.5 4.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    delivered: (
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path
          d="M1 6.5l2.5 2.5 4.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 6.5l2.5 2.5 4.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    read: (
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path
          d="M1 6.5l2.5 2.5 4.5-5"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 6.5l2.5 2.5 4.5-5"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <span className="inline-flex items-center text-neutral-400 dark:text-neutral-500">
      {icons[status]}
    </span>
  );
}

export function ChatBubble({
  variant,
  children,
  avatar,
  timestamp,
  status,
  className,
}: ChatBubbleProps) {
  const isSent = variant === "sent";

  return (
    <div
      className={cn(
        "flex gap-2 max-w-[85%]",
        isSent ? "ml-auto flex-row-reverse" : "mr-auto",
        className
      )}
    >
      {avatar && (
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full",
            "flex items-center justify-center",
            "text-xs font-semibold text-white",
            "bg-gradient-to-br from-indigo-500 to-purple-600",
            "shadow-sm"
          )}
          aria-label={avatar}
        >
          {getInitials(avatar)}
        </div>
      )}

      <div className={cn("flex flex-col", isSent ? "items-end" : "items-start")}>
        <div
          className={cn(
            "px-4 py-2.5 text-sm leading-relaxed",
            "break-words whitespace-pre-wrap",
            isSent
              ? "bg-indigo-600 text-white rounded-2xl rounded-br-md shadow-sm"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-2xl rounded-bl-md shadow-sm ring-1 ring-neutral-950/5 dark:ring-white/5"
          )}
        >
          {children}
        </div>

        {(timestamp || status) && (
          <div
            className={cn(
              "flex items-center gap-1 mt-1 px-1",
              "text-xs text-neutral-400 dark:text-neutral-500"
            )}
          >
            {timestamp && <span>{formatTimestamp(timestamp)}</span>}
            {isSent && status && <StatusIndicator status={status} />}
          </div>
        )}
      </div>
    </div>
  );
}
