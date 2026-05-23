# @allem-ui/command

Command palette (⌘K) component for [Allem UI](https://github.com/kingofmit/allem-ui) — a spotlight-style search and action launcher with keyboard navigation, grouped results, and shortcut badges.

## Install

```bash
npm install @allem-ui/command @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/command";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Quick Start

```tsx
import {
  CommandPalette,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  useCommandPalette,
} from "@allem-ui/command";

function App() {
  const { isOpen, setIsOpen } = useCommandPalette(); // ⌘K to toggle
  const [search, setSearch] = useState("");

  const items = [
    { label: "Home", icon: <HomeIcon />, shortcut: "⌘H" },
    { label: "Settings", icon: <GearIcon />, shortcut: "⌘," },
    { label: "Search users", icon: <SearchIcon /> },
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CommandPalette open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput value={search} onValueChange={setSearch} />
      <CommandList>
        {filtered.length === 0 ? (
          <CommandEmpty>No results for "{search}"</CommandEmpty>
        ) : (
          <CommandGroup heading="Navigation">
            {filtered.map((item) => (
              <CommandItem
                key={item.label}
                onSelect={() => console.log(item.label)}
                icon={item.icon}
                shortcut={item.shortcut}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandPalette>
  );
}
```

## Components

### CommandPalette

Main overlay container with backdrop and animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Whether the palette is open |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes |
| `className` | `string` | — | Additional CSS classes |

### CommandInput

Search input with magnifying glass icon and clear button.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Current search value |
| `onValueChange` | `(value: string) => void` | — | Search change callback |
| `placeholder` | `string` | `"Type a command or search..."` | Placeholder text |

### CommandList

Scrollable results container with keyboard navigation (↑↓ arrows, Enter to select).

### CommandItem

Individual result row.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSelect` | `() => void` | — | Called when item is selected |
| `icon` | `ReactNode` | — | Icon displayed on the left |
| `shortcut` | `string` | — | Keyboard shortcut badge |
| `disabled` | `boolean` | `false` | Whether the item is disabled |

### CommandGroup

Labeled section divider for grouping items.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | — | Section heading text |

### CommandEmpty

Empty state shown when no results match.

### useCommandPalette

Hook for controlling the palette programmatically. Registers ⌘K / Ctrl+K by default.

```tsx
const { isOpen, open, close, toggle, setIsOpen } = useCommandPalette({
  shortcut: "k", // customizable
});
```

## Features

- ⌘K / Ctrl+K keyboard shortcut (configurable)
- Arrow key navigation with scroll-into-view
- Enter to select, Escape to close
- Grouped results with section headers
- Keyboard shortcut badges on items
- Animated entrance/exit (CSS only)
- Body scroll lock when open
- Dark mode support
- Zero dependencies

## License

MIT
