import { View, Text, Animated, LayoutChangeEvent, Platform, GestureResponderEvent } from "react-native";
import { useState, useRef, useCallback } from "react";
import { useColorScheme } from "nativewind";

export interface SliderProps {
  label?: string;
  showOutput?: boolean;
  size?: "sm" | "md" | "lg";
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  isDisabled?: boolean;
  className?: string;
}

const trackHeights: Record<string, number> = { sm: 4, md: 6, lg: 8 };
const thumbSizes: Record<string, number> = { sm: 18, md: 22, lg: 28 };

export function Slider({
  label,
  showOutput = false,
  size = "md",
  minValue = 0,
  maxValue = 100,
  step = 1,
  value: controlledValue,
  defaultValue = 50,
  onChange,
  isDisabled = false,
}: SliderProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const percent = ((value - minValue) / (maxValue - minValue)) * 100;

  const trackLayoutRef = useRef({ x: 0, width: 0 });
  const thumbScale = useRef(new Animated.Value(1)).current;
  const thumbSize = thumbSizes[size];
  const trackHeight = trackHeights[size];

  // Use refs to avoid stale closures in gesture handlers
  const valueRef = useRef({ controlledValue, onChange, minValue, maxValue, step });
  valueRef.current = { controlledValue, onChange, minValue, maxValue, step };

  const computeValue = useCallback((pageX: number) => {
    const { width } = trackLayoutRef.current;
    if (width <= 0) return;
    const { controlledValue: cv, onChange: oc, minValue: min, maxValue: max, step: s } = valueRef.current;

    // Use pageX relative to the track's position on screen
    const trackLeft = trackLayoutRef.current.x;
    const localX = pageX - trackLeft;
    const ratio = Math.max(0, Math.min(1, localX / width));
    const rawValue = min + ratio * (max - min);
    const clamped = Math.min(max, Math.max(min, rawValue));
    const snapped = Math.round((clamped - min) / s) * s + min;

    if (cv === undefined) setInternalValue(snapped);
    oc?.(snapped);
  }, []);

  const onTrackLayout = (e: LayoutChangeEvent) => {
    // measure on screen for accurate pageX comparison
    (e.target as any)?.measureInWindow?.((x: number, _y: number, w: number) => {
      trackLayoutRef.current = { x, width: w };
    });
    // fallback
    trackLayoutRef.current.width = e.nativeEvent.layout.width;
  };

  const handleStart = (e: GestureResponderEvent) => {
    if (isDisabled) return;
    Animated.spring(thumbScale, {
      toValue: 1.3,
      useNativeDriver: true,
      tension: 100,
      friction: 5,
    }).start();
    computeValue(e.nativeEvent.pageX);
  };

  const handleMove = (e: GestureResponderEvent) => {
    if (isDisabled) return;
    computeValue(e.nativeEvent.pageX);
  };

  const handleEnd = () => {
    Animated.spring(thumbScale, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 5,
    }).start();
  };

  return (
    <View
      style={{
        gap: 8,
        width: "100%",
        opacity: isDisabled ? 0.5 : 1,
      }}
      accessibilityRole="adjustable"
      accessibilityLabel={label || "Slider"}
      accessibilityValue={{
        min: minValue,
        max: maxValue,
        now: value,
        text: `${value}`,
      }}
    >
      {(label || showOutput) && (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          {label && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: isDark ? "#d4d4d4" : "#404040",
              }}
            >
              {label}
            </Text>
          )}
          {showOutput && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: isDark ? "#818cf8" : "#4f46e5",
              }}
            >
              {value}
            </Text>
          )}
        </View>
      )}
      <View
        onLayout={onTrackLayout}
        onStartShouldSetResponder={() => !isDisabled}
        onMoveShouldSetResponder={() => !isDisabled}
        onResponderGrant={handleStart}
        onResponderMove={handleMove}
        onResponderRelease={handleEnd}
        onResponderTerminate={handleEnd}
        style={{
          position: "relative",
          width: "100%",
          minHeight: thumbSize + 12,
          justifyContent: "center",
        }}
      >
        {/* Track background */}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: isDark ? "#404040" : "#e5e5e5",
          }}
        />
        {/* Track fill */}
        <View
          style={{
            position: "absolute",
            left: 0,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: isDark ? "#818cf8" : "#4f46e5",
            width: `${percent}%`,
          }}
        />
        {/* Thumb */}
        <Animated.View
          style={{
            position: "absolute",
            left: `${percent}%`,
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: "#ffffff",
            borderWidth: 2.5,
            borderColor: isDark ? "#818cf8" : "#4f46e5",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.18,
            shadowRadius: 4,
            ...(Platform.OS === "android" ? { elevation: 4 } : {}),
            transform: [
              { translateX: -(thumbSize / 2) },
              { scale: thumbScale },
            ],
          }}
        />
      </View>
    </View>
  );
}
