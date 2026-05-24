# Rich Text Editor

## Install

```bash
npm install @allem-ui/rich-text @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add to your main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/rich-text";
@source "@allem-ui/theme";
```

The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles won't be generated.

## Quick Start

```tsx
import { RichTextEditor } from "@allem-ui/rich-text";

<RichTextEditor
  initialValue="<p>Hello world</p>"
  onChange={(html) => console.log(html)}
  placeholder="Start writing..."
  minHeight={200}
/>
```

## Components

### RichTextEditor

All-in-one editor combining toolbar, content area, and bubble menu.

| Prop | Type | Default |
|------|------|---------|
| `initialValue` | `string` | `""` |
| `onChange` | `(html: string) => void` | -- |
| `placeholder` | `string` | `"Start writing..."` |
| `readOnly` | `boolean` | `false` |
| `minHeight` | `number` | `120` |
| `maxHeight` | `number` | `400` |
| `hideToolbar` | `boolean` | `false` |
| `className` | `string` | -- |

### RichTextToolbar

Standalone formatting toolbar -- use with `useRichText` for custom layouts.

| Prop | Type |
|------|------|
| `activeFormats` | `ActiveFormats` |
| `onBold` | `() => void` |
| `onItalic` | `() => void` |
| `onUnderline` | `() => void` |
| `onStrikethrough` | `() => void` |
| `onHeading` | `(level: 1\|2\|3) => void` |
| `onOrderedList` | `() => void` |
| `onUnorderedList` | `() => void` |
| `onBlockquote` | `() => void` |
| `onCodeBlock` | `() => void` |
| `onLink` | `(url: string) => void` |
| `onRemoveLink` | `() => void` |

### RichTextContent

Standalone editable content area.

| Prop | Type | Default |
|------|------|---------|
| `editorRef` | `RefObject<HTMLDivElement>` | required |
| `initialValue` | `string` | `""` |
| `placeholder` | `string` | `"Start writing..."` |
| `readOnly` | `boolean` | `false` |
| `minHeight` | `number` | `120` |
| `maxHeight` | `number` | `400` |
| `onInput` | `() => void` | -- |

### BubbleMenu

Floating inline toolbar that appears when text is selected. Shows bold, italic, underline, strikethrough, and link buttons.

| Prop | Type |
|------|------|
| `editorRef` | `RefObject<HTMLDivElement>` |
| `selectionRect` | `SelectionRect \| null` |
| `hasSelection` | `boolean` |
| `activeFormats` | `ActiveFormats` |
| `onBold` | `() => void` |
| `onItalic` | `() => void` |
| `onUnderline` | `() => void` |
| `onStrikethrough` | `() => void` |
| `onLink` | `(url: string) => void` |
| `onRemoveLink` | `() => void` |

The `BubbleMenu` is included automatically in `RichTextEditor`. Use it separately only with custom layouts via `useRichText`.

### Custom Layout with useRichText

```tsx
import { RichTextToolbar, RichTextContent, BubbleMenu, useRichText } from "@allem-ui/rich-text";

const editor = useRichText({
  initialValue: "<p>Hello</p>",
  onChange: (html) => save(html),
});

<div>
  <RichTextToolbar
    activeFormats={editor.activeFormats}
    onBold={editor.toggleBold}
    onItalic={editor.toggleItalic}
    onUnderline={editor.toggleUnderline}
    onStrikethrough={editor.toggleStrikethrough}
    onHeading={editor.toggleHeading}
    onOrderedList={editor.toggleOrderedList}
    onUnorderedList={editor.toggleUnorderedList}
    onBlockquote={editor.toggleBlockquote}
    onCodeBlock={editor.toggleCodeBlock}
    onLink={editor.insertLink}
    onRemoveLink={editor.removeLink}
  />
  <RichTextContent
    editorRef={editor.editorRef}
    initialValue="<p>Hello</p>"
    onInput={editor.handleInput}
  />
  <BubbleMenu
    editorRef={editor.editorRef}
    selectionRect={editor.selectionRect}
    hasSelection={editor.hasSelection}
    activeFormats={editor.activeFormats}
    onBold={editor.toggleBold}
    onItalic={editor.toggleItalic}
    onUnderline={editor.toggleUnderline}
    onStrikethrough={editor.toggleStrikethrough}
    onLink={editor.insertLink}
    onRemoveLink={editor.removeLink}
  />
</div>
```

### useRichText

```tsx
const {
  editorRef,           // Attach to contentEditable div
  html,                // Current HTML string
  activeFormats,       // { bold, italic, underline, ... }
  selectionRect,       // { top, left, width, height } | null
  hasSelection,        // boolean -- whether text is selected
  handleInput,         // Input event handler
  toggleBold,          // Cmd+B
  toggleItalic,        // Cmd+I
  toggleUnderline,     // Cmd+U
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

| Option | Type | Default |
|--------|------|---------|
| `initialValue` | `string` | `""` |
| `onChange` | `(html: string) => void` | -- |

## Exported Types

```ts
interface ActiveFormats {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  orderedList: boolean;
  unorderedList: boolean;
  blockquote: boolean;
  code: boolean;
  heading1: boolean;
  heading2: boolean;
  heading3: boolean;
}

interface SelectionRect {
  top: number;
  left: number;
  width: number;
  height: number;
}
```

```tsx
import type {
  RichTextEditorProps,
  RichTextToolbarProps,
  RichTextContentProps,
  BubbleMenuProps,
  UseRichTextOptions,
  ActiveFormats,
  SelectionRect,
} from "@allem-ui/rich-text";
```

## Formatting

| Format | Toolbar | Shortcut |
|--------|---------|----------|
| Bold | **B** | Cmd+B |
| Italic | *I* | Cmd+I |
| Underline | U | Cmd+U |
| Strikethrough | ~~S~~ | -- |
| Heading 1-3 | H1 H2 H3 | -- |
| Bullet List | bullet | -- |
| Numbered List | 1. | -- |
| Blockquote | " | -- |
| Code Block | </> | -- |
| Link | link | -- |

## Best Practices

- Uses native `contentEditable` + `document.execCommand` -- no third-party editor engine
- Output is HTML string -- sanitize before rendering user-generated content
- Toolbar buttons use `onMouseDown preventDefault` to keep editor focus
- Active formats update on `selectionchange` events
- BubbleMenu appears on text selection with inline formatting options
- Link popover appears inline in the toolbar -- enter URL and press Enter or click Add
- Content area uses prose typography styling
- Supports dark mode via `.dark` class selectors (uses `<style>` tags for contentEditable styling)
- Zero dependencies
