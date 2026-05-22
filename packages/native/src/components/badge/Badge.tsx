import { View, Text } from "react-native";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

export interface BadgeProps {
  variant?: "solid" | "outline" | "subtle";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const solidBg: Record<string, string> = {
  primary: "#4f46e5",
  neutral: "#171717",
  danger: "#dc2626",
  success: "#059669",
  warning: "#f59e0b",
};

const solidBgDark: Record<string, string> = {
  primary: "#4f46e5",
  neutral: "#e5e5e5",
  danger: "#dc2626",
  success: "#059669",
  warning: "#f59e0b",
};

const subtleBg: Record<string, string> = {
  primary: "rgba(79,70,229,0.08)",
  neutral: "rgba(163,163,163,0.1)",
  danger: "rgba(220,38,38,0.08)",
  success: "rgba(5,150,105,0.08)",
  warning: "rgba(245,158,11,0.08)",
};

const subtleBgDark: Record<string, string> = {
  primary: "rgba(79,70,229,0.15)",
  neutral: "rgba(163,163,163,0.12)",
  danger: "rgba(220,38,38,0.15)",
  success: "rgba(5,150,105,0.15)",
  warning: "rgba(245,158,11,0.15)",
};

const outlineBorder: Record<string, string> = {
  primary: "#c7d2fe",
  neutral: "#d4d4d4",
  danger: "#fecaca",
  success: "#a7f3d0",
  warning: "#fde68a",
};

const outlineBorderDark: Record<string, string> = {
  primary: "#3730a3",
  neutral: "#404040",
  danger: "#7f1d1d",
  success: "#064e3b",
  warning: "#78350f",
};

const solidText: Record<string, string> = {
  primary: "#ffffff",
  neutral: "#ffffff",
  danger: "#ffffff",
  success: "#ffffff",
  warning: "#ffffff",
};

const solidTextDark: Record<string, string> = {
  primary: "#ffffff",
  neutral: "#171717",
  danger: "#ffffff",
  success: "#ffffff",
  warning: "#ffffff",
};

const subtleText: Record<string, string> = {
  primary: "#4338ca",
  neutral: "#404040",
  danger: "#b91c1c",
  success: "#047857",
  warning: "#b45309",
};

const subtleTextDark: Record<string, string> = {
  primary: "#a5b4fc",
  neutral: "#d4d4d4",
  danger: "#fca5a5",
  success: "#6ee7b7",
  warning: "#fcd34d",
};

const outlineText: Record<string, string> = {
  primary: "#4f46e5",
  neutral: "#404040",
  danger: "#dc2626",
  success: "#059669",
  warning: "#d97706",
};

const outlineTextDark: Record<string, string> = {
  primary: "#818cf8",
  neutral: "#d4d4d4",
  danger: "#f87171",
  success: "#34d399",
  warning: "#fbbf24",
};

const sizePadding: Record<string, { paddingHorizontal: number; paddingVertical: number }> = {
  sm: { paddingHorizontal: 6, paddingVertical: 2 },
  md: { paddingHorizontal: 8, paddingVertical: 3 },
  lg: { paddingHorizontal: 10, paddingVertical: 4 },
};

const textFontSize: Record<string, number> = { sm: 11, md: 12, lg: 13 };

export function Badge({
  variant = "subtle",
  color = "primary",
  size = "md",
  icon,
  children,
}: BadgeProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const containerStyle: any = {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 999,
    gap: 4,
    ...sizePadding[size],
  };

  let textColor: string;

  if (variant === "solid") {
    containerStyle.backgroundColor = isDark ? solidBgDark[color] : solidBg[color];
    textColor = isDark ? solidTextDark[color] : solidText[color];
  } else if (variant === "outline") {
    containerStyle.borderWidth = 1;
    containerStyle.borderColor = isDark ? outlineBorderDark[color] : outlineBorder[color];
    textColor = isDark ? outlineTextDark[color] : outlineText[color];
  } else {
    containerStyle.backgroundColor = isDark ? subtleBgDark[color] : subtleBg[color];
    textColor = isDark ? subtleTextDark[color] : subtleText[color];
  }

  return (
    <View
      accessibilityRole="text"
      accessibilityLabel={typeof children === "string" ? children : undefined}
      style={containerStyle}
    >
      {icon}
      <Text
        style={{
          fontSize: textFontSize[size],
          fontWeight: "600",
          color: textColor,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
