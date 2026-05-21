"use client";

import { cn } from "../../utils/cn";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "danger" | "warning";
  duration?: number;
}

interface ToastContextValue {
  toast: (options: Omit<ToastData, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

export interface ToastProviderProps {
  children: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

const positionStyles: Record<string, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

const variantStyles: Record<string, string> = {
  default: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
  success: "bg-white dark:bg-neutral-900 border-l-4 border-emerald-500",
  danger: "bg-white dark:bg-neutral-900 border-l-4 border-red-500",
  warning: "bg-white dark:bg-neutral-900 border-l-4 border-amber-500",
};

const variantIconColors: Record<string, string> = {
  default: "text-neutral-500",
  success: "text-emerald-500",
  danger: "text-red-500",
  warning: "text-amber-500",
};

let counter = 0;

export function ToastProvider({ children, position = "bottom-right" }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (options: Omit<ToastData, "id">) => {
      const id = `toast-${++counter}`;
      const duration = options.duration ?? 5000;
      setToasts((prev) => [...prev, { ...options, id }]);
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration);
      }
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        className={cn("fixed z-50 flex flex-col gap-2 pointer-events-none", positionStyles[position])}
        aria-live="polite"
        aria-label="Notifications"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto min-w-[300px] max-w-[420px] rounded-xl border p-4 shadow-lg ring-1 ring-neutral-950/5 dark:ring-white/10 animate-allem-slide-up",
              variantStyles[t.variant || "default"],
            )}
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {t.title}
                </p>
                {t.description && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {t.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                className={cn(
                  "shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer",
                  variantIconColors[t.variant || "default"],
                )}
                aria-label="Dismiss"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
