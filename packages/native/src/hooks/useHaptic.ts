type HapticStyle = "light" | "medium" | "heavy" | "success" | "warning" | "error";

let Haptics: any = null;

try {
  Haptics = require("expo-haptics");
} catch {
  // expo-haptics not installed — haptic calls will be no-ops
}

export function useHaptic() {
  const trigger = (style: HapticStyle = "light") => {
    if (!Haptics) return;

    switch (style) {
      case "light":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case "medium":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case "heavy":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
      case "success":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
      case "warning":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        break;
      case "error":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        break;
    }
  };

  const selection = () => {
    if (!Haptics) return;
    Haptics.selectionAsync();
  };

  return { trigger, selection };
}
