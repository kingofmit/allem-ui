# Input & Textarea

```tsx
import { Input, Textarea } from "@allem-ui/react";
```

## Input Props

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | — |
| `description` | `string` | — |
| `errorMessage` | `string` | — |
| `placeholder` | `string` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `type` | `string` | `"text"` |
| `isDisabled` | `boolean` | `false` |
| `isRequired` | `boolean` | `false` |
| `value` | `string` | — |
| `onChange` | `(value: string) => void` | — |
| `className` | `string` | — |

## Textarea Props

Same as Input, plus:

| Prop | Type | Default |
|------|------|---------|
| `rows` | `number` | `3` |

Built on `react-aria-components` TextField. Has `resize-y` enabled.

## Examples

```tsx
// Basic with label
<Input label="Email" type="email" placeholder="you@example.com" />

// With description
<Input label="Username" description="Must be 3-20 characters" />

// With error
<Input label="Password" type="password" errorMessage="Password is required" />

// Controlled
<Input label="Search" value={query} onChange={setQuery} />

// Textarea
<Textarea label="Bio" rows={4} placeholder="Tell us about yourself" />
```

## Best practices

- Always provide a `label` — it's used for accessibility (renders a `<Label>` element)
- `errorMessage` takes priority over `description` — they never show simultaneously
- For validation, pass `errorMessage` conditionally based on form state
