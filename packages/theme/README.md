<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Theme" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/theme"><img src="https://img.shields.io/npm/v/@allem-ui/theme.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/theme

Theming engine and Tailwind CSS v4 preset for Allem UI with semantic color tokens and dark mode support.

## Installation

```bash
npm install @allem-ui/theme
```

## Quick Start

```ts
// tailwind.config.ts
import { allemPreset } from "@allem-ui/theme";

export default {
  presets: [allemPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

```ts
// Access color tokens directly
import { colors } from "@allem-ui/theme";

console.log(colors.primary); // Allem UI primary palette
```

## Exports

| Export | Description |
|--------|-------------|
| `allemPreset` | Tailwind CSS v4 preset with Allem UI design tokens |
| `colors` | Semantic color tokens (primary, neutral, danger, success, warning) |

## Features

- **Tailwind CSS v4 preset** -- Drop-in preset for consistent styling across all Allem UI components
- **Semantic color tokens** -- primary, neutral, danger, success, warning palettes
- **Dark mode** -- First-class dark mode support built into the preset
- **Tree-shakeable** -- ESM + CJS builds, import only what you use
- **TypeScript strict** -- Full type safety and autocomplete

## Part of Allem UI

This is the theming package for the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. Used by [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react) and all standalone component packages.

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
