"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import { RichTextEditor } from "@allem-ui/rich-text";

function BubbleMenuDemo() {
  return (
    <div className="w-full">
      <RichTextEditor
        initialValue="<p>Select any text in this editor to see the <strong>Bubble Menu</strong> appear. It provides quick access to bold, italic, underline, strikethrough, and link formatting right at your cursor.</p>"
        onChange={() => {}}
        placeholder="Select text to see the bubble menu..."
        minHeight={150}
        hideToolbar
      />
    </div>
  );
}

function EditorDemo() {
  return (
    <div className="w-full">
      <RichTextEditor
        initialValue="<h2>Hello, Allem UI!</h2><p>This is a <strong>rich text editor</strong> with <em>zero dependencies</em>. Try formatting text with the toolbar above or keyboard shortcuts:</p><ul><li><strong>⌘B</strong> for bold</li><li><strong>⌘I</strong> for italic</li><li><strong>⌘U</strong> for underline</li></ul><blockquote>This is a blockquote — great for highlighting important information.</blockquote><p>You can also add <a href='https://kingallem.com'>links</a>, code blocks, and more.</p>"
        onChange={() => {}}
        placeholder="Start writing..."
        minHeight={200}
      />
    </div>
  );
}

function ReadOnlyDemo() {
  return (
    <div className="w-full">
      <RichTextEditor
        initialValue="<h3>Read-only mode</h3><p>This editor is in <strong>read-only mode</strong>. The toolbar is hidden and content cannot be edited. Useful for displaying formatted content.</p>"
        readOnly
        minHeight={100}
      />
    </div>
  );
}

function MinimalDemo() {
  return (
    <div className="w-full">
      <RichTextEditor
        placeholder="Write a comment..."
        minHeight={80}
        maxHeight={200}
        hideToolbar
      />
    </div>
  );
}

export default function RichTextPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Rich Text Editor</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/rich-text</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Lightweight WYSIWYG editor with formatting toolbar, keyboard shortcuts, and dark mode. Zero dependencies — built on native contentEditable.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code="npm install @allem-ui/rich-text">
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/rich-text</code></pre>
        </ComponentPreview>
      </div>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        Add the <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-sm font-mono">@source</code> directive to your CSS so Tailwind generates the component classes:
      </p>
      <div className="mt-2">
        <ComponentPreview code={`@source "@allem-ui/rich-text";`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>{`@source "@allem-ui/rich-text";`}</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Editor</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Full editor with toolbar. Try the formatting buttons and keyboard shortcuts.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { RichTextEditor } from "@allem-ui/rich-text";\n\n<RichTextEditor\n  initialValue="<p>Hello world</p>"\n  onChange={(html) => console.log(html)}\n  placeholder="Start writing..."\n  minHeight={200}\n/>`}>
          <EditorDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Read-Only</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Display formatted content without editing. Toolbar is automatically hidden.</p>
      <div className="mt-4">
        <ComponentPreview code={`<RichTextEditor\n  initialValue="<h3>Read-only</h3><p>Content here...</p>"\n  readOnly\n/>`}>
          <ReadOnlyDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Bubble Menu</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Select text to reveal a floating toolbar with inline formatting options. The bubble menu appears automatically — hide the static toolbar for a distraction-free writing experience.</p>
      <div className="mt-4">
        <ComponentPreview code={`<RichTextEditor\n  initialValue="<p>Select text to see the bubble menu...</p>"\n  onChange={(html) => console.log(html)}\n  hideToolbar\n  minHeight={150}\n/>\n\n// Or use BubbleMenu standalone with useRichText:\nimport { BubbleMenu, useRichText } from "@allem-ui/rich-text";\n\n<BubbleMenu\n  editorRef={editor.editorRef}\n  selectionRect={editor.selectionRect}\n  hasSelection={editor.hasSelection}\n  activeFormats={editor.activeFormats}\n  onBold={editor.toggleBold}\n  onItalic={editor.toggleItalic}\n  onUnderline={editor.toggleUnderline}\n  onStrikethrough={editor.toggleStrikethrough}\n  onLink={editor.insertLink}\n  onRemoveLink={editor.removeLink}\n/>`}>
          <BubbleMenuDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Hidden Toolbar</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Use hideToolbar for a minimal writing experience. Keyboard shortcuts still work.</p>
      <div className="mt-4">
        <ComponentPreview code={`<RichTextEditor\n  placeholder="Write a comment..."\n  minHeight={80}\n  maxHeight={200}\n  hideToolbar\n/>`}>
          <MinimalDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">RichTextEditor Props</h2>
      <PropsTable
        props={[
          { name: "initialValue", type: "string", default: '""', description: "Initial HTML content" },
          { name: "onChange", type: "(html: string) => void", description: "Called on content change with HTML string" },
          { name: "placeholder", type: "string", default: '"Start writing..."', description: "Placeholder text" },
          { name: "readOnly", type: "boolean", default: "false", description: "Read-only mode (hides toolbar)" },
          { name: "minHeight", type: "number", default: "120", description: "Minimum editor height in pixels" },
          { name: "maxHeight", type: "number", default: "400", description: "Maximum editor height in pixels" },
          { name: "hideToolbar", type: "boolean", default: "false", description: "Hide the formatting toolbar" },
          { name: "hideBubbleMenu", type: "boolean", default: "false", description: "Hide the floating bubble menu on text selection" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">useRichText</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Hook for building a custom editor UI. Use this when you need full control over the toolbar and layout.
      </p>
      <div className="mt-4">
        <ComponentPreview code={`import { useRichText, RichTextToolbar, RichTextContent } from "@allem-ui/rich-text";\n\nconst editor = useRichText({\n  initialValue: "<p>Hello</p>",\n  onChange: (html) => console.log(html),\n});\n\n<RichTextToolbar\n  activeFormats={editor.activeFormats}\n  onBold={editor.toggleBold}\n  onItalic={editor.toggleItalic}\n  onUnderline={editor.toggleUnderline}\n  onStrikethrough={editor.toggleStrikethrough}\n  onHeading={editor.toggleHeading}\n  onOrderedList={editor.toggleOrderedList}\n  onUnorderedList={editor.toggleUnorderedList}\n  onBlockquote={editor.toggleBlockquote}\n  onCodeBlock={editor.toggleCodeBlock}\n  onLink={editor.insertLink}\n  onRemoveLink={editor.removeLink}\n  onUndo={editor.undo}\n  onRedo={editor.redo}\n/>\n<RichTextContent\n  editorRef={editor.editorRef}\n  initialValue="<p>Hello</p>"\n  onInput={editor.handleInput}\n/>`}>
          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400 italic">
            See the code example for composing a custom editor with useRichText.
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-6 text-lg font-medium">Options</h3>
      <PropsTable
        props={[
          { name: "initialValue", type: "string", description: "Initial HTML content" },
          { name: "onChange", type: "(html: string) => void", description: "Called when content changes" },
        ]}
      />
      <h3 className="mt-6 text-lg font-medium">Return Value</h3>
      <PropsTable
        props={[
          { name: "editorRef", type: "RefObject<HTMLDivElement>", description: "Ref to attach to the editable element" },
          { name: "html", type: "string", description: "Current HTML content" },
          { name: "activeFormats", type: "ActiveFormats", description: "Object of currently active formatting states" },
          { name: "selectionRect", type: "SelectionRect | null", description: "Bounding rect of the current text selection" },
          { name: "hasSelection", type: "boolean", description: "Whether text is currently selected" },
          { name: "handleInput", type: "() => void", description: "Input event handler" },
          { name: "toggleBold", type: "() => void", description: "Toggle bold formatting" },
          { name: "toggleItalic", type: "() => void", description: "Toggle italic formatting" },
          { name: "toggleUnderline", type: "() => void", description: "Toggle underline formatting" },
          { name: "toggleStrikethrough", type: "() => void", description: "Toggle strikethrough formatting" },
          { name: "toggleHeading", type: "(level: 1 | 2 | 3) => void", description: "Toggle heading level" },
          { name: "toggleOrderedList", type: "() => void", description: "Toggle ordered list" },
          { name: "toggleUnorderedList", type: "() => void", description: "Toggle unordered list" },
          { name: "toggleBlockquote", type: "() => void", description: "Toggle blockquote" },
          { name: "toggleCodeBlock", type: "() => void", description: "Toggle code block" },
          { name: "insertLink", type: "(url: string) => void", description: "Insert a link at selection" },
          { name: "removeLink", type: "() => void", description: "Remove link from selection" },
          { name: "insertHorizontalRule", type: "() => void", description: "Insert a horizontal rule" },
          { name: "undo", type: "() => void", description: "Undo last action" },
          { name: "redo", type: "() => void", description: "Redo last undone action" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">BubbleMenu Props</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Floating inline toolbar that appears on text selection. Built into RichTextEditor by default — use standalone with useRichText for custom layouts.
      </p>
      <PropsTable
        props={[
          { name: "editorRef", type: "RefObject<HTMLDivElement>", required: true, description: "Ref to the editable element" },
          { name: "selectionRect", type: "SelectionRect | null", required: true, description: "Bounding rect of the current selection" },
          { name: "hasSelection", type: "boolean", required: true, description: "Whether text is currently selected" },
          { name: "activeFormats", type: "ActiveFormats", required: true, description: "Currently active formatting states" },
          { name: "onBold", type: "() => void", required: true, description: "Toggle bold" },
          { name: "onItalic", type: "() => void", required: true, description: "Toggle italic" },
          { name: "onUnderline", type: "() => void", required: true, description: "Toggle underline" },
          { name: "onStrikethrough", type: "() => void", required: true, description: "Toggle strikethrough" },
          { name: "onLink", type: "(url: string) => void", required: true, description: "Insert a link" },
          { name: "onRemoveLink", type: "() => void", required: true, description: "Remove a link" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">RichTextToolbar Props</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Standalone toolbar component for custom editor layouts via useRichText.
      </p>
      <PropsTable
        props={[
          { name: "activeFormats", type: "ActiveFormats", required: true, description: "Current formatting state" },
          { name: "onBold", type: "() => void", required: true, description: "Toggle bold" },
          { name: "onItalic", type: "() => void", required: true, description: "Toggle italic" },
          { name: "onUnderline", type: "() => void", required: true, description: "Toggle underline" },
          { name: "onStrikethrough", type: "() => void", required: true, description: "Toggle strikethrough" },
          { name: "onHeading", type: "(level: 1 | 2 | 3) => void", required: true, description: "Toggle heading level" },
          { name: "onOrderedList", type: "() => void", required: true, description: "Toggle ordered list" },
          { name: "onUnorderedList", type: "() => void", required: true, description: "Toggle unordered list" },
          { name: "onBlockquote", type: "() => void", required: true, description: "Toggle blockquote" },
          { name: "onCodeBlock", type: "() => void", required: true, description: "Toggle code block" },
          { name: "onLink", type: "(url: string) => void", required: true, description: "Insert link" },
          { name: "onRemoveLink", type: "() => void", required: true, description: "Remove link" },
          { name: "onUndo", type: "() => void", description: "Undo action" },
          { name: "onRedo", type: "() => void", description: "Redo action" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">RichTextContent Props</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        The editable content area. Use with useRichText for custom layouts.
      </p>
      <PropsTable
        props={[
          { name: "editorRef", type: "RefObject<HTMLDivElement>", required: true, description: "Ref from useRichText" },
          { name: "initialValue", type: "string", default: '""', description: "Initial HTML content" },
          { name: "placeholder", type: "string", default: '"Start writing..."', description: "Placeholder text" },
          { name: "readOnly", type: "boolean", default: "false", description: "Disable editing" },
          { name: "minHeight", type: "number", default: "120", description: "Minimum height in pixels" },
          { name: "maxHeight", type: "number", default: "400", description: "Maximum height in pixels" },
          { name: "onInput", type: "() => void", required: true, description: "Input handler from useRichText" },
          { name: "onKeyDown", type: "(e: KeyboardEvent) => void", description: "Keyboard event handler" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", description: "Overlay elements like BubbleMenu" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ActiveFormats Type</h2>
      <PropsTable
        props={[
          { name: "bold", type: "boolean", description: "Bold is active" },
          { name: "italic", type: "boolean", description: "Italic is active" },
          { name: "underline", type: "boolean", description: "Underline is active" },
          { name: "strikethrough", type: "boolean", description: "Strikethrough is active" },
          { name: "orderedList", type: "boolean", description: "Ordered list is active" },
          { name: "unorderedList", type: "boolean", description: "Unordered list is active" },
          { name: "blockquote", type: "boolean", description: "Blockquote is active" },
          { name: "code", type: "boolean", description: "Code block is active" },
          { name: "heading1", type: "boolean", description: "Heading 1 is active" },
          { name: "heading2", type: "boolean", description: "Heading 2 is active" },
          { name: "heading3", type: "boolean", description: "Heading 3 is active" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">SelectionRect Type</h2>
      <PropsTable
        props={[
          { name: "top", type: "number", description: "Top position in pixels" },
          { name: "left", type: "number", description: "Left position in pixels" },
          { name: "width", type: "number", description: "Selection width in pixels" },
          { name: "height", type: "number", description: "Selection height in pixels" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">Keyboard Shortcuts</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Format</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Shortcut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Bold</td><td className="px-4 py-2.5"><kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-xs">⌘B</kbd></td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Italic</td><td className="px-4 py-2.5"><kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-xs">⌘I</kbd></td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Underline</td><td className="px-4 py-2.5"><kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-xs">⌘U</kbd></td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Undo</td><td className="px-4 py-2.5"><kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-xs">⌘Z</kbd></td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Redo</td><td className="px-4 py-2.5"><kbd className="rounded border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 text-xs">⌘⇧Z</kbd></td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-semibold">Markdown Shortcuts</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Type these at the start of a new line to auto-convert into formatted blocks.
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Input</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs"># </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Heading 1</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">## </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Heading 2</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">### </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Heading 3</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">&gt; </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Blockquote</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">- </code> or <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">* </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Unordered list</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">1. </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Ordered list</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">```</code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Code block</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100"><code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs">--- </code></td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Horizontal rule</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-semibold">Toolbar Formats</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        The toolbar supports: Bold, Italic, Underline, Strikethrough, Heading 1–3, Ordered List, Unordered List, Blockquote, Code Block, Link, Undo, and Redo.
      </p>
    </div>
  );
}
