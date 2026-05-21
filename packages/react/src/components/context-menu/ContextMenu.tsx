"use client";

import { cn } from "../../utils/cn";
import { createContext, useCallback, useContext, useRef, useState, useEffect, type ReactNode, type MouseEvent } from "react";

interface ContextMenuState {
  x: number;
  y: number;
  isOpen: boolean;
}

const ContextMenuContext = createContext<{
  state: ContextMenuState;
  close: () => void;
} | null>(null);

export interface ContextMenuProps {
  children: ReactNode;
  className?: string;
}

export interface ContextMenuTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface ContextMenuContentProps {
  children: ReactNode;
  className?: string;
}

export interface ContextMenuItemProps {
  onAction?: () => void;
  color?: "default" | "danger";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface ContextMenuSeparatorProps {
  className?: string;
}

export function ContextMenu({ children, className }: ContextMenuProps) {
  const [state, setState] = useState<ContextMenuState>({ x: 0, y: 0, isOpen: false });

  const close = useCallback(() => setState((s) => ({ ...s, isOpen: false })), []);

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setState({ x: e.clientX, y: e.clientY, isOpen: true });
  }, []);

  return (
    <ContextMenuContext.Provider value={{ state, close }}>
      <div onContextMenu={handleContextMenu} className={className}>
        {children}
      </div>
    </ContextMenuContext.Provider>
  );
}

export function ContextMenuContent({ children, className }: ContextMenuContentProps) {
  const ctx = useContext(ContextMenuContext);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctx?.state.isOpen) return;
    const handleClick = () => ctx.close();
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") ctx.close();
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [ctx]);

  if (!ctx?.state.isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      className={cn(
        "fixed z-50 min-w-[160px] rounded-xl bg-white py-1 shadow-lg ring-1 ring-neutral-950/5 dark:bg-neutral-900 dark:ring-white/10 animate-allem-fade-in",
        className,
      )}
      style={{ top: ctx.state.y, left: ctx.state.x }}
    >
      {children}
    </div>
  );
}

export function ContextMenuItem({
  onAction,
  color = "default",
  disabled = false,
  children,
  className,
}: ContextMenuItemProps) {
  const ctx = useContext(ContextMenuContext);

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onAction?.();
          ctx?.close();
        }
      }}
      className={cn(
        "w-full px-3 py-2 text-left text-sm outline-none transition-colors duration-150 cursor-pointer rounded-md mx-1",
        color === "default" &&
          "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        color === "danger" &&
          "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ContextMenuSeparator({ className }: ContextMenuSeparatorProps) {
  return (
    <hr
      role="separator"
      className={cn("my-1 border-t border-neutral-200 dark:border-neutral-800", className)}
    />
  );
}
