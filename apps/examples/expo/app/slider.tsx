import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Slider, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function SliderScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [volume, setVolume] = useState(65);
  const [brightness, setBrightness] = useState(80);
  const [price, setPrice] = useState(150);
  const [rating, setRating] = useState(4);

  return (
    <>
      <Stack.Screen options={{ title: "Slider" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Slider</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Draggable range slider with step snapping and thumb animation.
        </Text>

        {/* Basic */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Basic Controls
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Label with live output value.
          </Text>
          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Ionicons name="volume-low" size={20} color={isDark ? "#737373" : "#a3a3a3"} />
              <View style={{ flex: 1 }}>
                <Slider label="Volume" showOutput value={volume} onChange={setVolume} />
              </View>
              <Ionicons name="volume-high" size={20} color={isDark ? "#737373" : "#a3a3a3"} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Ionicons name="sunny-outline" size={20} color={isDark ? "#737373" : "#a3a3a3"} />
              <View style={{ flex: 1 }}>
                <Slider label="Brightness" showOutput value={brightness} onChange={setBrightness} />
              </View>
              <Ionicons name="sunny" size={20} color={isDark ? "#737373" : "#a3a3a3"} />
            </View>
          </View>
        </View>

        {/* Custom Range */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Custom Range & Step
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Price filter with $10 step increments.
          </Text>
          <Slider
            label="Max Price"
            showOutput
            value={price}
            onChange={setPrice}
            minValue={0}
            maxValue={500}
            step={10}
          />
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, color: isDark ? "#525252" : "#a3a3a3" }}>$0</Text>
            <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#818cf8" : "#4f46e5" }}>${price}</Text>
            <Text style={{ fontSize: 12, color: isDark ? "#525252" : "#a3a3a3" }}>$500</Text>
          </View>
        </View>

        {/* Rating */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Rating Slider
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            1-5 star rating with step of 1.
          </Text>
          <Slider
            label="Rating"
            showOutput
            value={rating}
            onChange={setRating}
            minValue={1}
            maxValue={5}
            step={1}
          />
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 4, marginTop: 12 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= rating ? "star" : "star-outline"}
                size={24}
                color="#f59e0b"
              />
            ))}
          </View>
        </View>

        {/* Sizes */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Sizes
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Small, medium, and large track/thumb.
          </Text>
          <View style={{ gap: 8 }}>
            <Slider defaultValue={40} size="sm" label="Small" />
            <Slider defaultValue={60} size="md" label="Medium" />
            <Slider defaultValue={80} size="lg" label="Large" />
          </View>
        </View>

        {/* Disabled */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Disabled
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Non-interactive slider.
          </Text>
          <Slider defaultValue={50} label="Locked" showOutput isDisabled />
        </View>

        {/* Info */}
        <View
          style={{
            borderRadius: 12,
            backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
            borderWidth: 1,
            borderColor: isDark ? "#312e81" : "#c7d2fe",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca", marginBottom: 4 }}>
            How it works
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
            PanResponder for drag gestures. Thumb scales up on grab with spring animation. Supports custom min/max range, step snapping, 3 sizes, showOutput for live value display, and disabled state. Indigo filled track with white bordered thumb.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
