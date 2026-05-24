# Command Palette

## Install

```bash
npm install @allem-ui/command @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add to your main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/command";
@source "@allem-ui/theme";
```

The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles won't be generated.

## Components

### CommandPalette

Main overlay with backdrop, body scroll lock, and CSS animations.

```tsx
import { CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty, useCommandPalette } from "@allem-ui/command";

const { isOpen, setIsOpen } = useCommandPalette(); // Cmd+K to toggle
const [search, setSearch] = useState("");

<CommandPalette open={isOpen} onOpenChange={setIsOpen}>
  <CommandInput value={search} onValueChange={setSearch} />
  <CommandList>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => navigate("/home")} icon={<HomeIcon />} shortcut="Cmd+H">
        Home
      </CommandItem>
      <CommandItem onSelect={() => navigate("/settings")} icon={<GearIcon />} shortcut="Cmd+,">
        Settings
      </CommandItem>
    </CommandGroup>
    <CommandEmpty>No results found.</CommandEmpty>
  </CommandList>
</CommandPalette>
```

### Props

**CommandPalette:**

| Prop | Type | Default |
|------|------|---------|
| `open` | `boolean` | required |
| `onOpenChange` | `(open: boolean) => void` | required |
| `className` | `string` | -- |

**CommandInput:**

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | required |
| `onValueChange` | `(value: string) => void` | required |
| `placeholder` | `string` | `"Type a command or search..."` |

**CommandItem:**

| Prop | Type | Default |
|------|------|---------|
| `onSelect` | `() => void` | -- |
| `icon` | `ReactNode` | -- |
| `shortcut` | `string` | -- |
| `disabled` | `boolean` | `false` |
| `active` | `boolean` | -- |

**CommandGroup:**

| Prop | Type | Default |
|------|------|---------|
| `heading` | `string` | required |

**CommandEmpty:**

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | required |

**CommandList:**

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | required |

### useCommandPalette

```tsx
const { isOpen, open, close, toggle, setIsOpen } = useCommandPalette({
  shortcut: "k", // default, configurable
});
```

| Option | Type | Default |
|--------|------|---------|
| `shortcut` | `string` | `"k"` |

## Exported Types

```tsx
import type {
  CommandPaletteProps,
  CommandInputProps,
  CommandListProps,
  CommandItemProps,
  CommandGroupProps,
  CommandEmptyProps,
  UseCommandPaletteOptions,
} from "@allem-ui/command";
```

## Keyboard Navigation

- `Cmd+K` / `Ctrl+K` -- open/close (configurable)
- `Up/Down` -- navigate items
- `Enter` -- select active item
- `Escape` -- close

## Filtering

Filtering is done by the consumer -- filter your items array before rendering `CommandItem`s:

```tsx
const filtered = items.filter((i) =>
  i.label.toLowerCase().includes(search.toLowerCase())
);
```

## Best Practices

- Keep items grouped by category using `CommandGroup`
- Show keyboard shortcuts with the `shortcut` prop for discoverability
- Use `CommandEmpty` with a helpful message when no results match
- The palette locks body scroll and traps focus when open
- Zero dependencies -- CSS-only animations, no framer-motion
