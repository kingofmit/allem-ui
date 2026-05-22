import { Modal as RNModal, View, Text, Pressable, Animated, useWindowDimensions, Platform } from "react-native";
import { createContext, useContext, useState, useEffect, useRef, cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface DrawerContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DrawerContext = createContext<DrawerContextValue | null>(null);

export interface DrawerProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: ReactNode;
}

export interface DrawerContentProps {
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
}

export function Drawer({ isOpen: controlledOpen, defaultOpen = false, onOpenChange, children }: DrawerProps) {
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
    <DrawerContext.Provider value={{ isOpen, open, close }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function DrawerTrigger({ children }: { children: ReactNode }) {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("DrawerTrigger must be used within Drawer");

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
      accessibilityLabel="Open drawer"
    >
      {children}
    </Pressable>
  );
}

const horizontalSizeValues: Record<string, number> = {
  sm: 256,
  md: 320,
  lg: 384,
  xl: 448,
};

const verticalFractions: Record<string, number> = {
  sm: 0.25,
  md: 0.33,
  lg: 0.5,
  xl: 0.75,
};

export function DrawerContent({ title, placement = "right", size = "md", children }: DrawerContentProps) {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("DrawerContent must be used within Drawer");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();

  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const isHorizontal = placement === "left" || placement === "right";
  const axis = isHorizontal ? "translateX" : "translateY";
  const fromValue =
    placement === "left" ? -screenWidth :
    placement === "right" ? screenWidth :
    placement === "top" ? -screenHeight : screenHeight;

  const slideAnim = useRef(new Animated.Value(fromValue)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (context.isOpen) {
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: 0, useNativeDriver: true, damping: 20, stiffness: 200 }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    } else {
      slideAnim.setValue(fromValue);
      fadeAnim.setValue(0);
    }
  }, [context.isOpen, slideAnim, fadeAnim, fromValue]);

  const drawerWidth = isHorizontal ? horizontalSizeValues[size] : undefined;
  const drawerHeight = !isHorizontal ? screenHeight * verticalFractions[size] : undefined;

  const positionStyle: any = {
    position: "absolute",
    backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
    paddingHorizontal: 24,
    paddingTop: 24 + insets.top,
    paddingBottom: 24 + insets.bottom,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    ...(Platform.OS === "android" ? { elevation: 10 } : {}),
  };

  if (placement === "left") {
    positionStyle.left = 0;
    positionStyle.top = 0;
    positionStyle.bottom = 0;
    positionStyle.borderRightWidth = 1;
    positionStyle.borderRightColor = isDark ? "#262626" : "#e5e5e5";
  } else if (placement === "right") {
    positionStyle.right = 0;
    positionStyle.top = 0;
    positionStyle.bottom = 0;
    positionStyle.borderLeftWidth = 1;
    positionStyle.borderLeftColor = isDark ? "#262626" : "#e5e5e5";
  } else if (placement === "top") {
    positionStyle.left = 0;
    positionStyle.right = 0;
    positionStyle.top = 0;
    positionStyle.paddingTop = 24 + insets.top;
    positionStyle.borderBottomWidth = 1;
    positionStyle.borderBottomColor = isDark ? "#262626" : "#e5e5e5";
  } else {
    positionStyle.left = 0;
    positionStyle.right = 0;
    positionStyle.bottom = 0;
    positionStyle.paddingBottom = 24 + insets.bottom;
    positionStyle.borderTopWidth = 1;
    positionStyle.borderTopColor = isDark ? "#262626" : "#e5e5e5";
    positionStyle.borderTopLeftRadius = 16;
    positionStyle.borderTopRightRadius = 16;
  }

  if (drawerWidth) positionStyle.width = drawerWidth;
  if (drawerHeight) positionStyle.height = drawerHeight;

  return (
    <RNModal
      visible={context.isOpen}
      transparent
      animationType="none"
      onRequestClose={context.close}
    >
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          onPress={context.close}
        />
        <Animated.View
          accessibilityRole="none"
          accessibilityLabel={title || "Drawer"}
          accessibilityViewIsModal
          style={{
            ...positionStyle,
            transform: [{ [axis]: slideAnim }],
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
        </Animated.View>
      </Animated.View>
    </RNModal>
  );
}
