# Feedback Components

```tsx
import { Badge, Spinner, Skeleton, ToastProvider, useToast } from "@allem-ui/react";
```

## Badge

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"solid" \| "outline" \| "subtle"` | `"subtle"` |
| `color` | `"primary" \| "neutral" \| "danger" \| "success" \| "warning"` | `"primary"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |

```tsx
<Badge color="success">Active</Badge>
<Badge variant="outline" color="warning">Pending</Badge>
<Badge variant="solid" color="danger" size="sm">3</Badge>
```

## Spinner

| Prop | Type | Default |
|------|------|---------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `color` | `"primary" \| "neutral" \| "white"` | `"primary"` |
| `label` | `string` | — |

```tsx
<Spinner />
<Spinner size="lg" label="Loading data..." />
<Spinner color="white" />  {/* Use on dark backgrounds */}
```

If no `label` is provided, a screen-reader-only "Loading" text is rendered.

## Skeleton

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"text" \| "circular" \| "rectangular" \| "rounded"` | `"text"` |
| `width` | `string \| number` | — |
| `height` | `string \| number` | — |

```tsx
// Text placeholder
<Skeleton />
<Skeleton width="60%" />

// Avatar placeholder
<Skeleton variant="circular" width={40} height={40} />

// Image placeholder
<Skeleton variant="rounded" width="100%" height={200} />
```

## Toast

Wrap your app with `<ToastProvider>`, then call `useToast()` in any component.

```tsx
// Layout
<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

// Usage
const { toast, dismiss } = useToast();

toast({ title: "Saved!", variant: "success" });
toast({ title: "Error", description: "Something went wrong", variant: "danger" });
toast({ title: "Heads up", variant: "warning", duration: 0 }); // Persistent
```

| Option | Type | Default |
|--------|------|---------|
| `title` | `string` | required |
| `description` | `string` | — |
| `variant` | `"default" \| "success" \| "danger" \| "warning"` | `"default"` |
| `duration` | `number` | `5000` |

Set `duration: 0` for toasts that persist until manually dismissed.

Positions: `"top-right"`, `"top-left"`, `"bottom-right"`, `"bottom-left"`, `"top-center"`, `"bottom-center"`.
