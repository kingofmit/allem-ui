import { View, Text, Pressable, Animated, Platform } from "react-native";
import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "danger" | "warning";
  duration?: number;
}

interface ToastContextValue {
  toast: (options: Omit<ToastData, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let counter = 0;

export interface ToastProviderProps {
  children: ReactNode;
  position?: "top-center" | "bottom-center";
}

const variantBorderColors: Record<string, string> = {
  default: "#a3a3a3",
  success: "#10b981",
  danger: "#ef4444",
  warning: "#f59e0b",
};

function ToastItem({ toast: t, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-10)).current;
  const { trigger } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    const hapticMap: Record<string, "light" | "success" | "error" | "warning"> = {
      default: "light",
      success: "success",
      danger: "error",
      warning: "warning",
    };
    trigger(hapticMap[t.variant || "default"]);

    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.spring(translateY, { toValue: 0, useNativeDriver: true, damping: 15, stiffness: 200 }),
    ]).start();

    if (t.duration !== 0) {
      const timeout = setTimeout(() => {
        Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
          onDismiss(t.id);
        });
      }, t.duration || 5000);
      return () => clearTimeout(timeout);
    }
  }, [t.id, t.duration, opacity, onDismiss]);

  const borderColor = variantBorderColors[t.variant || "default"];

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ translateY }],
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 12,
        backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
        padding: 14,
        borderWidth: 1,
        borderColor: isDark ? "#262626" : "#e5e5e5",
        borderLeftWidth: 4,
        borderLeftColor: borderColor,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        ...(Platform.OS === "android" ? { elevation: 6 } : {}),
      }}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={`${t.title}${t.description ? `. ${t.description}` : ""}`}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: isDark ? "#ffffff" : "#171717",
            }}
          >
            {t.title}
          </Text>
          {t.description && (
            <Text
              style={{
                fontSize: 12,
                color: isDark ? "#a3a3a3" : "#737373",
                marginTop: 3,
              }}
            >
              {t.description}
            </Text>
          )}
        </View>
        <Pressable
          onPress={() => onDismiss(t.id)}
          accessibilityRole="button"
          accessibilityLabel="Dismiss notification"
          style={{ padding: 2 }}
        >
          <Text style={{ fontSize: 16, color: isDark ? "#525252" : "#a3a3a3" }}>✕</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

export function ToastProvider({ children, position = "bottom-center" }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const insets = useSafeAreaInsets();

  const toast = useCallback((options: Omit<ToastData, "id">) => {
    const id = `toast-${++counter}`;
    setToasts((prev) => [...prev, { ...options, id }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const isTop = position === "top-center";

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 50,
          ...(isTop ? { top: insets.top + 8 } : { bottom: insets.bottom + 8 }),
        }}
        pointerEvents="box-none"
      >
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
        ))}
      </View>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
