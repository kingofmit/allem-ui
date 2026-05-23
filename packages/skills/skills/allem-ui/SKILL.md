---
name: allem-ui-best-practices
description: Best practices for Allem UI — React & React Native component library with Tailwind CSS v4 and NativeWind
tags: allem-ui, react, react-native, tailwind, nativewind, components, accessible, react-aria
---

## When to use
Apply this skill when working with Allem UI components for domain-specific expertise — both web (React) and mobile (React Native).

## Overview
Allem UI is an accessible React & React Native component library. The web package is built on React Aria and Tailwind CSS v4, the native package uses inline styles with NativeWind compatibility. It provides 44+ components across 9 packages with full dark mode support.

## Packages

| Package | Install | Description |
|---------|---------|-------------|
| `@allem-ui/react` | `npm i @allem-ui/react` | 30+ web components (React) |
| `@allem-ui/native` | `npm i @allem-ui/native` | 44 React Native components (34 ported + 10 mobile-only) |
| `@allem-ui/theme` | `npm i @allem-ui/theme` | Tailwind CSS v4 preset with design tokens |
| `@allem-ui/date-picker` | `npm i @allem-ui/date-picker` | Calendar, DatePicker, DateRangePicker, TimeField |
| `@allem-ui/data-grid` | `npm i @allem-ui/data-grid` | TanStack-powered data grid with sorting, filtering, pagination |
| `@allem-ui/chat` | `npm i @allem-ui/chat` | Chat UI components with typing indicators |
| `@allem-ui/kanban` | `npm i @allem-ui/kanban` | Kanban board with drag-and-drop |
| `@allem-ui/pricing` | `npm i @allem-ui/pricing` | Pricing tables and comparison components |
| `@allem-ui/changelog` | `npm i @allem-ui/changelog` | Changelog timeline and version badges |
| `@allem-ui/command` | `npm i @allem-ui/command` | Command palette (⌘K) with keyboard navigation |
| `@allem-ui/file-upload` | `npm i @allem-ui/file-upload` | Drag-and-drop file upload with previews |
| `@allem-ui/onboarding` | `npm i @allem-ui/onboarding` | Onboarding wizard and spotlight product tours |
| `@allem-ui/rich-text` | `npm i @allem-ui/rich-text` | Lightweight rich text editor (WYSIWYG) |

## New project setup

```bash
npm i @allem-ui/react @allem-ui/theme tailwindcss@4
```

Add the `@source` directives to your main CSS file (e.g. `globals.css`) so Tailwind CSS v4 scans the component classes:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/theme";

/* Dark mode (class-based) */
@custom-variant dark (&:where(.dark, .dark *));
```

Add a `@source` line for each standalone package you install:

```css
@source "@allem-ui/command";
@source "@allem-ui/file-upload";
@source "@allem-ui/onboarding";
@source "@allem-ui/rich-text";
@source "@allem-ui/date-picker";
@source "@allem-ui/data-grid";
@source "@allem-ui/chat";
@source "@allem-ui/kanban";
@source "@allem-ui/pricing";
@source "@allem-ui/changelog";
```

**Important:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

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

## Native (React Native)

### Setup

```bash
npm i @allem-ui/native react react-native nativewind
```

### Quick example

```tsx
import { Button, Input, Avatar, ThemeProvider, ToastProvider } from "@allem-ui/native";

<ThemeProvider>
  <ToastProvider>
    <Input label="Email" placeholder="you@example.com" />
    <Button variant="solid" color="primary">Submit</Button>
    <Avatar src="https://example.com/photo.jpg" name="Ahmed" status="online" />
  </ToastProvider>
</ThemeProvider>
```

### Key rules for native
- Use **inline styles** for visual rendering — NativeWind className is unreliable on Animated.View, Pressable
- Pass icons as **ReactNode** props — never depend on `@expo/vector-icons` in library code
- Use `isDark` conditional with hex colors for dark mode
- Button uses `Children.map` for mixed icon + text children

## Additional resources
Consult the rule files in the `rules/` directory for detailed per-component API reference and best practices:
- **Web:** button, input, modal, card, badge, avatar, tabs, table, forms, layout, navigation, overlay, feedback
- **Native:** native-setup, native-components, native-mobile-only, native-conventions
- **Add-on packages:** date-picker, data-grid, chat, kanban, pricing, changelog, command, file-upload, onboarding, rich-text
- **Theming:** theme setup, dark mode, custom tokens
