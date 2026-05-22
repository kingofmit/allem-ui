import { View, Pressable, Modal as RNModal, Animated } from "react-native";
import { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface PopoverContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

export interface PopoverTriggerProps {
  children: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export interface PopoverProps {
  children: ReactNode;
  className?: string;
}

export function PopoverTrigger({ children, isOpen: controlledOpen, onOpenChange }: PopoverTriggerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const open = () => {
    if (controlledOpen === undefined) setInternalOpen(true);
    onOpenChange?.(true);
  };

  const close = () => {
    if (controlledOpen === undefined) setInternalOpen(false);
    onOpenChange?.(false);
  };

  return (
    <PopoverContext.Provider value={{ isOpen, open, close }}>
      {children}
    </PopoverContext.Provider>
  );
}

export function PopoverTriggerButton({ children }: { children: ReactNode }) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverTriggerButton must be used within PopoverTrigger");

  return (
    <Pressable onPress={context.open} accessibilityRole="button" accessibilityLabel="Open popover">
      {children}
    </Pressable>
  );
}

export function Popover({ children, className }: PopoverProps) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("Popover must be used within PopoverTrigger");

  const contentScale = useRef(new Animated.Value(0.9)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (context.isOpen) {
      contentScale.setValue(0.9);
      contentOpacity.setValue(0);
      Animated.parallel([
        Animated.spring(contentScale, { toValue: 1, useNativeDriver: true, damping: 15, stiffness: 250 }),
        Animated.timing(contentOpacity, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
    }
  }, [context.isOpen, contentScale, contentOpacity]);

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="none"
      onRequestClose={context.close}
    >
      <Pressable className="flex-1 justify-center items-center" onPress={context.close}>
        <Animated.View
          style={{ transform: [{ scale: contentScale }], opacity: contentOpacity }}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            className={cn(
              "rounded-xl bg-white dark:bg-neutral-900 p-4 shadow-lg mx-8 border border-neutral-200 dark:border-neutral-800",
              className,
            )}
            accessibilityRole="none"
            accessibilityViewIsModal
          >
            {children}
          </Pressable>
        </Animated.View>
      </Pressable>
    </RNModal>
  );
}
