# @allem-ui/rich-text

Lightweight rich text editor for [Allem UI](https://github.com/kingofmit/allem-ui) — a zero-dependency WYSIWYG editor built on `contentEditable` with a formatting toolbar, keyboard shortcuts, and dark mode.

## Install

```bash
npm install @allem-ui/rich-text @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/rich-text";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Quick Start

```tsx
import { RichTextEditor } from "@allem-ui/rich-text";

function App() {
  return (
    <RichTextEditor
      initialValue="<p>Hello world</p>"
      onChange={(html) => console.log(html)}
      placeholder="Start writing..."
      minHeight={200}
    />
  );
}
```

## Components

### RichTextEditor

All-in-one editor combining the toolbar and content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialValue` | `string` | `""` | Initial HTML content |
| `onChange` | `(html: string) => void` | — | Called on content change |
| `placeholder` | `string` | `"Start writing..."` | Placeholder text |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `minHeight` | `number` | `120` | Minimum editor height (px) |
| `maxHeight` | `number` | `400` | Maximum editor height (px) |
| `hideToolbar` | `boolean` | `false` | Hide the formatting toolbar |
| `className` | `string` | — | Additional CSS classes |

### RichTextToolbar

Standalone formatting toolbar — use with `useRichText` for custom layouts.

| Prop | Type | Description |
|------|------|-------------|
| `activeFormats` | `ActiveFormats` | Current active format states |
| `onBold` | `() => void` | Toggle bold |
| `onItalic` | `() => void` | Toggle italic |
| `onUnderline` | `() => void` | Toggle underline |
| `onStrikethrough` | `() => void` | Toggle strikethrough |
| `onHeading` | `(level: 1\|2\|3) => void` | Toggle heading level |
| `onOrderedList` | `() => void` | Toggle ordered list |
| `onUnorderedList` | `() => void` | Toggle bullet list |
| `onBlockquote` | `() => void` | Toggle blockquote |
| `onCodeBlock` | `() => void` | Toggle code block |
| `onLink` | `(url: string) => void` | Insert link |
| `onRemoveLink` | `() => void` | Remove link |

### RichTextContent

Standalone editable content area — use with `useRichText` for custom layouts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `editorRef` | `RefObject<HTMLDivElement>` | — | Ref from `useRichText` |
| `initialValue` | `string` | `""` | Initial HTML |
| `placeholder` | `string` | `"Start writing..."` | Placeholder |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `minHeight` | `number` | `120` | Min height (px) |
| `maxHeight` | `number` | `400` | Max height (px) |
| `onInput` | `() => void` | — | Input handler from hook |

### useRichText

Hook for programmatic control and custom editor layouts.

```tsx
const {
  editorRef,           // Attach to contentEditable div
  html,                // Current HTML string
  activeFormats,       // { bold, italic, underline, ... }
  handleInput,         // Input event handler
  toggleBold,          // ⌘B
  toggleItalic,        // ⌘I
  toggleUnderline,     // ⌘U
  toggleStrikethrough,
  toggleOrderedList,
  toggleUnorderedList,
  toggleHeading,       // (level: 1 | 2 | 3)
  toggleBlockquote,
  toggleCodeBlock,
  insertLink,          // (url: string)
  removeLink,
} = useRichText({
  initialValue: "<p>Hello</p>",
  onChange: (html) => save(html),
});
```

## Formatting

| Format | Toolbar | Keyboard Shortcut |
|--------|---------|-------------------|
| Bold | **B** | ⌘B / Ctrl+B |
| Italic | *I* | ⌘I / Ctrl+I |
| Underline | U | ⌘U / Ctrl+U |
| Strikethrough | ~~S~~ | — |
| Heading 1 | H1 | — |
| Heading 2 | H2 | — |
| Heading 3 | H3 | — |
| Bullet List | • | — |
| Numbered List | 1. | — |
| Blockquote | " | — |
| Code Block | </> | — |
| Link | 🔗 | — |

## Features

- Formatting toolbar with active state indicators
- Keyboard shortcuts (⌘B, ⌘I, ⌘U)
- Headings (H1, H2, H3)
- Bullet and numbered lists
- Blockquotes and code blocks
- Link insertion with URL popover
- Placeholder text when empty
- Read-only mode
- Auto-growing content area
- Prose typography styling
- Dark mode support
- Zero dependencies — uses native `contentEditable` and `execCommand`

## License

MIT
