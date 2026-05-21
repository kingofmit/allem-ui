# Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from "@allem-ui/react";
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"outline" \| "filled" \| "elevated"` | `"outline"` |
| `className` | `string` | — |

Sub-components: `CardHeader`, `CardBody`, `CardFooter` — all accept standard div props.

## Examples

```tsx
// Basic card
<Card>
  <CardHeader>
    <h3 className="font-semibold">Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here.</p>
  </CardBody>
  <CardFooter>
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>

// Elevated card
<Card variant="elevated">
  <CardBody>
    <p>This card has a shadow that grows on hover.</p>
  </CardBody>
</Card>

// Filled card
<Card variant="filled">
  <CardBody>
    <p>Subtle background tint, no border.</p>
  </CardBody>
</Card>
```

## Variant details

- **outline** — Border with subtle shadow, shadow grows on hover
- **filled** — Neutral background fill, bg shifts on hover
- **elevated** — Medium shadow, shadow grows on hover
