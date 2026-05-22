import { View, Text, Pressable, Modal as RNModal } from "react-native";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

interface ContextMenuContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContextMenuCtx = createContext<ContextMenuContextValue | null>(null);

export interface ContextMenuProps {
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
  const [isOpen, setIsOpen] = useState(false);
  const { trigger } = useHaptic();

  return (
    <ContextMenuCtx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      <Pressable
        onLongPress={() => { trigger("medium"); setIsOpen(true); }}
        delayLongPress={500}
        className={className}
        accessibilityRole="button"
        accessibilityHint="Long press to open context menu"
      >
        {children}
      </Pressable>
    </ContextMenuCtx.Provider>
  );
}

export function ContextMenuContent({ children, className }: ContextMenuContentProps) {
  const context = useContext(ContextMenuCtx);
  if (!context) throw new Error("ContextMenuContent must be used within ContextMenu");

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="fade"
      onRequestClose={context.close}
    >
      <Pressable className="flex-1 justify-end bg-black/40" onPress={context.close}>
        <View className={cn("bg-white dark:bg-neutral-900 rounded-t-2xl pb-8", className)}>
          <View className="items-center py-3">
            <View className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </View>
          {children}
        </View>
      </Pressable>
    </RNModal>
  );
}

export function ContextMenuItem({
  onAction,
  color = "default",
  disabled = false,
  children,
  className,
}: ContextMenuItemProps) {
  const context = useContext(ContextMenuCtx);

  return (
    <Pressable
      className={cn("px-4 py-3 mx-2 rounded-lg", disabled && "opacity-50", className)}
      onPress={() => {
        if (disabled) return;
        onAction?.();
        context?.close();
      }}
      disabled={disabled}
      accessibilityRole="menuitem"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityState={{ disabled }}
      style={({ pressed }: { pressed: boolean }) => ({
        backgroundColor: pressed ? "rgba(128,128,128,0.12)" : "transparent",
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <Text
        className={cn(
          "text-base",
          color === "danger" ? "text-red-600 dark:text-red-400" : "text-neutral-700 dark:text-neutral-300",
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export function ContextMenuSeparator({ className }: ContextMenuSeparatorProps) {
  return <View className={cn("h-px bg-neutral-200 dark:bg-neutral-800 mx-4 my-1", className)} />;
}
