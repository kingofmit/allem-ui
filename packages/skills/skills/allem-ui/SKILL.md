---
name: allem-ui-best-practices
description: Best practices for Allem UI — accessible React component library with Tailwind CSS v4
tags: allem-ui, react, tailwind, components, accessible, react-aria
---

## When to use
Apply this skill when working with Allem UI components for domain-specific expertise.

## Overview
Allem UI is an accessible React component library built on React Aria and Tailwind CSS v4. It provides 34+ components across 8 packages with full dark mode support, keyboard navigation, and ARIA compliance out of the box.

## Packages

| Package | Install | Description |
|---------|---------|-------------|
| `@allem-ui/react` | `npm i @allem-ui/react` | Core components (34 components) |
| `@allem-ui/theme` | `npm i @allem-ui/theme` | Tailwind CSS v4 preset with design tokens |
| `@allem-ui/date-picker` | `npm i @allem-ui/date-picker` | Calendar, DatePicker, DateRangePicker, TimeField |
| `@allem-ui/data-grid` | `npm i @allem-ui/data-grid` | TanStack-powered data grid with sorting, filtering, pagination |
| `@allem-ui/chat` | `npm i @allem-ui/chat` | Chat UI components with typing indicators |
| `@allem-ui/kanban` | `npm i @allem-ui/kanban` | Kanban board with drag-and-drop |
| `@allem-ui/pricing` | `npm i @allem-ui/pricing` | Pricing tables and comparison components |
| `@allem-ui/changelog` | `npm i @allem-ui/changelog` | Changelog timeline and version badges |

## New project setup

```bash
npm i @allem-ui/react @allem-ui/theme tailwindcss@4
```

Add the theme preset to your Tailwind config:

```ts
// tailwind.config.ts
import { allemPreset } from "@allem-ui/theme";

export default {
  presets: [allemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@allem-ui/react/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/date-picker/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/data-grid/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/chat/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/kanban/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/pricing/dist/**/*.{js,mjs}",
    "./node_modules/@allem-ui/changelog/dist/**/*.{js,mjs}",
  ],
};
```

**Important:** Include the `dist/**/*.{js,mjs}` paths for every Allem UI package you install so Tailwind scans their class names.

## Core conventions

### Standard prop patterns
All interactive components follow consistent prop naming:

- **`variant`** — Visual style (`"solid"`, `"outline"`, `"ghost"`, `"link"`, etc.)
- **`size`** — `"sm" | "md" | "lg"` (default: `"md"`)
- **`color`** — `"primary" | "neutral" | "danger" | "success" | "warning"` (default: `"primary"`)
- **`className`** — Tailwind classes merged via `cn()` helper for overrides

### Colors
- **Primary:** indigo-600 (light) / indigo-400 (dark)
- **Neutral:** neutral-900 (light) / white (dark)
- **Danger:** red-500/600
- **Success:** emerald-500/600
- **Warning:** amber-500

### Dark mode
All components support dark mode via Tailwind's `dark:` prefix. No extra configuration needed — components adapt automatically.

### Accessibility
Components are built on React Aria, providing:
- Full keyboard navigation
- ARIA attributes and roles
- Focus management (visible focus rings on keyboard, hidden on mouse)
- Screen reader support

### Class merging
Use the `cn()` utility from `@allem-ui/react` to merge Tailwind classes:

```tsx
import { Button, cn } from "@allem-ui/react";

<Button className={cn("mt-4", isActive && "ring-2")} />
```

### Client components
Components that need interactivity use the `"use client"` directive. In Next.js App Router, you can import them in server components — the directive is already in the package.

## Quick examples

### Button
```tsx
import { Button } from "@allem-ui/react";

<Button variant="solid" color="primary" size="md" onPress={() => {}}>
  Click me
</Button>
```

### Form with validation
```tsx
import { Input, Select, SelectItem, Checkbox, Button } from "@allem-ui/react";

<Input label="Email" type="email" errorMessage={errors.email} />
<Select label="Country">
  <SelectItem id="us">United States</SelectItem>
  <SelectItem id="uk">United Kingdom</SelectItem>
</Select>
<Checkbox>I agree to the terms</Checkbox>
<Button type="submit">Submit</Button>
```

### Modal
```tsx
import { Modal, ModalContent, Button } from "@allem-ui/react";

<Modal>
  <Button>Open Modal</Button>
  <ModalContent title="Confirm" size="md">
    <p>Are you sure?</p>
    <Button variant="outline">Cancel</Button>
    <Button color="danger">Delete</Button>
  </ModalContent>
</Modal>
```

### Toast notifications
```tsx
import { ToastProvider, useToast, Button } from "@allem-ui/react";

// Wrap your app
<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

// In a component
const { toast } = useToast();
toast({ title: "Saved!", variant: "success", duration: 3000 });
```

## Additional resources
Consult the rule files in the `rules/` directory for detailed per-component API reference and best practices:
- Core components: button, input, modal, card, badge, avatar, tabs, table, forms, layout, navigation, overlay, feedback
- Add-on packages: date-picker, data-grid, chat, kanban, pricing, changelog
- Theming: theme setup, dark mode, custom tokens
