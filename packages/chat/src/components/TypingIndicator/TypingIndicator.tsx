"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface TypingIndicatorProps {
  className?: string;
}

const bounceKeyframes = `
@keyframes chat-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}
`;

export function TypingIndicator({ className }: TypingIndicatorProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: bounceKeyframes }} />
      <div
        className={cn(
          "flex gap-2 max-w-[85%] mr-auto",
          className
        )}
      >
        <div
          className={cn(
            "inline-flex items-center gap-1",
            "px-4 py-3",
            "bg-neutral-100 dark:bg-neutral-800",
            "rounded-2xl rounded-bl-md",
            "shadow-sm ring-1 ring-neutral-950/5 dark:ring-white/5"
          )}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              style={{
                animation: "chat-bounce 1.4s ease-in-out infinite",
                animationDelay: `${i * 0.16}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
