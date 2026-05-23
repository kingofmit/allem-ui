"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Button,
  ToastProvider, useToast,
} from "@allem-ui/react";
import { RichTextEditor } from "@allem-ui/rich-text";
import { DashboardShell } from "../../components/DashboardShell";

const sampleContent = `<h1>Welcome to the Rich Text Editor</h1>
<p>This is a <strong>fully-featured</strong> rich text editor built with <em>zero dependencies</em> — just React, Tailwind, and native browser APIs.</p>
<h2>Features</h2>
<ul>
<li><strong>Markdown shortcuts</strong> — type <code># </code> for headings, <code>> </code> for quotes, <code>- </code> for lists</li>
<li><strong>Bubble menu</strong> — select text to see the floating toolbar</li>
<li><strong>Keyboard shortcuts</strong> — <code>⌘B</code>, <code>⌘I</code>, <code>⌘U</code>, <code>⌘Z</code></li>
<li><strong>Full formatting</strong> — headings, lists, quotes, code, links</li>
</ul>
<h2>Try It Out</h2>
<p>Select some text above to see the <strong>bubble menu</strong> in action. Or try typing markdown shortcuts:</p>
<blockquote>This is a blockquote — type <code>> </code> at the start of a line</blockquote>
<p>Pretty cool, right? 🎉</p>`;

function RichTextShowcase() {
  const { toast } = useToast();
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (html: string) => {
    const text = html.replace(/<[^>]*>/g, " ").trim();
    const words = text ? text.split(/\s+/).length : 0;
    setWordCount(words);
  };

  return (
    <DashboardShell
      active="/rich-text"
      title="Rich Text Editor"
      headerRight={
        <>
          <Badge variant="subtle" color="primary" size="sm">@allem-ui/rich-text</Badge>
          <span className="text-sm text-neutral-400">{wordCount} words</span>
          <Button
            variant="outline"
            size="sm"
            onPress={() => toast({ title: "Saved!", description: "Your document has been saved." })}
          >
            Save
          </Button>
        </>
      }
    >
      <div className="space-y-8 max-w-5xl mx-auto">
          {/* Hero */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rich Text Editor</h1>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              A lightweight, zero-dependency WYSIWYG editor with bubble menu, markdown shortcuts, and full formatting support.
            </p>
          </div>

          {/* Main Editor */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Document Editor</span>
                <div className="flex items-center gap-2">
                  <Badge variant="subtle" color="success" size="sm">Editable</Badge>
                </div>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="p-4">
                <RichTextEditor
                  initialValue={sampleContent}
                  onChange={handleChange}
                  placeholder="Start writing your document..."
                  minHeight={300}
                  maxHeight={600}
                />
              </div>
            </CardBody>
          </Card>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardBody>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M10.5 4C10.34 3.53 10.02 3.12 9.6 2.84C9.18 2.57 8.67 2.44 8.17 2.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <h3 className="font-semibold">Bubble Menu</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Select text in the editor above to see a floating toolbar with formatting options. Works just like Notion or Google Docs.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M2 3h12M2 8h8M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <h3 className="font-semibold">Markdown Shortcuts</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Type <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-xs">#&nbsp;</code> for H1,
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-xs ml-1">-&nbsp;</code> for lists,
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-xs ml-1">&gt;&nbsp;</code> for quotes.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M5 4L1.5 8L5 12M11 4L14.5 8L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-semibold">Zero Dependencies</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Built entirely with native browser APIs — contentEditable, Selection API, and execCommand. No ProseMirror, no Slate, no Tiptap.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Keyboard Shortcuts Reference */}
          <Card>
            <CardHeader>
              <span className="font-semibold">Keyboard Shortcuts</span>
            </CardHeader>
            <CardBody>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { keys: "⌘ B", action: "Bold" },
                  { keys: "⌘ I", action: "Italic" },
                  { keys: "⌘ U", action: "Underline" },
                  { keys: "⌘ Z", action: "Undo" },
                  { keys: "⌘ ⇧ Z", action: "Redo" },
                  { keys: "# + Space", action: "Heading 1" },
                  { keys: "## + Space", action: "Heading 2" },
                  { keys: "### + Space", action: "Heading 3" },
                  { keys: "> + Space", action: "Blockquote" },
                  { keys: "- + Space", action: "Bullet List" },
                  { keys: "1. + Space", action: "Numbered List" },
                  { keys: "--- ", action: "Horizontal Rule" },
                ].map((shortcut) => (
                  <div key={shortcut.action} className="flex items-center justify-between rounded-lg bg-neutral-50 dark:bg-neutral-900 px-3 py-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{shortcut.action}</span>
                    <kbd className="rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-0.5 text-xs font-mono text-neutral-500">
                      {shortcut.keys}
                    </kbd>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Read-Only Example */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Read-Only Mode</span>
                <Badge variant="subtle" color="neutral" size="sm">Read Only</Badge>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="p-4">
                <RichTextEditor
                  initialValue="<h2>Read-Only Content</h2><p>This editor is in read-only mode. The toolbar is hidden and the content is not editable. Perfect for displaying formatted content.</p><ul><li>No toolbar shown</li><li>Content is not editable</li><li>Renders HTML faithfully</li></ul>"
                  readOnly
                  minHeight={120}
                />
              </div>
            </CardBody>
          </Card>
        </div>
    </DashboardShell>
  );
}

export default function RichTextPage() {
  return (
    <ToastProvider>
      <RichTextShowcase />
    </ToastProvider>
  );
}
