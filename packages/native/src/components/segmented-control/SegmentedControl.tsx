import { View, Text, Pressable, Animated, LayoutChangeEvent, Platform } from "react-native";
import { useRef, useEffect, useState } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface SegmentedControlProps {
  segments: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const heights: Record<string, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

const fontSizes: Record<string, number> = {
  sm: 12,
  md: 14,
  lg: 16,
};

export function SegmentedControl({
  segments,
  selectedIndex,
  onChange,
  size = "md",
}: SegmentedControlProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const [segmentWidth, setSegmentWidth] = useState(0);
  const containerWidth = useRef(0);
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    containerWidth.current = width;
    const sw = width / segments.length;
    setSegmentWidth(sw);
    translateX.setValue(selectedIndex * sw);
  };

  useEffect(() => {
    if (segmentWidth > 0) {
      Animated.spring(translateX, {
        toValue: selectedIndex * segmentWidth,
        useNativeDriver: true,
        damping: 20,
        stiffness: 200,
      }).start();
    }
  }, [selectedIndex, segmentWidth, translateX]);

  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 12,
        backgroundColor: isDark ? "#262626" : "#e5e5e5",
        padding: 4,
        height: heights[size],
      }}
      onLayout={handleLayout}
    >
      {segmentWidth > 0 && (
        <Animated.View
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 2,
            width: segmentWidth - 4,
            borderRadius: 8,
            backgroundColor: isDark ? "#525252" : "#ffffff",
            transform: [{ translateX }],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            ...(Platform.OS === "android" ? { elevation: 2 } : {}),
          }}
        />
      )}

      {segments.map((segment, i) => {
        const isSelected = i === selectedIndex;
        return (
          <Pressable
            key={segment}
            onPress={() => {
              selection();
              onChange(i);
            }}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: fontSizes[size],
                color: isSelected
                  ? isDark
                    ? "#ffffff"
                    : "#171717"
                  : isDark
                    ? "#a3a3a3"
                    : "#737373",
              }}
            >
              {segment}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
