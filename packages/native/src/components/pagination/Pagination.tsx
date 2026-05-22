import { View, Text, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
  siblings?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const cellSizes: Record<string, { height: number; minWidth: number; paddingHorizontal: number }> = {
  sm: { height: 28, minWidth: 28, paddingHorizontal: 4 },
  md: { height: 36, minWidth: 36, paddingHorizontal: 8 },
  lg: { height: 44, minWidth: 44, paddingHorizontal: 12 },
};

const fontSizes: Record<string, number> = {
  sm: 12,
  md: 14,
  lg: 16,
};

function getPages(total: number, current: number, siblings: number): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);

  pages.push(1);
  if (left > 2) pages.push("...");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push("...");
  if (total > 1) pages.push(total);

  return pages;
}

export function Pagination({
  total,
  current,
  onChange,
  siblings = 1,
  size = "md",
}: PaginationProps) {
  const pages = getPages(total, current, siblings);
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const cell = cellSizes[size];
  const fontSize = fontSizes[size];

  const ArrowButton = ({ direction, disabled }: { direction: "prev" | "next"; disabled: boolean }) => {
    const [pressed, setPressed] = useState(false);
    return (
      <Pressable
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={() => {
          if (disabled) return;
          selection();
          onChange(direction === "prev" ? current - 1 : current + 1);
        }}
        disabled={disabled}
        accessibilityLabel={direction === "prev" ? "Previous page" : "Next page"}
        style={{
          height: cell.height,
          minWidth: cell.minWidth,
          paddingHorizontal: cell.paddingHorizontal,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          opacity: disabled ? 0.4 : 1,
          backgroundColor: pressed && !disabled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)") : "transparent",
        }}
      >
        <Text style={{ fontSize: fontSize + 4, color: isDark ? "#d4d4d4" : "#404040" }}>
          {direction === "prev" ? "‹" : "›"}
        </Text>
      </Pressable>
    );
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <ArrowButton direction="prev" disabled={current === 1} />

        {pages.map((page, i) => {
          if (page === "...") {
            return (
              <View
                key={`ellipsis-${i}`}
                style={{
                  height: cell.height,
                  minWidth: cell.minWidth,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize, color: isDark ? "#525252" : "#a3a3a3" }}>…</Text>
              </View>
            );
          }

          const isActive = page === current;
          return (
            <PageButton
              key={page}
              page={page}
              isActive={isActive}
              isDark={isDark}
              cell={cell}
              fontSize={fontSize}
              onPress={() => {
                selection();
                onChange(page);
              }}
            />
          );
        })}

        <ArrowButton direction="next" disabled={current === total} />
      </View>
    </ScrollView>
  );
}

function PageButton({
  page,
  isActive,
  isDark,
  cell,
  fontSize,
  onPress,
}: {
  page: number;
  isActive: boolean;
  isDark: boolean;
  cell: { height: number; minWidth: number; paddingHorizontal: number };
  fontSize: number;
  onPress: () => void;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      accessibilityLabel={`Page ${page}`}
      accessibilityState={isActive ? { selected: true } : undefined}
      style={{
        height: cell.height,
        minWidth: cell.minWidth,
        paddingHorizontal: cell.paddingHorizontal,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: isActive
          ? "#4f46e5"
          : pressed
            ? isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"
            : "transparent",
      }}
    >
      <Text
        style={{
          fontWeight: "500",
          fontSize,
          color: isActive ? "#ffffff" : isDark ? "#d4d4d4" : "#404040",
        }}
      >
        {page}
      </Text>
    </Pressable>
  );
}
