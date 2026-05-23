"use client";

import React, { useCallback } from "react";
import { cn } from "../../utils/cn";
import { useRichText } from "../../hooks/useRichText";
import { RichTextToolbar } from "../RichTextToolbar/RichTextToolbar";
import { RichTextContent } from "../RichTextContent/RichTextContent";
import { BubbleMenu } from "../BubbleMenu/BubbleMenu";

export interface RichTextEditorProps {
  initialValue?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  maxHeight?: number;
  hideToolbar?: boolean;
  hideBubbleMenu?: boolean;
  className?: string;
}

export function RichTextEditor({
  initialValue,
  onChange,
  placeholder,
  readOnly = false,
  minHeight = 120,
  maxHeight = 400,
  hideToolbar = false,
  hideBubbleMenu = false,
  className,
}: RichTextEditorProps) {
  const {
    editorRef,
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
    undo,
    redo,
  } = useRichText({ initialValue, onChange });

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod) {
        switch (e.key.toLowerCase()) {
          case "b":
            e.preventDefault();
            toggleBold();
            break;
          case "i":
            e.preventDefault();
            toggleItalic();
            break;
          case "u":
            e.preventDefault();
            toggleUnderline();
            break;
          case "z":
            if (e.shiftKey) {
              e.preventDefault();
              redo();
            } else {
              e.preventDefault();
              undo();
            }
            break;
        }
      }
    },
    [toggleBold, toggleItalic, toggleUnderline, undo, redo]
  );

  return (
    <div
      className={cn(
        "allem-rte-wrapper",
        className
      )}
    >
      <style>{`
        .allem-rte-wrapper {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e5e5;
          background: #fff;
          transition: box-shadow 200ms ease, border-color 200ms ease;
        }
        .allem-rte-wrapper:focus-within {
          border-color: #818cf8 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .dark .allem-rte-wrapper {
          border-color: #2d2d2d;
          background: #0a0a0a;
        }
      `}</style>
      {!hideToolbar && !readOnly && (
        <RichTextToolbar
          activeFormats={activeFormats}
          onBold={toggleBold}
          onItalic={toggleItalic}
          onUnderline={toggleUnderline}
          onStrikethrough={toggleStrikethrough}
          onHeading={toggleHeading}
          onOrderedList={toggleOrderedList}
          onUnorderedList={toggleUnorderedList}
          onBlockquote={toggleBlockquote}
          onCodeBlock={toggleCodeBlock}
          onLink={insertLink}
          onRemoveLink={removeLink}
          onUndo={undo}
          onRedo={redo}
        />
      )}
      <RichTextContent
        editorRef={editorRef}
        initialValue={initialValue}
        placeholder={placeholder}
        readOnly={readOnly}
        minHeight={minHeight}
        maxHeight={maxHeight}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      >
        {!hideBubbleMenu && !readOnly && (
          <BubbleMenu
            editorRef={editorRef}
            selectionRect={selectionRect}
            hasSelection={hasSelection}
            activeFormats={activeFormats}
            onBold={toggleBold}
            onItalic={toggleItalic}
            onUnderline={toggleUnderline}
            onStrikethrough={toggleStrikethrough}
            onLink={insertLink}
            onRemoveLink={removeLink}
          />
        )}
      </RichTextContent>
    </div>
  );
}
