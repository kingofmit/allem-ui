import { View, Text, Pressable, Modal as RNModal } from "react-native";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

interface DropdownContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export interface DropdownProps {
  children: ReactNode;
}

export interface DropdownMenuProps {
  children: ReactNode;
  onAction?: (key: string) => void;
  className?: string;
}

export interface DropdownItemProps {
  id?: string;
  color?: "default" | "danger";
  onAction?: () => void;
  isDisabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface DropdownSeparatorProps {
  className?: string;
}

export function Dropdown({ children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children }: { children: ReactNode }) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownTrigger must be used within Dropdown");
  const { selection } = useHaptic();

  return (
    <Pressable onPress={() => { selection(); context.open(); }} accessibilityRole="button" accessibilityLabel="Open menu">
      {children}
    </Pressable>
  );
}

export function DropdownMenu({ children, className }: DropdownMenuProps) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenu must be used within Dropdown");

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="fade"
      onRequestClose={context.close}
    >
      <Pressable className="flex-1 justify-end bg-black/40" onPress={context.close}>
        <View
          className={cn(
            "bg-white dark:bg-neutral-900 rounded-t-2xl pb-8",
            className,
          )}
        >
          <View className="items-center py-3">
            <View className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </View>
          {children}
        </View>
      </Pressable>
    </RNModal>
  );
}

export function DropdownItem({
  id,
  color = "default",
  onAction,
  isDisabled = false,
  children,
  className,
}: DropdownItemProps) {
  const context = useContext(DropdownContext);

  return (
    <Pressable
      className={cn(
        "px-4 py-3 mx-2 rounded-lg",
        isDisabled && "opacity-50",
        className,
      )}
      onPress={() => {
        if (isDisabled) return;
        onAction?.();
        context?.close();
      }}
      disabled={isDisabled}
      accessibilityRole="menuitem"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityState={{ disabled: isDisabled }}
      style={({ pressed }: { pressed: boolean }) => ({
        backgroundColor: pressed ? "rgba(128,128,128,0.12)" : "transparent",
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <Text
        className={cn(
          "text-base",
          color === "danger"
            ? "text-red-600 dark:text-red-400"
            : "text-neutral-700 dark:text-neutral-300",
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export function DropdownSeparator({ className }: DropdownSeparatorProps) {
  return <View className={cn("h-px bg-neutral-200 dark:bg-neutral-800 mx-4 my-1", className)} />;
}
