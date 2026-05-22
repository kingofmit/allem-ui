import { View, Text, PanResponder, Animated, LayoutChangeEvent, Platform } from "react-native";
import { useState, useRef, useCallback } from "react";
import { cn } from "../../utils/cn";

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

const trackHeights: Record<string, string> = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2",
};

const thumbSizes: Record<string, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

const thumbStyles: Record<string, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

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
  className,
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const percent = ((value - minValue) / (maxValue - minValue)) * 100;

  const trackWidth = useRef(0);
  const thumbScale = useRef(new Animated.Value(1)).current;
  const thumbSize = thumbSizes[size];

  const snapToStep = useCallback(
    (rawValue: number) => {
      const clamped = Math.min(maxValue, Math.max(minValue, rawValue));
      return Math.round((clamped - minValue) / step) * step + minValue;
    },
    [minValue, maxValue, step],
  );

  const updateValue = useCallback(
    (locationX: number) => {
      if (trackWidth.current <= 0) return;
      const ratio = Math.max(0, Math.min(1, locationX / trackWidth.current));
      const rawValue = minValue + ratio * (maxValue - minValue);
      const snapped = snapToStep(rawValue);
      if (controlledValue === undefined) setInternalValue(snapped);
      onChange?.(snapped);
    },
    [minValue, maxValue, controlledValue, onChange, snapToStep],
  );

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isDisabled,
      onMoveShouldSetPanResponder: () => !isDisabled,
      onPanResponderGrant: (evt) => {
        Animated.spring(thumbScale, {
          toValue: 1.3,
          useNativeDriver: true,
          tension: 100,
          friction: 5,
        }).start();
        updateValue(evt.nativeEvent.locationX);
      },
      onPanResponderMove: (evt) => {
        updateValue(evt.nativeEvent.locationX);
      },
      onPanResponderRelease: () => {
        Animated.spring(thumbScale, {
          toValue: 1,
          useNativeDriver: true,
          tension: 100,
          friction: 5,
        }).start();
      },
    }),
  ).current;

  const onTrackLayout = (e: LayoutChangeEvent) => {
    trackWidth.current = e.nativeEvent.layout.width;
  };

  return (
    <View
      className={cn("gap-2 w-full", isDisabled && "opacity-50", className)}
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
        <View className="flex-row items-center justify-between">
          {label && (
            <Text className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </Text>
          )}
          {showOutput && (
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">
              {value}
            </Text>
          )}
        </View>
      )}
      <View
        onLayout={onTrackLayout}
        className={cn(
          "relative w-full rounded-full bg-neutral-200 dark:bg-neutral-700",
          trackHeights[size],
        )}
        style={{ minHeight: thumbSize + 16, justifyContent: "center" }}
        {...panResponder.panHandlers}
      >
        <View
          className={cn(
            "absolute rounded-full bg-indigo-600 dark:bg-indigo-500",
            trackHeights[size],
          )}
          style={{ width: `${percent}%` }}
        />
        <Animated.View
          style={{
            position: "absolute",
            left: `${percent}%`,
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: "#ffffff",
            borderWidth: 2,
            borderColor: "#4f46e5",
            // iOS shadow
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.15,
            shadowRadius: 3,
            // Android elevation
            ...(Platform.OS === "android" ? { elevation: 3 } : {}),
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
