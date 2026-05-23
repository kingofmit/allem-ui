"use client";

import React, { useEffect } from "react";
import { cn } from "../../utils/cn";

export interface RichTextContentProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
  initialValue?: string;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  maxHeight?: number;
  onInput: (e?: React.FormEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  className?: string;
  children?: React.ReactNode;
}

export function RichTextContent({
  editorRef,
  initialValue = "",
  placeholder = "Start writing...",
  readOnly = false,
  minHeight = 120,
  maxHeight = 400,
  onInput,
  onKeyDown,
  className,
  children,
}: RichTextContentProps) {
  // Set initial content
  useEffect(() => {
    if (editorRef.current && initialValue && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [editorRef, initialValue]);

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        .allem-rte-content {
          padding: 16px 20px; outline: none; overflow-y: auto;
          color: var(--allem-rte-text-color, #171717);
          line-height: 1.7; font-size: 15px;
        }
        .allem-rte-content:empty::before {
          content: attr(data-placeholder);
          color: var(--allem-rte-placeholder, #a3a3a3);
          pointer-events: none;
        }
        .allem-rte-content:focus { outline: none; }
        .allem-rte-content h1 {
          font-size: 1.625rem; font-weight: 700; margin: 1.25rem 0 0.5rem;
          line-height: 1.3; letter-spacing: -0.01em;
        }
        .allem-rte-content h2 {
          font-size: 1.375rem; font-weight: 600; margin: 1rem 0 0.5rem;
          line-height: 1.35; letter-spacing: -0.005em;
        }
        .allem-rte-content h3 {
          font-size: 1.125rem; font-weight: 600; margin: 0.875rem 0 0.375rem;
          line-height: 1.4;
        }
        .allem-rte-content p { margin-bottom: 0.5rem; }
        .allem-rte-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 0.5rem; }
        .allem-rte-content ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 0.5rem; }
        .allem-rte-content li { margin-bottom: 0.25rem; }
        .allem-rte-content blockquote {
          border-left: 3px solid var(--allem-rte-blockquote-border, #d4d4d4);
          padding-left: 1rem; font-style: italic;
          color: var(--allem-rte-blockquote-text, #525252);
          margin: 0.75rem 0;
        }
        .allem-rte-content pre {
          background: var(--allem-rte-code-bg, #f5f5f5);
          border-radius: 8px; padding: 12px 16px;
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          font-size: 0.875rem; overflow-x: auto; margin: 0.75rem 0;
          border: 1px solid var(--allem-rte-code-border, #e5e5e5);
        }
        .allem-rte-content code {
          background: var(--allem-rte-code-bg, #f5f5f5);
          border-radius: 4px; padding: 2px 6px;
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          font-size: 0.875rem;
        }
        .allem-rte-content a {
          color: var(--allem-rte-link-color, #4f46e5);
          text-decoration: underline; text-underline-offset: 2px;
        }
        .allem-rte-content a:hover { text-decoration-thickness: 2px; }
        .allem-rte-content hr {
          border: none; border-top: 2px solid var(--allem-rte-hr, #e5e5e5);
          margin: 1.5rem 0;
        }
        .allem-rte-content img { max-width: 100%; border-radius: 8px; margin: 0.5rem 0; }

        /* Dark mode */
        .dark .allem-rte-content {
          --allem-rte-text-color: #ededed;
          --allem-rte-placeholder: #525252;
          --allem-rte-blockquote-border: #404040;
          --allem-rte-blockquote-text: #a3a3a3;
          --allem-rte-code-bg: #1a1a1a;
          --allem-rte-code-border: #2d2d2d;
          --allem-rte-link-color: #818cf8;
          --allem-rte-hr: #2d2d2d;
        }
      `}</style>
      <div
        ref={editorRef}
        contentEditable={!readOnly}
        onInput={onInput}
        onKeyDown={onKeyDown}
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        aria-placeholder={placeholder}
        aria-readonly={readOnly}
        data-placeholder={placeholder}
        className={cn("allem-rte-content", readOnly && "cursor-default", className)}
        style={{ minHeight, maxHeight }}
      />
      {children}
    </div>
  );
}
