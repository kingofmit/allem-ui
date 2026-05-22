import { View, Text, Animated, Platform } from "react-native";
import { useState, useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface TooltipProps {
  content: string;
  placement?: "top" | "bottom";
  children: ReactNode;
  className?: string;
}

export function Tooltip({ content, placement = "top", children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const { trigger } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visible) {
      opacity.setValue(0);
      scale.setValue(0.9);
      Animated.parallel([
        Animated.spring(opacity, { toValue: 1, useNativeDriver: true, tension: 100, friction: 8 }),
        Animated.spring(scale, { toValue: 1, useNativeDriver: true, tension: 100, friction: 8 }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 0.9, duration: 150, useNativeDriver: true }),
      ]).start();
    }
  }, [visible, opacity, scale]);

  const show = useCallback(() => {
    if (dismissTimer.current) {
      clearTimeout(dismissTimer.current);
      dismissTimer.current = null;
    }
    trigger("light");
    setVisible(true);
  }, [trigger]);

  const scheduleDismiss = useCallback(() => {
    dismissTimer.current = setTimeout(() => {
      setVisible(false);
    }, 1500);
  }, []);

  const handleTouchStart = useCallback(() => {
    longPressTimer.current = setTimeout(() => {
      show();
    }, 300);
  }, [show]);

  const handleTouchEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    if (visible) {
      scheduleDismiss();
    }
  }, [visible, scheduleDismiss]);

  useEffect(() => {
    return () => {
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
    };
  }, []);

  const tooltipStyle: any = {
    position: "absolute",
    left: 0,
    zIndex: 9999,
    opacity,
    transform: [{ scale }],
  };

  if (placement === "top") {
    tooltipStyle.bottom = triggerHeight + 8;
  } else {
    tooltipStyle.top = triggerHeight + 8;
  }

  return (
    <View style={{ overflow: "visible", zIndex: visible ? 9999 : 0 }}>
      <View
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onLayout={(e) => setTriggerHeight(e.nativeEvent.layout.height)}
        accessibilityRole="button"
        accessibilityHint="Long press to show tooltip"
      >
        {children}
      </View>
      {visible && (
        <Animated.View
          style={tooltipStyle}
          accessibilityRole="text"
          accessibilityLiveRegion="polite"
        >
          <View
            style={{
              borderRadius: 8,
              backgroundColor: isDark ? "#e5e5e5" : "#171717",
              paddingHorizontal: 12,
              paddingVertical: 6,
              alignSelf: "flex-start",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              ...(Platform.OS === "android" ? { elevation: 4 } : {}),
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: isDark ? "#171717" : "#ffffff",
              }}
            >
              {content}
            </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}
