<p align="center">
  <img src="apps/docs/src/app/icon.svg" width="64" height="64" alt="Allem UI" />
</p>

<h1 align="center">Allem UI</h1>

<p align="center">
  The most complete React UI library. Beautiful, accessible, customizable.
</p>

<p align="center">
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <a href="https://www.npmjs.com/package/@allem-ui/react"><img src="https://img.shields.io/npm/v/@allem-ui/react.svg" alt="npm" /></a>
  <img src="https://img.shields.io/badge/react-19-blue" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
</p>

---

## Features

- **30+ Core Components** — Buttons, inputs, modals, tables, tabs, toasts, and more
- **6 Standalone Packages** — Date picker, data grid, chat, kanban, pricing, changelog
- **Accessible** — Built on [React Aria](https://react-spectrum.adobe.com/react-aria/) for WCAG compliance
- **Tailwind CSS v4** — Styled with utility classes, fully customizable
- **Type-safe** — Written in TypeScript with full autocomplete
- **Tree-shakeable** — Import only what you use

## Installation

```bash
npm install @allem-ui/react
```

## Quick Start

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

## Packages

| Package | Description | Install |
|---------|-------------|---------|
| [`@allem-ui/react`](packages/react) | Core components (Button, Input, Modal, Table, Tabs, Toast, etc.) | `npm i @allem-ui/react` |
| [`@allem-ui/theme`](packages/theme) | Theming engine & Tailwind CSS v4 preset | Included with `@allem-ui/react` |
| [`@allem-ui/date-picker`](packages/date-picker) | Calendar, DatePicker, DateRangePicker, TimeField | `npm i @allem-ui/date-picker` |
| [`@allem-ui/data-grid`](packages/data-grid) | Data table with sorting, filtering, pagination | `npm i @allem-ui/data-grid` |
| [`@allem-ui/chat`](packages/chat) | Chat bubbles, typing indicator, code blocks | `npm i @allem-ui/chat` |
| [`@allem-ui/kanban`](packages/kanban) | Drag-and-drop kanban board | `npm i @allem-ui/kanban` |
| [`@allem-ui/pricing`](packages/pricing) | Pricing cards, toggles, comparison tables | `npm i @allem-ui/pricing` |
| [`@allem-ui/changelog`](packages/changelog) | Changelog timeline & version badges | `npm i @allem-ui/changelog` |

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start docs site
pnpm dev --filter=docs

# Start dashboard example
pnpm dev --filter=example-dashboard
```

## Tech Stack

- [React 19](https://react.dev/) + [React Aria](https://react-spectrum.adobe.com/react-aria/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/) workspaces
- [tsup](https://tsup.egoist.dev/) (ESM + CJS builds)
- [Vitest](https://vitest.dev/) (183 tests)
- [Changesets](https://github.com/changesets/changesets) for versioning

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](LICENSE) - [Ahmed Allem](https://kingallem.com)
