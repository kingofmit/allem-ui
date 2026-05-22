import { View, Text, Pressable, Modal as RNModal, Animated, Platform, useWindowDimensions } from "react-native";
import { createContext, useContext, useState, useRef, useEffect, cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import { useColorScheme } from "nativewind";

interface TriggerLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PopoverContextValue {
  isOpen: boolean;
  open: (layout: TriggerLayout) => void;
  close: () => void;
  triggerLayout: TriggerLayout;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

export interface PopoverTriggerProps {
  children: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export interface PopoverProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function PopoverTrigger({ children, isOpen: controlledOpen, onOpenChange }: PopoverTriggerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [triggerLayout, setTriggerLayout] = useState<TriggerLayout>({ x: 0, y: 0, width: 0, height: 0 });
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const open = (layout: TriggerLayout) => {
    setTriggerLayout(layout);
    if (controlledOpen === undefined) setInternalOpen(true);
    onOpenChange?.(true);
  };

  const close = () => {
    if (controlledOpen === undefined) setInternalOpen(false);
    onOpenChange?.(false);
  };

  return (
    <PopoverContext.Provider value={{ isOpen, open, close, triggerLayout }}>
      {children}
    </PopoverContext.Provider>
  );
}

export function PopoverButton({ children }: { children: ReactNode }) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverButton must be used within PopoverTrigger");
  const buttonRef = useRef<View>(null);

  const handlePress = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      context.open({ x, y, width, height });
    });
  };

  if (isValidElement(children)) {
    return (
      <View ref={buttonRef} collapsable={false}>
        {cloneElement(children as ReactElement<any>, {
          onPress: () => {
            const childOnPress = (children as ReactElement<any>).props.onPress;
            childOnPress?.();
            handlePress();
          },
        })}
      </View>
    );
  }

  return (
    <View ref={buttonRef} collapsable={false}>
      <Pressable onPress={handlePress} accessibilityRole="button" accessibilityLabel="Open popover">
        {children}
      </Pressable>
    </View>
  );
}

export function Popover({ title, children }: PopoverProps) {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("Popover must be used within PopoverTrigger");
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const contentScale = useRef(new Animated.Value(0.3)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const [closing, setClosing] = useState(false);

  // Calculate offset from center of screen to center of trigger button
  const triggerCenterX = context.triggerLayout.x + context.triggerLayout.width / 2;
  const triggerCenterY = context.triggerLayout.y + context.triggerLayout.height / 2;
  const offsetX = triggerCenterX - screenWidth / 2;
  const offsetY = triggerCenterY - screenHeight / 2;

  useEffect(() => {
    if (context.isOpen) {
      setClosing(false);
      contentScale.setValue(0.2);
      contentOpacity.setValue(0);
      translateY.setValue(offsetY);
      translateX.setValue(offsetX);
      Animated.parallel([
        Animated.spring(contentScale, {
          toValue: 1,
          useNativeDriver: true,
          damping: 14,
          stiffness: 180,
          mass: 0.8,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          damping: 16,
          stiffness: 180,
          mass: 0.8,
        }),
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
          damping: 16,
          stiffness: 180,
          mass: 0.8,
        }),
        Animated.timing(contentOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  }, [context.isOpen, contentScale, contentOpacity, translateY, translateX, offsetX, offsetY]);

  const handleClose = () => {
    setClosing(true);
    Animated.parallel([
      Animated.timing(contentScale, { toValue: 0.2, duration: 250, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: offsetY, duration: 250, useNativeDriver: true }),
      Animated.timing(translateX, { toValue: offsetX, duration: 250, useNativeDriver: true }),
      Animated.timing(contentOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start(() => {
      setClosing(false);
      context.close();
    });
  };

  return (
    <RNModal
      visible={context.isOpen || closing}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <Pressable
        onPress={handleClose}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Animated.View
          style={{
            transform: [
              { translateX },
              { translateY },
              { scale: contentScale },
            ],
            opacity: contentOpacity,
          }}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            accessibilityRole="none"
            accessibilityViewIsModal
            style={{
              borderRadius: 14,
              backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
              padding: 20,
              marginHorizontal: 32,
              borderWidth: 1,
              borderColor: isDark ? "#262626" : "#e5e5e5",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 12,
              ...(Platform.OS === "android" ? { elevation: 8 } : {}),
              minWidth: 260,
            }}
          >
            {title && (
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: isDark ? "#ffffff" : "#171717",
                  marginBottom: 8,
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
