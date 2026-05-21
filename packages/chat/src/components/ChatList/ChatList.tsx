"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "../../utils/cn";

export interface ChatListProps {
  className?: string;
  children: React.ReactNode;
  autoScroll?: boolean;
}

export function ChatList({
  className,
  children,
  autoScroll = true,
}: ChatListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollButton(distanceFromBottom > 100);
  }, []);

  useEffect(() => {
    if (!autoScroll) return;
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceFromBottom < 150) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [children, autoScroll]);

  return (
    <div className="relative flex-1 min-h-0">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={cn(
          "h-full overflow-y-auto",
          "px-4 py-6 space-y-4",
          "scroll-smooth",
          className
        )}
      >
        {children}
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className={cn(
            "absolute bottom-4 left-1/2 -translate-x-1/2",
            "flex items-center justify-center",
            "w-8 h-8 rounded-full",
            "bg-white dark:bg-neutral-800",
            "shadow-lg ring-1 ring-neutral-950/5 dark:ring-white/10",
            "text-neutral-500 dark:text-neutral-400",
            "hover:bg-neutral-50 dark:hover:bg-neutral-700",
            "transition-all duration-200",
            "cursor-pointer"
          )}
          aria-label="Scroll to bottom"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3v10m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
