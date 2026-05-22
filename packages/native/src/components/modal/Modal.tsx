import { Modal as RNModal, View, Text, Pressable, Animated, Platform } from "react-native";
import { createContext, useContext, useState, useEffect, useRef, cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import { useColorScheme } from "nativewind";

interface ModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export interface ModalProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: ReactNode;
}

export interface ModalContentProps {
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen: controlledOpen, defaultOpen = false, onOpenChange, children }: ModalProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
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
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ children }: { children: ReactNode }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within Modal");

  // If child is a component with onPress (like Button), inject onPress
  if (isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      onPress: () => {
        const childOnPress = (children as ReactElement<any>).props.onPress;
        childOnPress?.();
        context.open();
      },
    });
  }

  return (
    <Pressable
      onPress={context.open}
      accessibilityRole="button"
      accessibilityLabel="Open dialog"
    >
      {children}
    </Pressable>
  );
}

const sizeWidths: Record<string, number> = {
  sm: 280,
  md: 340,
  lg: 400,
  xl: 460,
};

export function ModalContent({ title, size = "md", children }: ModalContentProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContent must be used within Modal");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    if (context.isOpen) {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, damping: 18, stiffness: 250 }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.95);
    }
  }, [context.isOpen, fadeAnim, scaleAnim]);

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="none"
      onRequestClose={context.close}
    >
      <Pressable
        onPress={context.close}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <Animated.View
          style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            accessibilityRole="none"
            accessibilityLabel={title || "Dialog"}
            accessibilityViewIsModal
            style={{
              width: sizeWidths[size],
              borderRadius: 16,
              backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
              padding: 24,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.25,
              shadowRadius: 24,
              ...(Platform.OS === "android" ? { elevation: 10 } : {}),
            }}
          >
            {title && (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: isDark ? "#ffffff" : "#171717",
                  marginBottom: 16,
                }}
              >
                {title}
              </Text>
            )}
            {children}
          </Pressable>
        </Animated.View>
      </Pressable>
    </RNModal>
  );
}
