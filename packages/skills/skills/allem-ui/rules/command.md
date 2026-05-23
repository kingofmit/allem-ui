# Command Palette

## Install

```bash
npm install @allem-ui/command
```

Add to Tailwind content:
```ts
"./node_modules/@allem-ui/command/dist/**/*.{js,mjs}",
```

## Components

### CommandPalette

Main overlay with backdrop, body scroll lock, and CSS animations.

```tsx
import { CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty, useCommandPalette } from "@allem-ui/command";

const { isOpen, setIsOpen } = useCommandPalette(); // ⌘K to toggle
const [search, setSearch] = useState("");

<CommandPalette open={isOpen} onOpenChange={setIsOpen}>
  <CommandInput value={search} onValueChange={setSearch} />
  <CommandList>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => navigate("/home")} icon={<HomeIcon />} shortcut="⌘H">
        Home
      </CommandItem>
      <CommandItem onSelect={() => navigate("/settings")} icon={<GearIcon />} shortcut="⌘,">
        Settings
      </CommandItem>
    </CommandGroup>
    <CommandEmpty>No results found.</CommandEmpty>
  </CommandList>
</CommandPalette>
```

### Props

**CommandPalette:** `open`, `onOpenChange`, `className`

**CommandInput:** `value`, `onValueChange`, `placeholder`

**CommandItem:** `onSelect`, `icon` (ReactNode), `shortcut` (string), `disabled`, `active`

**CommandGroup:** `heading`

**CommandEmpty:** `children` (custom message)

### useCommandPalette

```tsx
const { isOpen, open, close, toggle, setIsOpen } = useCommandPalette({
  shortcut: "k", // default, configurable
});
```

## Keyboard Navigation

- `⌘K` / `Ctrl+K` — open/close (configurable)
- `↑` `↓` — navigate items
- `Enter` — select active item
- `Escape` — close

## Filtering

Filtering is done by the consumer — filter your items array before rendering `CommandItem`s:

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
- Zero dependencies — CSS-only animations, no framer-motion
