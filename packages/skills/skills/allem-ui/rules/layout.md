# Layout Components

```tsx
import { Box, Flex, Grid, Container, Divider } from "@allem-ui/react";
```

## Box
Polymorphic layout primitive. Renders as any HTML element.

```tsx
<Box as="section" className="p-4 bg-neutral-50 rounded-lg">
  Content
</Box>
```

## Flex

| Prop | Type | Default |
|------|------|---------|
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `"row"` |
| `align` | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | — |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | — |
| `wrap` | `boolean` | `false` |
| `gap` | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"none"` |

```tsx
<Flex align="center" justify="between" gap="md">
  <Heading>Title</Heading>
  <Button>Action</Button>
</Flex>

<Flex direction="column" gap="sm">
  <Input label="Name" />
  <Input label="Email" />
</Flex>
```

Gap values: `none`=0, `xs`=0.25rem, `sm`=0.5rem, `md`=1rem, `lg`=1.5rem, `xl`=2rem.

## Grid

| Prop | Type | Default |
|------|------|---------|
| `columns` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12` | `1` |
| `gap` | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` |

```tsx
<Grid columns={3} gap="lg">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

## Container

| Prop | Type | Default |
|------|------|---------|
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"lg"` |

```tsx
<Container size="lg">
  <Heading>Page Title</Heading>
  <p>Centered content with max-width constraint</p>
</Container>
```

Sizes: `sm`=640px, `md`=768px, `lg`=1024px, `xl`=1280px, `full`=100%.

## Divider

```tsx
<Divider />                           {/* Horizontal line */}
<Divider orientation="vertical" />    {/* Vertical line (use in flex row) */}
```
