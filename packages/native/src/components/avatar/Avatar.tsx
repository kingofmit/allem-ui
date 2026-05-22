import { View, Text, Image } from "react-native";
import { useColorScheme } from "nativewind";

export interface AvatarProps {
  src?: string | number;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "away" | "busy";
  className?: string;
}

const avatarSizes: Record<string, number> = { sm: 32, md: 40, lg: 56 };
const fontSizes: Record<string, number> = { sm: 12, md: 14, lg: 18 };
const statusSizes: Record<string, number> = { sm: 8, md: 10, lg: 14 };
const statusBorders: Record<string, number> = { sm: 1.5, md: 2, lg: 2.5 };

const statusColors: Record<string, string> = {
  online: "#10b981",
  offline: "#a3a3a3",
  away: "#f59e0b",
  busy: "#ef4444",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ src, alt, name, size = "md", status }: AvatarProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const s = avatarSizes[size];

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={alt || name || "Avatar"}
      style={{ width: s, height: s }}
    >
      {src ? (
        <Image
          source={typeof src === "number" ? src : { uri: src }}
          style={{
            width: s,
            height: s,
            borderRadius: s / 2,
          }}
          accessibilityLabel={alt || name || "Avatar"}
        />
      ) : (
        <View
          style={{
            width: s,
            height: s,
            borderRadius: s / 2,
            backgroundColor: isDark ? "rgba(79,70,229,0.2)" : "rgba(79,70,229,0.1)",
            alignItems: "center",
            justifyContent: "center",
          }}
          accessibilityLabel={name || "Avatar"}
        >
          <Text
            style={{
              fontSize: fontSizes[size],
              fontWeight: "600",
              color: isDark ? "#a5b4fc" : "#4338ca",
            }}
          >
            {name ? getInitials(name) : "?"}
          </Text>
        </View>
      )}
      {status && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: statusSizes[size],
            height: statusSizes[size],
            borderRadius: statusSizes[size] / 2,
            backgroundColor: statusColors[status],
            borderWidth: statusBorders[size],
            borderColor: isDark ? "#0a0a0a" : "#ffffff",
          }}
          accessibilityRole="text"
          accessibilityLabel={`Status: ${status}`}
        />
      )}
    </View>
  );
}
