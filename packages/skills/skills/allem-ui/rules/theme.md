# Theme & Styling

```bash
npm i @allem-ui/theme tailwindcss@4
```

## Setup

Add the Allem UI preset to your Tailwind config:

```ts
// tailwind.config.ts
import { allemPreset } from "@allem-ui/theme";

export default {
  presets: [allemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // Include dist paths for all Allem UI packages you use
    "./node_modules/@allem-ui/react/dist/**/*.{js,mjs}",
    // Add more as needed...
  ],
};
```

**Important:** You must include `node_modules/@allem-ui/*/dist/**/*.{js,mjs}` in your `content` array so Tailwind scans the component class names.

## Design tokens

The preset provides:

| Token | Key | Value |
|-------|-----|-------|
| Border radius | `allem` | `0.625rem` |
| Font family | `allem` | Inter, system-ui, sans-serif |
| Colors | `allem.*` | Full color palette |

## Animations

| Animation class | Description |
|-----------------|-------------|
| `animate-allem-spin` | Spinner rotation (0.6s linear) |
| `animate-allem-pulse` | Skeleton pulsing (1.5s ease) |
| `animate-allem-fade-in` | Opacity 0→1 (0.2s) |
| `animate-allem-slide-up` | Fade + slide from bottom (0.2s) |
| `animate-allem-bounce` | Three-dot bounce for typing indicator |
| `animate-allem-scale-in` | Fade + scale 0.95→1 (0.2s) |
| `animate-allem-slide-left` | Slide from right (0.2s) |
| `animate-allem-slide-right` | Slide from left (0.2s) |

## Dark mode

All components support dark mode automatically via Tailwind's `dark:` variant. No additional setup needed — just configure your dark mode strategy in Tailwind:

```ts
// tailwind.config.ts
export default {
  darkMode: "class",  // or "media" for system preference
  presets: [allemPreset],
  // ...
};
```

## Using cn() for class merging

```tsx
import { cn } from "@allem-ui/react";

// Merge Tailwind classes safely
<div className={cn("p-4 bg-white", isActive && "ring-2 ring-indigo-500", className)} />
```

`cn()` is a lightweight utility that filters falsy values and joins class names. Use it when building custom components on top of Allem UI.

## Color palette

| Semantic color | Light mode | Dark mode |
|----------------|------------|-----------|
| Primary | indigo-600 | indigo-400 |
| Neutral | neutral-900 | white |
| Danger | red-600 | red-400 |
| Success | emerald-600 | emerald-400 |
| Warning | amber-500 | amber-400 |

## Customizing components

Override any component's styles via the `className` prop:

```tsx
<Button className="rounded-full px-8">Pill Button</Button>
<Card className="border-indigo-200 bg-indigo-50/30">Custom Card</Card>
<Input className="border-2" />
```

All components merge your `className` with internal styles using `cn()`.
