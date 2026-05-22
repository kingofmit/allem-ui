import { View, Text, Pressable, Animated, PanResponder } from "react-native";
import { useRef } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";

export interface SwipeAction {
  key: string;
  label: string;
  color: string;
  onPress: () => void;
  icon?: ReactNode;
}

export interface SwipeableRowProps {
  children: ReactNode;
  leftActions?: SwipeAction[];
  rightActions?: SwipeAction[];
  actionWidth?: number;
  className?: string;
}

export function SwipeableRow({
  children,
  leftActions = [],
  rightActions = [],
  actionWidth = 80,
}: SwipeableRowProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const lastOffset = useRef(0);
  const { trigger } = useHaptic();

  // Use refs so PanResponder always has current values
  const leftTotalRef = useRef(leftActions.length * actionWidth);
  leftTotalRef.current = leftActions.length * actionWidth;
  const rightTotalRef = useRef(rightActions.length * actionWidth);
  rightTotalRef.current = rightActions.length * actionWidth;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gs) => {
        // Only claim horizontal swipes, let vertical scroll through
        return Math.abs(gs.dx) > Math.abs(gs.dy) && Math.abs(gs.dx) > 8;
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: (_, gs) => {
        const newX = lastOffset.current + gs.dx;
        const clamped = Math.max(-rightTotalRef.current, Math.min(leftTotalRef.current, newX));
        translateX.setValue(clamped);
      },
      onPanResponderRelease: (_, gs) => {
        let toValue = 0;

        if (gs.dx > 40 && leftTotalRef.current > 0) {
          toValue = leftTotalRef.current;
          trigger("light");
        } else if (gs.dx < -40 && rightTotalRef.current > 0) {
          toValue = -rightTotalRef.current;
          trigger("light");
        }

        lastOffset.current = toValue;
        Animated.spring(translateX, {
          toValue,
          useNativeDriver: true,
          damping: 20,
          stiffness: 200,
        }).start();
      },
    }),
  ).current;

  const close = () => {
    lastOffset.current = 0;
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      damping: 20,
      stiffness: 200,
    }).start();
  };

  return (
    <View
      style={{ overflow: "hidden", borderRadius: 12 }}
      accessibilityHint="Swipe to reveal actions"
    >
      {/* Left actions */}
      <View style={{ position: "absolute", left: 0, top: 0, bottom: 0, flexDirection: "row" }}>
        {leftActions.map((action) => (
          <View key={action.key} style={{ width: actionWidth, backgroundColor: action.color }}>
            <Pressable
              onPress={() => { action.onPress(); close(); }}
              accessibilityRole="button"
              accessibilityLabel={action.label}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {action.icon}
              <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "500", marginTop: 4 }}>
                {action.label}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>

      {/* Right actions */}
      <View style={{ position: "absolute", right: 0, top: 0, bottom: 0, flexDirection: "row" }}>
        {rightActions.map((action) => (
          <View key={action.key} style={{ width: actionWidth, backgroundColor: action.color }}>
            <Pressable
              onPress={() => { action.onPress(); close(); }}
              accessibilityRole="button"
              accessibilityLabel={action.label}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {action.icon}
              <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "500", marginTop: 4 }}>
                {action.label}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>

      {/* Sliding content */}
      <Animated.View
        style={{ transform: [{ translateX }] }}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
}
