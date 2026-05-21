"use client";

import { useState, type ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
  className?: string;
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      {/* Preview */}
      <div className={`flex min-h-[200px] items-center justify-center p-8 ${className ?? ""}`}>
        {children}
      </div>

      {/* Toggle */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="flex w-full items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          {showCode ? "Hide code" : "Show code"}
        </button>
      </div>

      {/* Code */}
      {showCode && (
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <pre className="overflow-x-auto bg-neutral-950 p-4 text-sm text-neutral-100">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
