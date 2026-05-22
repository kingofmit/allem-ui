import { View, Text, Pressable, Modal as RNModal, Platform } from "react-native";
import { createContext, useContext, useState, cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  className?: string;
}

export interface DropdownItemProps {
  id?: string;
  color?: "default" | "danger";
  onAction?: () => void;
  isDisabled?: boolean;
  icon?: ReactNode;
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

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      onPress: () => {
        const childOnPress = (children as ReactElement<any>).props.onPress;
        childOnPress?.();
        selection();
        context.open();
      },
    });
  }

  return (
    <Pressable onPress={() => { selection(); context.open(); }} accessibilityRole="button" accessibilityLabel="Open menu">
      {children}
    </Pressable>
  );
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenu must be used within Dropdown");
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
          {/* Handle bar */}
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

export function DropdownItem({
  color = "default",
  onAction,
  isDisabled = false,
  icon,
  children,
}: DropdownItemProps) {
  const context = useContext(DropdownContext);
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
        if (isDisabled) return;
        onAction?.();
        context?.close();
      }}
      disabled={isDisabled}
      accessibilityRole="menuitem"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      accessibilityState={{ disabled: isDisabled }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginHorizontal: 8,
        borderRadius: 10,
        backgroundColor: pressed ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)") : "transparent",
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      {icon && <View style={{ marginRight: 12 }}>{icon}</View>}
      <Text
        style={{
          fontSize: 16,
          color: textColor,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export function DropdownSeparator() {
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
