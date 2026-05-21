"use client";

import React, { useCallback, useState } from "react";
import { cn } from "../../utils/cn";

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden",
        "ring-1 ring-neutral-950/10 dark:ring-white/10",
        "shadow-sm",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          "px-4 py-2",
          "bg-neutral-800 dark:bg-neutral-800"
        )}
      >
        <span className="text-xs text-neutral-400 font-mono">
          {language || "code"}
        </span>

        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5",
            "text-xs text-neutral-400 hover:text-neutral-200",
            "transition-colors duration-150",
            "cursor-pointer"
          )}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 7.5l2.5 2.5 5-5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Copied</span>
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <rect
                  x="4.5"
                  y="4.5"
                  width="7"
                  height="7"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
                <path
                  d="M9.5 4.5V3a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 3v5A1.5 1.5 0 003 9.5h1.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-neutral-900 dark:bg-neutral-900">
        <pre className="overflow-x-auto p-4">
          <code className="text-sm font-mono text-neutral-100 leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
