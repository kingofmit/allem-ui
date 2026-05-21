# Overlay Components

```tsx
import {
  Tooltip, TooltipContent,
  PopoverTrigger, Popover,
  Dropdown, DropdownMenu, DropdownItem, DropdownSeparator,
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator,
} from "@allem-ui/react";
```

## Tooltip

```tsx
<Tooltip>
  <Button>Hover me</Button>
  <TooltipContent>This is a tooltip</TooltipContent>
</Tooltip>

// Without arrow, custom placement
<Tooltip>
  <Button>Info</Button>
  <TooltipContent showArrow={false} placement="bottom">
    Bottom tooltip without arrow
  </TooltipContent>
</Tooltip>
```

TooltipContent props: `showArrow` (default: `true`), `placement`, `offset`, `className`.

## Popover

```tsx
<PopoverTrigger>
  <Button>Open Popover</Button>
  <Popover>
    <p>Popover content with interactive elements</p>
    <Input label="Name" />
  </Popover>
</PopoverTrigger>
```

Popover props: `showArrow` (default: `true`), `placement`, `offset`, `className`. Content is wrapped in a `<Dialog>` with `p-4` padding.

## Dropdown

```tsx
<Dropdown>
  <Button>Actions</Button>
  <DropdownMenu onAction={(key) => handleAction(key)}>
    <DropdownItem id="edit">Edit</DropdownItem>
    <DropdownItem id="duplicate">Duplicate</DropdownItem>
    <DropdownSeparator />
    <DropdownItem id="delete" color="danger">Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

DropdownItem props: `id`, `color` (`"default" | "danger"`), `onAction`, `isDisabled`, `href`.

## Context Menu

```tsx
<ContextMenu>
  <div className="p-8 border rounded">
    Right-click here
  </div>
  <ContextMenuContent>
    <ContextMenuItem onAction={() => copy()}>Copy</ContextMenuItem>
    <ContextMenuItem onAction={() => paste()}>Paste</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem color="danger" onAction={() => remove()}>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Key differences

- **Tooltip** — Hover-only, informational, no interactive content
- **Popover** — Click to open, can contain interactive content (forms, buttons)
- **Dropdown** — Click to open, for action menus with `onAction` callbacks
- **ContextMenu** — Right-click to open, same interaction as Dropdown
