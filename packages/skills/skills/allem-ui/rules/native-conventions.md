# Native Conventions

Critical patterns and rules for working with `@allem-ui/native`.

## Inline Styles Over NativeWind

All visual rendering uses **inline styles** with hex color values:

```tsx
// CORRECT — inline styles for visual properties
<View style={{
  backgroundColor: isDark ? "#171717" : "#f9fafb",
  borderRadius: 14,
  borderWidth: 1,
  borderColor: isDark ? "#1c1c1e" : "#e5e5e5",
  padding: 16,
}}>

// WRONG — NativeWind className for visual properties on Animated/Pressable
<Animated.View className="bg-neutral-950 rounded-xl border border-neutral-800 p-4">
```

**Why:** NativeWind className does NOT work reliably on `Animated.View`, `Animated.Text`, `Pressable` style callbacks, and sometimes basic layout like `h-px`.

**className is OK for:** Regular `View`, `Text`, `ScrollView` for layout classes (flex, margins, padding).

## Dark Mode Pattern

```tsx
import { useColorScheme } from "nativewind";
// or
import { useTheme } from "@allem-ui/native";

const { colorScheme } = useColorScheme();
const isDark = colorScheme === "dark";

// Use isDark for all color conditionals
const bgColor = isDark ? "#0a0a0a" : "#ffffff";
const textColor = isDark ? "#ffffff" : "#171717";
const borderColor = isDark ? "#262626" : "#e5e5e5";
```

## Icon Props Pattern

Library components accept icons as **ReactNode** with text fallbacks:

```tsx
// Component definition — never import @expo/vector-icons
interface SelectProps {
  chevronIcon?: ReactNode; // consumer passes icon
}

// Fallback in component
{chevronIcon || <Text style={{ color: "#a3a3a3" }}>▼</Text>}

// Consumer passes Ionicons or any icon library
<Select chevronIcon={<Ionicons name="chevron-down" size={16} />} />
```

## Button Children Pattern

Button uses `Children.map` to handle mixed icon + text children:

```tsx
// Icons and text as separate children
<Button>
  <TrashIcon size={16} color="#fff" />
  Delete
</Button>
```

Internally: strings get wrapped in `<Text>`, ReactNodes (icons) pass through. `gap: 6` on the Pressable provides spacing.

## Heading Color Override

Heading keeps color in `className` (via `cn()`) so custom color classes work, but uses inline styles for sizing:

```tsx
// Color is overridable via className
<Heading size="lg" className="text-indigo-500">Custom Color</Heading>

// Sizing is always inline (fontSize, fontWeight, lineHeight)
```

## Divider Visibility

Use inline `height: 1` instead of NativeWind `h-px` (which doesn't render):

```tsx
<Divider color={isDark ? "#262626" : "#e5e5e5"} />
```

## Card-Based Example Pages

All example/demo screens follow this pattern:

```tsx
<View style={{
  borderRadius: 16,
  borderWidth: 1,
  borderColor: isDark ? "#262626" : "#e5e5e5",
  backgroundColor: isDark ? "#171717" : "#f9fafb",
  padding: 20,
  marginBottom: 16,
}}>
  <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
    Section Title
  </Text>
  <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
    Description of what's shown.
  </Text>
  {/* Component demo */}
</View>
```

End each page with a "How it works" info card:

```tsx
<View style={{
  borderRadius: 12,
  backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
  borderWidth: 1,
  borderColor: isDark ? "#312e81" : "#c7d2fe",
  padding: 16,
}}>
  <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca" }}>
    How it works
  </Text>
  <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5" }}>
    Explanation text.
  </Text>
</View>
```

## Safe Area Insets

Always use `useSafeAreaInsets()` for components that appear at screen edges:

```tsx
import { useSafeAreaInsets } from "react-native-safe-area-context";

const insets = useSafeAreaInsets();

// Bottom sheets, drawers, select pickers
<View style={{ paddingBottom: insets.bottom + 20 }}>
```

## Slider Implementation

Use View responder props instead of PanResponder (avoids stale closures):

- `onStartShouldSetResponder` / `onMoveShouldSetResponder`
- Use `pageX` + `measureInWindow` instead of `locationX` for accuracy
- Use `valueRef` (useRef) alongside state to avoid stale values in gesture handlers
