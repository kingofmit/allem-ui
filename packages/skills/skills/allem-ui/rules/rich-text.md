# Rich Text Editor

## Install

```bash
npm install @allem-ui/rich-text
```

Add to Tailwind content:
```ts
"./node_modules/@allem-ui/rich-text/dist/**/*.{js,mjs}",
```

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

All-in-one editor combining toolbar and content area.

```tsx
<RichTextEditor
  initialValue=""           // Initial HTML string
  onChange={(html) => {}}    // HTML change callback
  placeholder="Write here"  // Placeholder text
  readOnly={false}           // Read-only mode
  minHeight={120}            // Min height in px
  maxHeight={400}            // Max height in px
  hideToolbar={false}        // Hide toolbar
  className=""               // Additional classes
/>
```

### Custom Layout with useRichText

For custom toolbar placement or styling:

```tsx
import { RichTextToolbar, RichTextContent, useRichText } from "@allem-ui/rich-text";

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
</div>
```

## Formatting

| Format | Toolbar | Shortcut |
|--------|---------|----------|
| Bold | **B** | ⌘B |
| Italic | *I* | ⌘I |
| Underline | U | ⌘U |
| Strikethrough | ~~S~~ | — |
| Heading 1-3 | H1 H2 H3 | — |
| Bullet List | • | — |
| Numbered List | 1. | — |
| Blockquote | " | — |
| Code Block | </> | — |
| Link | 🔗 | — |

## ActiveFormats Type

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
```

## Best Practices

- Uses native `contentEditable` + `document.execCommand` — no third-party editor engine
- Output is HTML string — sanitize before rendering user-generated content
- Toolbar buttons use `onMouseDown preventDefault` to keep editor focus
- Active formats update on `selectionchange` events
- Link popover appears inline in the toolbar — enter URL and press Enter or click Add
- Content area uses Tailwind prose classes for typography
- Supports dark mode via `dark:` prefix
- Zero dependencies
