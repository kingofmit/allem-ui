<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Changelog" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/changelog"><img src="https://img.shields.io/npm/v/@allem-ui/changelog.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/changelog

Changelog and release timeline components for Allem UI -- timeline layouts, version badges, and grouped change entries.

## Installation

```bash
npm install @allem-ui/changelog @allem-ui/react @allem-ui/theme
```

## Quick Start

```tsx
import {
  ChangelogTimeline,
  ChangelogEntry,
  VersionBadge,
  ChangelogGroup,
  ChangelogGroupItem,
} from "@allem-ui/changelog";

export function ReleasePage() {
  return (
    <ChangelogTimeline>
      <ChangelogEntry date="2025-01-15">
        <VersionBadge type="major">v2.0.0</VersionBadge>
        <ChangelogGroup type="added">
          <ChangelogGroupItem>New DataGrid component</ChangelogGroupItem>
          <ChangelogGroupItem>Dark mode improvements</ChangelogGroupItem>
        </ChangelogGroup>
        <ChangelogGroup type="fixed">
          <ChangelogGroupItem>Modal focus trap on mobile</ChangelogGroupItem>
        </ChangelogGroup>
      </ChangelogEntry>
    </ChangelogTimeline>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `ChangelogTimeline` | Vertical timeline container for changelog entries |
| `ChangelogEntry` | Single release entry with date and content |
| `VersionBadge` | Colored badge for major, minor, and patch versions |
| `ChangelogGroup` | Groups changes by type (added, fixed, changed, removed) |
| `ChangelogGroupItem` | Individual change item within a group |

## Features

- **Timeline layout** -- Vertical timeline with connecting lines and date markers
- **Version badges** -- Color-coded badges for major, minor, and patch releases
- **Grouped changes** -- Organize entries by added, fixed, changed, removed
- **Composable** -- Build custom changelog layouts with individual components
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with exported prop types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
