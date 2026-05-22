import { View, Pressable, Text } from "react-native";
import { Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface ButtonProps {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
  onPress?: () => void;
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
  neutral: "#ffffff",
  danger: "#dc2626",
  success: "#059669",
  warning: "#f59e0b",
};

const outlineBorder: Record<string, string> = {
  primary: "#818cf8",
  neutral: "#a3a3a3",
  danger: "#f87171",
  success: "#34d399",
  warning: "#fbbf24",
};

const outlineBorderDark: Record<string, string> = {
  primary: "#6366f1",
  neutral: "#525252",
  danger: "#ef4444",
  success: "#10b981",
  warning: "#d97706",
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

const ghostText = outlineText;
const ghostTextDark = outlineTextDark;

const linkText = outlineText;
const linkTextDark = outlineTextDark;

const sizePadding: Record<string, { paddingHorizontal: number; paddingVertical: number }> = {
  sm: { paddingHorizontal: 12, paddingVertical: 6 },
  md: { paddingHorizontal: 16, paddingVertical: 10 },
  lg: { paddingHorizontal: 24, paddingVertical: 14 },
};

const textFontSize: Record<string, number> = {
  sm: 14,
  md: 14,
  lg: 16,
};

export function Button({
  variant = "solid",
  size = "md",
  color = "primary",
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  className,
  onPress,
  ...props
}: ButtonProps) {
  const { selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  // Container style
  const containerStyle: Record<string, unknown> = {
    borderRadius: 8,
    alignSelf: fullWidth ? "stretch" : ("flex-start" as const),
  };

  if (variant === "solid") {
    containerStyle.backgroundColor = isDark ? solidBgDark[color] : solidBg[color];
    containerStyle.borderWidth = 2;
    containerStyle.borderColor = isDark ? solidBgDark[color] : solidBg[color];
  } else if (variant === "outline") {
    containerStyle.borderWidth = 2;
    containerStyle.borderColor = isDark ? outlineBorderDark[color] : outlineBorder[color];
  }

  if (disabled || loading) {
    containerStyle.opacity = 0.5;
  }

  // Text color
  let textColor: string;
  if (variant === "solid") {
    textColor = isDark ? solidTextDark[color] : solidText[color];
  } else if (variant === "outline") {
    textColor = isDark ? outlineTextDark[color] : outlineText[color];
  } else if (variant === "ghost") {
    textColor = isDark ? ghostTextDark[color] : ghostText[color];
  } else {
    textColor = isDark ? linkTextDark[color] : linkText[color];
  }

  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={() => selection()}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled || loading }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          ...sizePadding[size],
        }}
        {...props}
      >
        {loading ? (
          <Text
            style={{
              fontWeight: "500",
              fontSize: textFontSize[size],
              color: textColor,
            }}
          >
            Loading...
          </Text>
        ) : (
          Children.map(children, (child) => {
            if (typeof child === "string" || typeof child === "number") {
              return (
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: textFontSize[size],
                    color: textColor,
                    textDecorationLine: variant === "link" ? "underline" : "none",
                  }}
                >
                  {child}
                </Text>
              );
            }
            return child;
          })
        )}
      </Pressable>
    </View>
  );
}
