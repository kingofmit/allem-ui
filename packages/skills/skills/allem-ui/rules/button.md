# Button

```tsx
import { Button } from "@allem-ui/react";
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"solid" \| "outline" \| "ghost" \| "link"` | `"solid"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `color` | `"primary" \| "neutral" \| "danger" \| "success" \| "warning"` | `"primary"` |
| `fullWidth` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |
| `onPress` | `(e: PressEvent) => void` | — |
| `className` | `string` | — |

Built on `react-aria-components` Button. Use `onPress` instead of `onClick` for cross-device support (mouse, touch, keyboard).

## Examples

```tsx
// Solid primary (default)
<Button onPress={() => save()}>Save</Button>

// Outline danger
<Button variant="outline" color="danger" onPress={() => remove()}>
  Delete
</Button>

// Ghost neutral
<Button variant="ghost" color="neutral">Cancel</Button>

// Link variant
<Button variant="link" color="primary">Learn more</Button>

// Full width, large
<Button fullWidth size="lg">Sign Up</Button>

// Disabled
<Button isDisabled>Processing...</Button>
```

## Best practices

- Use `onPress` not `onClick` — it handles keyboard (Enter/Space) and touch correctly
- Use `color="danger"` for destructive actions, not just red styling
- Pair `variant="outline"` or `variant="ghost"` with primary actions for secondary buttons
- Use `variant="link"` for inline text-like actions, not for navigation (use `<Link>` for that)
