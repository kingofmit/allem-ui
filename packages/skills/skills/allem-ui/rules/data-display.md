# Data Display Components

```tsx
import {
  Avatar,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Accordion, AccordionItem,
} from "@allem-ui/react";
```

## Avatar

| Prop | Type | Default |
|------|------|---------|
| `src` | `string` | — |
| `alt` | `string` | — |
| `name` | `string` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `status` | `"online" \| "offline" \| "away" \| "busy"` | — |

```tsx
// With image
<Avatar src="/photo.jpg" alt="John Doe" size="lg" />

// Initials fallback
<Avatar name="John Doe" />  {/* Shows "JD" */}

// With status indicator
<Avatar name="Jane" status="online" />
<Avatar src="/photo.jpg" alt="Bob" status="busy" />
```

Sizes: `sm`=32px, `md`=40px, `lg`=56px. Status colors: `online`=green, `offline`=gray, `away`=amber, `busy`=red.

## Table

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"simple" \| "striped" \| "bordered"` | `"simple"` |

```tsx
<Table variant="striped">
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

Use `Table` for simple static data. For sorting, filtering, and pagination, use `@allem-ui/data-grid` instead.

## Accordion

```tsx
<Accordion>
  <AccordionItem title="What is Allem UI?">
    An accessible React component library built with React Aria and Tailwind CSS.
  </AccordionItem>
  <AccordionItem title="Is it free?">
    Yes, Allem UI is MIT licensed and free to use.
  </AccordionItem>
</Accordion>

// Allow multiple items open
<Accordion allowsMultipleExpanded>
  ...
</Accordion>
```

AccordionItem props: `title` (required), `isExpanded`, `defaultExpanded`, `onExpandedChange`, `id`.
