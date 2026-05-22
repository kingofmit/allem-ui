import { View, Text, Pressable, Modal, Animated, Platform } from "react-native";
import { useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useHaptic } from "../../hooks/useHaptic";
import { useColorScheme } from "nativewind";

export interface ActionSheetAction {
  key: string;
  label: string;
  onPress: () => void;
  destructive?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface ActionSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  actions: ActionSheetAction[];
  cancelLabel?: string;
  className?: string;
}

export function ActionSheet({
  open,
  onClose,
  title,
  message,
  actions,
  cancelLabel = "Cancel",
}: ActionSheetProps) {
  const translateY = useRef(new Animated.Value(300)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const { trigger, selection } = useHaptic();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    if (open) {
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          damping: 20,
          stiffness: 200,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 300,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [open, translateY, backdropOpacity]);

  const cardBg = isDark ? "#262626" : "#ffffff";
  const sep = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

  return (
    <Modal visible={open} transparent animationType="none" onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
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
            marginHorizontal: 8,
            marginBottom: 8,
            transform: [{ translateY }],
          }}
        >
          {/* Actions group — View for visuals */}
          <View
            style={{
              borderRadius: 16,
              backgroundColor: cardBg,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: isDark ? 0.4 : 0.12,
              shadowRadius: 12,
              ...(Platform.OS === "android" ? { elevation: 16 } : {}),
              overflow: "hidden",
            }}
          >
            {/* Title / Message */}
            {(title || message) && (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: sep,
                }}
              >
                {title && (
                  <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a3a3a3" : "#737373" }}>
                    {title}
                  </Text>
                )}
                {message && (
                  <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3", marginTop: 2 }}>
                    {message}
                  </Text>
                )}
              </View>
            )}

            {/* Action items — each is a View (visual) wrapping Pressable (interaction) */}
            {actions.map((action, i) => (
              <View
                key={action.key}
                style={{
                  borderBottomWidth: i < actions.length - 1 ? 1 : 0,
                  borderBottomColor: sep,
                  opacity: action.disabled ? 0.4 : 1,
                }}
              >
                <Pressable
                  onPress={() => {
                    action.destructive ? trigger("warning") : selection();
                    action.onPress();
                    onClose();
                  }}
                  disabled={action.disabled}
                  accessibilityRole="button"
                  accessibilityLabel={action.label}
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {action.icon}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: action.destructive ? "600" : "400",
                      color: action.destructive ? "#ef4444" : (isDark ? "#818cf8" : "#4f46e5"),
                    }}
                  >
                    {action.label}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>

          {/* Cancel button — View for visuals, Pressable inside */}
          <View
            style={{
              marginTop: 8,
              borderRadius: 16,
              backgroundColor: cardBg,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -1 },
              shadowOpacity: isDark ? 0.3 : 0.08,
              shadowRadius: 8,
              ...(Platform.OS === "android" ? { elevation: 8 } : {}),
            }}
          >
            <Pressable
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel={cancelLabel}
              style={{
                paddingVertical: 16,
                paddingHorizontal: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600", color: isDark ? "#818cf8" : "#4f46e5" }}>
                {cancelLabel}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
