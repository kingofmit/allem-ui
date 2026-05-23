<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/react"><img src="https://img.shields.io/npm/v/@allem-ui/react.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@allem-ui/native"><img src="https://img.shields.io/npm/v/@allem-ui/native.svg?label=native" alt="native version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/react_native-0.76-61dafb" alt="React Native" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# Allem UI

The most complete React & React Native UI library. Beautiful, accessible, customizable.

## Installation

```bash
npm install @allem-ui/react        # Web (React)
npm install @allem-ui/native       # Mobile (React Native)
```

Or install standalone packages:

```bash
npm install @allem-ui/date-picker  # Calendar & date pickers
npm install @allem-ui/data-grid    # Data table with sorting & filtering
npm install @allem-ui/chat         # Chat UI components
npm install @allem-ui/kanban       # Drag-and-drop kanban board
npm install @allem-ui/pricing      # Pricing cards & comparison tables
npm install @allem-ui/changelog    # Changelog timeline
```

## Quick Start

### Web (React)

```tsx
import { Button, Input, Badge } from "@allem-ui/react";

export function App() {
  return (
    <div>
      <Input label="Email" placeholder="you@example.com" />
      <Button>Submit</Button>
      <Badge color="success">Active</Badge>
    </div>
  );
}
```

### Mobile (React Native)

```tsx
import { Button, Input, Badge } from "@allem-ui/native";

export function App() {
  return (
    <View>
      <Input label="Email" placeholder="you@example.com" />
      <Button>Submit</Button>
      <Badge color="success">Active</Badge>
    </View>
  );
}
```

## Packages

| Package | Description | Links |
|---------|-------------|-------|
| `@allem-ui/react` | 30+ web components: buttons, inputs, modals, tables, tabs, toasts, and more | [npm](https://www.npmjs.com/package/@allem-ui/react) · [docs](packages/react) |
| `@allem-ui/native` | 44 React Native components with dark mode and 10 mobile-only components | [npm](https://www.npmjs.com/package/@allem-ui/native) · [docs](packages/native) |
| `@allem-ui/theme` | Theming engine & Tailwind CSS v4 preset | [npm](https://www.npmjs.com/package/@allem-ui/theme) · [docs](packages/theme) |
| `@allem-ui/date-picker` | Calendar, DatePicker, DateRangePicker, TimeField | [npm](https://www.npmjs.com/package/@allem-ui/date-picker) · [docs](packages/date-picker) |
| `@allem-ui/data-grid` | Data table with sorting, filtering, pagination | [npm](https://www.npmjs.com/package/@allem-ui/data-grid) · [docs](packages/data-grid) |
| `@allem-ui/chat` | Chat bubbles, typing indicator, code blocks | [npm](https://www.npmjs.com/package/@allem-ui/chat) · [docs](packages/chat) |
| `@allem-ui/kanban` | Drag-and-drop kanban board | [npm](https://www.npmjs.com/package/@allem-ui/kanban) · [docs](packages/kanban) |
| `@allem-ui/pricing` | Pricing cards, toggles, comparison tables | [npm](https://www.npmjs.com/package/@allem-ui/pricing) · [docs](packages/pricing) |
| `@allem-ui/changelog` | Changelog timeline & version badges | [npm](https://www.npmjs.com/package/@allem-ui/changelog) · [docs](packages/changelog) |

## Features

- **Web + Mobile** — Same API across React and React Native
- **44+ Components** — Buttons, inputs, modals, tables, toasts, bottom sheets, and more
- **Accessible** — Built on [React Aria](https://react-spectrum.adobe.com/react-aria/) (web) with full RN accessibility props (mobile)
- **Dark Mode** — First-class dark mode support on both platforms
- **TypeScript Strict** — Full type safety and autocomplete
- **Tree-shakeable** — ESM + CJS builds, import only what you need
- **Tailwind CSS v4** — Styled with utility classes (web), NativeWind v4 compatible (mobile)

## Development

```bash
pnpm install          # Install dependencies
pnpm build            # Build all packages
pnpm test             # Run tests
pnpm dev --filter=docs              # Start docs site
pnpm dev --filter=example-dashboard # Start dashboard example
pnpm --filter example-expo start    # Start Expo example app
```

## Tech Stack

- [React 19](https://react.dev/) + [React Aria](https://react-spectrum.adobe.com/react-aria/)
- [React Native](https://reactnative.dev/) + [NativeWind v4](https://www.nativewind.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/) workspaces
- [tsup](https://tsup.egoist.dev/) (ESM + CJS builds)
- [Vitest](https://vitest.dev/)
- [Changesets](https://github.com/changesets/changesets) for versioning

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
