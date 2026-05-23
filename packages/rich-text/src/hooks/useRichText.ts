"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export interface UseRichTextOptions {
  initialValue?: string;
  onChange?: (html: string) => void;
}

export interface ActiveFormats {
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

export interface SelectionRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function queryFormats(): ActiveFormats {
  return {
    bold: document.queryCommandState("bold"),
    italic: document.queryCommandState("italic"),
    underline: document.queryCommandState("underline"),
    strikethrough: document.queryCommandState("strikeThrough"),
    orderedList: document.queryCommandState("insertOrderedList"),
    unorderedList: document.queryCommandState("insertUnorderedList"),
    blockquote: false,
    code: false,
    heading1: false,
    heading2: false,
    heading3: false,
  };
}

function getBlockTag(): string | null {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;
  let node: Node | null = sel.anchorNode;
  while (node && node !== document.body) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = (node as Element).tagName.toLowerCase();
      if (["h1", "h2", "h3", "blockquote", "pre", "code"].includes(tag)) {
        return tag;
      }
    }
    node = node.parentNode;
  }
  return null;
}

function getSelectionRect(): SelectionRect | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return null;
  return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
}

// Markdown shortcut patterns
const MARKDOWN_PATTERNS: Array<{ pattern: RegExp; action: string; value?: string }> = [
  { pattern: /^###\s$/, action: "formatBlock", value: "<h3>" },
  { pattern: /^##\s$/, action: "formatBlock", value: "<h2>" },
  { pattern: /^#\s$/, action: "formatBlock", value: "<h1>" },
  { pattern: /^>\s$/, action: "formatBlock", value: "<blockquote>" },
  { pattern: /^```$/, action: "formatBlock", value: "<pre>" },
  { pattern: /^---$/, action: "insertHorizontalRule" },
  { pattern: /^-\s$/, action: "insertUnorderedList" },
  { pattern: /^\*\s$/, action: "insertUnorderedList" },
  { pattern: /^1\.\s$/, action: "insertOrderedList" },
];

export function useRichText(options: UseRichTextOptions = {}) {
  const { initialValue = "", onChange } = options;
  const editorRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState(initialValue);
  const [activeFormats, setActiveFormats] = useState<ActiveFormats>({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    orderedList: false,
    unorderedList: false,
    blockquote: false,
    code: false,
    heading1: false,
    heading2: false,
    heading3: false,
  });
  const [selectionRect, setSelectionRect] = useState<SelectionRect | null>(null);
  const [hasSelection, setHasSelection] = useState(false);

  const updateFormats = useCallback(() => {
    const formats = queryFormats();
    const blockTag = getBlockTag();
    formats.heading1 = blockTag === "h1";
    formats.heading2 = blockTag === "h2";
    formats.heading3 = blockTag === "h3";
    formats.blockquote = blockTag === "blockquote";
    formats.code = blockTag === "pre" || blockTag === "code";
    setActiveFormats(formats);

    // Update selection for bubble menu
    const rect = getSelectionRect();
    setSelectionRect(rect);
    setHasSelection(!!rect);
  }, []);

  const exec = useCallback(
    (command: string, value?: string) => {
      document.execCommand(command, false, value);
      editorRef.current?.focus();
      updateFormats();
      const newHtml = editorRef.current?.innerHTML || "";
      setHtml(newHtml);
      onChange?.(newHtml);
    },
    [onChange, updateFormats]
  );

  const toggleBold = useCallback(() => exec("bold"), [exec]);
  const toggleItalic = useCallback(() => exec("italic"), [exec]);
  const toggleUnderline = useCallback(() => exec("underline"), [exec]);
  const toggleStrikethrough = useCallback(() => exec("strikeThrough"), [exec]);
  const toggleOrderedList = useCallback(() => exec("insertOrderedList"), [exec]);
  const toggleUnorderedList = useCallback(() => exec("insertUnorderedList"), [exec]);
  const undo = useCallback(() => exec("undo"), [exec]);
  const redo = useCallback(() => exec("redo"), [exec]);

  const toggleHeading = useCallback(
    (level: 1 | 2 | 3) => {
      const blockTag = getBlockTag();
      const target = `h${level}`;
      if (blockTag === target) {
        exec("formatBlock", "<p>");
      } else {
        exec("formatBlock", `<h${level}>`);
      }
    },
    [exec]
  );

  const toggleBlockquote = useCallback(() => {
    const blockTag = getBlockTag();
    if (blockTag === "blockquote") {
      exec("formatBlock", "<p>");
    } else {
      exec("formatBlock", "<blockquote>");
    }
  }, [exec]);

  const toggleCodeBlock = useCallback(() => {
    const blockTag = getBlockTag();
    if (blockTag === "pre") {
      exec("formatBlock", "<p>");
    } else {
      exec("formatBlock", "<pre>");
    }
  }, [exec]);

  const insertLink = useCallback(
    (url: string) => {
      if (url) {
        exec("createLink", url);
      }
    },
    [exec]
  );

  const removeLink = useCallback(() => exec("unlink"), [exec]);

  const insertHorizontalRule = useCallback(() => exec("insertHorizontalRule"), [exec]);

  // Handle markdown shortcuts
  const handleMarkdownShortcuts = useCallback(
    (e: InputEvent) => {
      if (e.inputType !== "insertText" || !editorRef.current) return;

      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;

      const node = sel.anchorNode;
      if (!node || node.nodeType !== Node.TEXT_NODE) return;

      const text = node.textContent || "";
      const offset = sel.anchorOffset;
      const textUpToCursor = text.substring(0, offset);

      for (const { pattern, action, value } of MARKDOWN_PATTERNS) {
        if (pattern.test(textUpToCursor)) {
          // Remove the markdown characters
          const range = document.createRange();
          range.setStart(node, 0);
          range.setEnd(node, offset);
          range.deleteContents();

          // Apply the block format
          document.execCommand(action, false, value);
          editorRef.current.focus();
          updateFormats();
          const newHtml = editorRef.current.innerHTML || "";
          setHtml(newHtml);
          onChange?.(newHtml);
          return;
        }
      }
    },
    [onChange, updateFormats]
  );

  const handleInput = useCallback(
    (e?: React.FormEvent) => {
      const newHtml = editorRef.current?.innerHTML || "";
      setHtml(newHtml);
      onChange?.(newHtml);
      updateFormats();

      // Check markdown shortcuts
      if (e && (e.nativeEvent as InputEvent).inputType === "insertText") {
        handleMarkdownShortcuts(e.nativeEvent as InputEvent);
      }
    },
    [onChange, updateFormats, handleMarkdownShortcuts]
  );

  // Sync selection changes to active formats
  useEffect(() => {
    document.addEventListener("selectionchange", updateFormats);
    return () => document.removeEventListener("selectionchange", updateFormats);
  }, [updateFormats]);

  return {
    editorRef,
    html,
    activeFormats,
    selectionRect,
    hasSelection,
    handleInput,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleOrderedList,
    toggleUnorderedList,
    toggleHeading,
    toggleBlockquote,
    toggleCodeBlock,
    insertLink,
    removeLink,
    insertHorizontalRule,
    undo,
    redo,
  };
}
