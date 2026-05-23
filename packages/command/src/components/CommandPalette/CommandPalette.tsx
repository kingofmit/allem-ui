"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "../../utils/cn";

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export function CommandPalette({
  open,
  onOpenChange,
  className,
  children,
}: CommandPaletteProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0",
          "bg-black/50 dark:bg-black/70",
          "backdrop-blur-sm",
          "animate-[command-fade-in_150ms_ease-out]"
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "relative w-full max-w-lg mx-4",
          "rounded-xl",
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "shadow-2xl shadow-black/20 dark:shadow-black/50",
          "overflow-hidden",
          "animate-[command-slide-up_200ms_ease-out]",
          className
        )}
      >
        {children}

        {/* Footer */}
        <div
          className={cn(
            "flex items-center justify-between px-4 py-2.5",
            "border-t border-neutral-200 dark:border-neutral-800",
            "bg-neutral-50 dark:bg-neutral-900/80",
            "text-[11px] text-neutral-400 dark:text-neutral-500"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1 py-0.5 text-[10px] font-medium">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1 py-0.5 text-[10px] font-medium">↵</kbd>
              select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1 py-0.5 text-[10px] font-medium">esc</kbd>
              close
            </span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes command-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes command-slide-up {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
