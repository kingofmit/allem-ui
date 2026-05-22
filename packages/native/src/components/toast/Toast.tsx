import { View, Text, Pressable, Animated } from "react-native";
import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

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

const variantBorderStyles: Record<string, string> = {
  default: "border-l-neutral-400 dark:border-l-neutral-500",
  success: "border-l-emerald-500 dark:border-l-emerald-400",
  danger: "border-l-red-500 dark:border-l-red-400",
  warning: "border-l-amber-500 dark:border-l-amber-400",
};

function ToastItem({ toast: t, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const { trigger } = useHaptic();

  useEffect(() => {
    const hapticMap: Record<string, "light" | "success" | "error" | "warning"> = {
      default: "light",
      success: "success",
      danger: "error",
      warning: "warning",
    };
    trigger(hapticMap[t.variant || "default"]);

    Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();

    if (t.duration !== 0) {
      const timeout = setTimeout(() => {
        Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
          onDismiss(t.id);
        });
      }, t.duration || 5000);
      return () => clearTimeout(timeout);
    }
  }, [t.id, t.duration, opacity, onDismiss]);

  return (
    <Animated.View
      className={cn(
        "mx-4 mb-2 rounded-xl bg-white dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 border-l-4 shadow-lg",
        variantBorderStyles[t.variant || "default"],
      )}
      style={{ opacity }}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={`${t.title}${t.description ? `. ${t.description}` : ""}`}
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-1 mr-2">
          <Text className="text-sm font-medium text-neutral-900 dark:text-white">
            {t.title}
          </Text>
          {t.description && (
            <Text className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {t.description}
            </Text>
          )}
        </View>
        <Pressable
          onPress={() => onDismiss(t.id)}
          accessibilityRole="button"
          accessibilityLabel="Dismiss notification"
        >
          <Text className="text-lg text-neutral-400 dark:text-neutral-500">✕</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

export function ToastProvider({ children, position = "bottom-center" }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

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
        className={cn(
          "absolute left-0 right-0 z-50",
          isTop ? "top-14" : "bottom-10",
        )}
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
