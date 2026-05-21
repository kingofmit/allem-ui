# Typography Components

```tsx
import { Heading, Text, Code, Link } from "@allem-ui/react";
```

## Heading

| Prop | Type | Default |
|------|------|---------|
| `as` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"h2"` |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"lg"` |

```tsx
<Heading as="h1" size="2xl">Page Title</Heading>
<Heading as="h2" size="lg">Section Title</Heading>
<Heading as="h3" size="md">Subsection</Heading>
```

Sizes: `xs`=text-sm, `sm`=text-base, `md`=text-lg, `lg`=text-2xl, `xl`=text-3xl, `2xl`=text-4xl.

## Text

| Prop | Type | Default |
|------|------|---------|
| `as` | `ElementType` | `"p"` |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` |
| `color` | `"default" \| "muted" \| "danger" \| "success" \| "warning"` | `"default"` |
| `weight` | `"normal" \| "medium" \| "semibold" \| "bold"` | `"normal"` |

```tsx
<Text>Default paragraph text</Text>
<Text color="muted" size="sm">Secondary information</Text>
<Text color="danger" weight="medium">Error message</Text>
<Text as="span" weight="bold">Inline bold text</Text>
```

## Code

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"inline" \| "block"` | `"inline"` |

```tsx
// Inline code
<Text>Run <Code>npm install</Code> to get started.</Text>

// Code block
<Code variant="block">
{`const greeting = "Hello, world!";
console.log(greeting);`}
</Code>
```

`inline` renders `<code>`, `block` renders `<pre><code>` with dark background.

## Link

| Prop | Type | Default |
|------|------|---------|
| `color` | `"primary" \| "neutral"` | `"primary"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `href` | `string` | — |

```tsx
<Link href="/docs">Documentation</Link>
<Link href="https://example.com" target="_blank">External Link</Link>
<Link color="neutral" size="sm">Subtle link</Link>
```

Built on `react-aria-components` Link. Use `<Button variant="link">` for actions, `<Link>` for navigation.
