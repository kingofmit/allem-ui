<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Native" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/native"><img src="https://img.shields.io/npm/v/@allem-ui/native.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react_native-0.76-61dafb" alt="React Native" />
  <img src="https://img.shields.io/badge/expo-53-000020" alt="Expo 53" />
  <img src="https://img.shields.io/badge/nativewind-v4-38bdf8" alt="NativeWind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/native

44 production-ready React Native components with stunning defaults, dark mode, and zero configuration.

## Installation

```bash
npm install @allem-ui/native
```

### Peer Dependencies

```bash
npm install react react-native nativewind
```

### Optional (for mobile-only components)

```bash
npm install @gorhom/bottom-sheet react-native-reanimated react-native-gesture-handler expo-haptics
```

## Quick Start

```tsx
import { Button, Input, Badge, Avatar, Toast } from "@allem-ui/native";

export function App() {
  return (
    <View>
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="solid" color="primary">Submit</Button>
      <Badge color="success">Active</Badge>
      <Avatar src="https://example.com/photo.jpg" name="Ahmed" status="online" />
    </View>
  );
}
```

## Components

### Foundation (8)

`Box` `Text` `Heading` `Divider` `Badge` `Spinner` `Skeleton` `Avatar`

### Forms (8)

`Button` `Input` `Textarea` `Checkbox` `Switch` `Radio` `Slider` `Select`

### Layout & Data (8)

`Flex` `Grid` `Container` `Code` `Link` `Card` `Table` `Breadcrumbs`

### Overlay & Navigation (10)

`Modal` `Drawer` `Accordion` `Tabs` `Tooltip` `Popover` `Dropdown` `ContextMenu` `Toast` `Pagination`

### Mobile Only (10)

`BottomSheet` `ActionSheet` `SwipeableRow` `PullToRefresh` `FAB` `OTPInput` `SearchBar` `SegmentedControl` `StatusBarManager` `useHaptic`

## Features

- **Beautiful defaults** — Looks great out of the box with no styling required
- **Dark mode** — First-class dark mode support on every component
- **Same API as web** — `variant`, `size`, `color`, `className` props
- **Inline styles** — No NativeWind dependency for visual rendering
- **NativeWind compatible** — Accepts `className` for layout overrides
- **Accessible** — Full React Native accessibility props
- **TypeScript strict** — Complete type safety and autocomplete
- **Tree-shakeable** — Import only what you use

## Props API

All components follow a consistent prop pattern:

| Prop | Values | Description |
|------|--------|-------------|
| `variant` | `solid`, `outline`, `ghost`, `subtle`, `link` | Visual style |
| `size` | `sm`, `md`, `lg` | Component size |
| `color` | `primary`, `neutral`, `danger`, `success`, `warning` | Color scheme |
| `className` | string | NativeWind class overrides |

## Part of Allem UI

This is the React Native package for the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For web components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
