import { View, Text, Pressable, Modal, Animated, useWindowDimensions, PanResponder, Platform } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[];
  title?: string;
  showHandle?: boolean;
  className?: string;
}

export function BottomSheet({
  open,
  onClose,
  children,
  snapPoints = [0.5],
  title,
  showHandle = true,
}: BottomSheetProps) {
  const { height: screenHeight } = useWindowDimensions();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const currentSnap = useRef(0);
  const maxHeight = screenHeight * snapPoints[snapPoints.length - 1];
  const { trigger } = useHaptic();

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const snapPointsRef = useRef(snapPoints);
  snapPointsRef.current = snapPoints;
  const screenHeightRef = useRef(screenHeight);
  screenHeightRef.current = screenHeight;

  const animateToSnap = useCallback(
    (snapIndex: number) => {
      const h = screenHeightRef.current;
      const snaps = snapPointsRef.current;
      const snapHeight = h * snaps[snapIndex];
      currentSnap.current = snapIndex;
      trigger("light");
      Animated.spring(translateY, {
        toValue: h - snapHeight,
        useNativeDriver: true,
        damping: 20,
        stiffness: 150,
      }).start();
    },
    [translateY, trigger],
  );

  const animateToSnapRef = useRef(animateToSnap);
  animateToSnapRef.current = animateToSnap;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gs) => Math.abs(gs.dy) > 5,
      onPanResponderMove: (_, gs) => {
        const h = screenHeightRef.current;
        const snaps = snapPointsRef.current;
        const currentSnapHeight = h * snaps[currentSnap.current];
        const mh = h * snaps[snaps.length - 1];
        const newY = h - currentSnapHeight + gs.dy;
        if (newY >= h - mh) {
          translateY.setValue(newY);
        }
      },
      onPanResponderRelease: (_, gs) => {
        const snaps = snapPointsRef.current;
        if (gs.dy > 100 || gs.vy > 0.5) {
          if (currentSnap.current > 0) {
            animateToSnapRef.current(currentSnap.current - 1);
          } else {
            onCloseRef.current();
          }
        } else if (gs.dy < -100 || gs.vy < -0.5) {
          if (currentSnap.current < snaps.length - 1) {
            animateToSnapRef.current(currentSnap.current + 1);
          } else {
            animateToSnapRef.current(currentSnap.current);
          }
        } else {
          animateToSnapRef.current(currentSnap.current);
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (open) {
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      animateToSnap(0);
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: screenHeight,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
      currentSnap.current = 0;
    }
  }, [open, animateToSnap, translateY, backdropOpacity, screenHeight]);

  return (
    <Modal visible={open} transparent animationType="none" onRequestClose={onClose}>
      <View style={{ flex: 1 }}>
        {/* Backdrop */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            opacity: backdropOpacity,
          }}
        >
          <Pressable style={{ flex: 1 }} onPress={onClose} />
        </Animated.View>

        {/* Sheet */}
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: maxHeight,
            transform: [{ translateY }],
            backgroundColor: isDark ? "#171717" : "#ffffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: isDark ? 0.4 : 0.15,
            shadowRadius: 16,
            ...(Platform.OS === "android" ? { elevation: 24 } : {}),
          }}
          {...panResponder.panHandlers}
        >
          {/* Handle */}
          {showHandle && (
            <View style={{ alignItems: "center", paddingTop: 12, paddingBottom: 8 }}>
              <View
                style={{
                  width: 36,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)",
                }}
              />
            </View>
          )}

          {/* Title */}
          {title && (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  textAlign: "center",
                  color: isDark ? "#ffffff" : "#171717",
                }}
              >
                {title}
              </Text>
            </View>
          )}

          {/* Content */}
          <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 }}>
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
