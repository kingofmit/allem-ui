# Native Setup

```bash
npm install @allem-ui/native
```

## Peer Dependencies

```bash
npm install react react-native nativewind
```

### Optional (mobile-only components)

```bash
npm install @gorhom/bottom-sheet react-native-reanimated react-native-gesture-handler expo-haptics
```

## App Setup

Wrap your app with providers:

```tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, ToastProvider } from "@allem-ui/native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <ToastProvider>
            {/* Your app */}
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

## Dark Mode

Use the `useTheme` hook or `useColorScheme` from `nativewind`:

```tsx
import { useTheme } from "@allem-ui/native";

const { isDark, colorScheme, setColorScheme } = useTheme();
```

The `ThemeToggle` component provides a ready-made toggle:

```tsx
import { ThemeToggle } from "@allem-ui/native";

<ThemeToggle
  size="md"
  lightIcon={(s) => <SunIcon size={s} />}
  darkIcon={(s) => <MoonIcon size={s} />}
/>
```

## NativeWind Compatibility

- Components use **inline styles** for visual rendering (colors, sizes, borders)
- Components accept `className` for **layout overrides** (margins, padding, flex)
- Do NOT use `className` on `Animated.View`, `Animated.Text`, or `Pressable` for visual styling — it doesn't work reliably

## Key Differences from Web

| Web (`@allem-ui/react`) | Native (`@allem-ui/native`) |
|-------------------------|----------------------------|
| `<div>` | `<View>` |
| `<button>` / `onPress` (React Aria) | `<Pressable>` / `onPress` |
| `<input>` | `<TextInput>` |
| `hover:` styles | Not available (touch devices) |
| `focus-visible:ring-*` | `border-*` on focus |
| CSS animations | `Animated` API |
| React Aria accessibility | RN accessibility props |
| Tailwind classes | Inline styles + optional className |
