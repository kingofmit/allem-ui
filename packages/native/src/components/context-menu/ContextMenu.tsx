import { View, Text, Pressable, Modal as RNModal } from "react-native";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export interface ContextMenuSeparatorProps {
  className?: string;
}

export function ContextMenu({ children }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { trigger } = useHaptic();

  return (
    <ContextMenuCtx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      <Pressable
        onLongPress={() => {
          trigger("medium");
          setIsOpen(true);
        }}
        delayLongPress={500}
        accessibilityRole="button"
        accessibilityHint="Long press to open context menu"
      >
        {children}
      </Pressable>
    </ContextMenuCtx.Provider>
  );
}

export function ContextMenuContent({ children }: ContextMenuContentProps) {
  const context = useContext(ContextMenuCtx);
  if (!context) throw new Error("ContextMenuContent must be used within ContextMenu");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="fade"
      onRequestClose={context.close}
    >
      <Pressable
        onPress={context.close}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <View
          style={{
            backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingBottom: 8 + insets.bottom,
          }}
        >
          <View style={{ alignItems: "center", paddingVertical: 12 }}>
            <View
              style={{
                height: 4,
                width: 40,
                borderRadius: 2,
                backgroundColor: isDark ? "#525252" : "#d4d4d4",
              }}
            />
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
  icon,
  children,
}: ContextMenuItemProps) {
  const context = useContext(ContextMenuCtx);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [pressed, setPressed] = useState(false);

  const textColor =
    color === "danger"
      ? isDark ? "#f87171" : "#dc2626"
      : isDark ? "#d4d4d4" : "#404040";

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => {
        if (disabled) return;
        onAction?.();
        context?.close();
      }}
      disabled={disabled}
      accessibilityRole="menuitem"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityState={{ disabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginHorizontal: 8,
        borderRadius: 10,
        backgroundColor: pressed ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)") : "transparent",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {icon && <View style={{ marginRight: 12 }}>{icon}</View>}
      <Text style={{ fontSize: 16, color: textColor }}>
        {children}
      </Text>
    </Pressable>
  );
}

export function ContextMenuSeparator() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        height: 1,
        backgroundColor: isDark ? "#262626" : "#e5e5e5",
        marginHorizontal: 16,
        marginVertical: 4,
      }}
    />
  );
}
