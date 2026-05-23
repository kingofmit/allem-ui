<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI React" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/react"><img src="https://img.shields.io/npm/v/@allem-ui/react.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/react_aria-accessible-green" alt="React Aria" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/react

30+ beautiful, accessible React components built on React Aria and Tailwind CSS v4.

## Installation

```bash
npm install @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Quick Start

```tsx
import { Button, Input, Badge, Modal, Toast } from "@allem-ui/react";

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

## Components

### Foundation

`Box` `Text` `Heading` `Divider` `Badge` `Spinner` `Skeleton` `Avatar`

### Forms

`Button` `Input` `Textarea` `Checkbox` `Switch` `RadioGroup` `Radio` `Slider` `Select` `SelectItem`

### Layout & Data

`Flex` `Grid` `Container` `Code` `Link` `Card` `Table` `Breadcrumbs`

### Overlay & Navigation

`Modal` `Drawer` `Accordion` `Tabs` `Tooltip` `Popover` `Dropdown` `ContextMenu` `Toast` `Pagination`

## Features

- **Accessible** — Built on [React Aria](https://react-spectrum.adobe.com/react-aria/) for WCAG compliance
- **Tailwind CSS v4** — Styled with utility classes, fully customizable via `className`
- **Dark mode** — First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** — Full type safety and autocomplete
- **Tree-shakeable** — ESM + CJS builds, import only what you use
- **SSR-safe** — Works with Next.js, Vite, and Remix

## Props API

All components follow a consistent prop pattern:

| Prop | Values | Description |
|------|--------|-------------|
| `variant` | `solid`, `outline`, `ghost`, `subtle`, `link` | Visual style |
| `size` | `sm`, `md`, `lg` | Component size |
| `color` | `primary`, `neutral`, `danger`, `success`, `warning` | Color scheme |
| `className` | string | Tailwind class overrides |

## Standalone Packages

For specialized use cases, install these separately:

| Package | Description |
|---------|-------------|
| [`@allem-ui/date-picker`](https://www.npmjs.com/package/@allem-ui/date-picker) | Calendar, DatePicker, DateRangePicker, TimeField |
| [`@allem-ui/data-grid`](https://www.npmjs.com/package/@allem-ui/data-grid) | Data table with sorting, filtering, pagination |
| [`@allem-ui/chat`](https://www.npmjs.com/package/@allem-ui/chat) | Chat bubbles, typing indicator, code blocks |
| [`@allem-ui/kanban`](https://www.npmjs.com/package/@allem-ui/kanban) | Drag-and-drop kanban board |
| [`@allem-ui/pricing`](https://www.npmjs.com/package/@allem-ui/pricing) | Pricing cards, toggles, comparison tables |
| [`@allem-ui/changelog`](https://www.npmjs.com/package/@allem-ui/changelog) | Changelog timeline & version badges |

## Part of Allem UI

This is the web package for the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For React Native components, see [`@allem-ui/native`](https://www.npmjs.com/package/@allem-ui/native).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
