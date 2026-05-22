import { View, Text, Pressable, Animated, LayoutChangeEvent } from "react-native";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface TooltipProps {
  children: ReactNode;
  className?: string;
}

export interface TooltipContentProps {
  children: ReactNode;
  className?: string;
}

export function Tooltip({ children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const { trigger } = useHaptic();

  useEffect(() => {
    if (visible) {
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

  const onTriggerLayout = (e: LayoutChangeEvent) => {
    setTriggerHeight(e.nativeEvent.layout.height);
  };

  return (
    <View className={cn(className)}>
      <Pressable
        onLongPress={() => { trigger("light"); setVisible(true); }}
        onPressOut={() => setVisible(false)}
        delayLongPress={300}
        onLayout={onTriggerLayout}
        accessibilityRole="button"
        accessibilityHint="Long press to show tooltip"
      >
        {Array.isArray(children) ? children[0] : children}
      </Pressable>
      {visible && Array.isArray(children) && children[1] && (
        <Animated.View
          style={{
            opacity,
            transform: [{ scale }],
            position: "absolute",
            bottom: triggerHeight + 8,
            left: 0,
            zIndex: 50,
          }}
          accessibilityRole="text"
          accessibilityLiveRegion="polite"
        >
          {children[1]}
        </Animated.View>
      )}
    </View>
  );
}

export function TooltipContent({ children, className }: TooltipContentProps) {
  return (
    <View
      className={cn(
        "rounded-lg bg-neutral-900 dark:bg-neutral-100 px-3 py-1.5 shadow-lg",
        className,
      )}
    >
      <Text className="text-xs text-white dark:text-neutral-900">
        {children}
      </Text>
    </View>
  );
}
