# Contributing

Thanks for your interest in contributing to Allem UI.

## Setup

```bash
git clone https://github.com/kingofmit/allem-ui.git
cd allem-ui
pnpm install
pnpm build
pnpm test
```

Requires Node.js >= 20 and [pnpm](https://pnpm.io/) >= 9.

## Project Structure

```
packages/
  react/        @allem-ui/react          React web components
  native/       @allem-ui/native         React Native components
  theme/        @allem-ui/theme          Shared design tokens & theme
  date-picker/  @allem-ui/date-picker    Date picker component
  kanban/       @allem-ui/kanban         Kanban board component
  data-grid/    @allem-ui/data-grid      Data grid component
  pricing/      @allem-ui/pricing        Pricing table component
  chat/         @allem-ui/chat           Chat UI component
  skills/       @allem-ui/skills         Skills component
  changelog/    @allem-ui/changelog      Changelog component
apps/
  docs/         Documentation site
```

Each component in `packages/react` lives in `src/components/<Name>/` with a `ComponentName.tsx` and `index.ts`. All exports go through `packages/react/src/index.ts`.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Watch mode |
| `pnpm test` | Run all tests |
| `pnpm changeset` | Create a changeset for versioning |
| `pnpm release` | Build + publish to npm |

## Pull Requests

1. Fork and clone the repo
2. Create a branch from `main`: `git checkout -b feat/my-feature`
3. Make your changes and add tests
4. Run `pnpm build && pnpm test`
5. Create a changeset: `pnpm changeset`
6. Open a PR against `main`

## Code Style

### General

- TypeScript strict mode
- Export types alongside implementations
- `"use client"` directive on interactive components

### React (Web)

- Use [React Aria](https://react-spectrum.adobe.com/react-aria/) for accessibility primitives
- Style with Tailwind CSS v4 utility classes via the `cn()` helper
- All components support a `className` prop for overrides
- Dark mode via `dark:` Tailwind prefix

### React Native

- Use inline styles (no Tailwind on native)
- Platform-specific code via `.ios.tsx` / `.android.tsx` when needed

### Component API Conventions

- `variant`: visual style (e.g. `solid`, `outline`, `ghost`)
- `size`: `sm`, `md`, `lg`
- `color`: `primary`, `neutral`, `danger`, `success`, `warning`

## Changesets

We use [Changesets](https://github.com/changesets/changesets) for versioning. Run `pnpm changeset` when making user-facing changes.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
