"use client";

import React, { useState } from "react";
import { cn } from "../../utils/cn";
import type { ActiveFormats } from "../../hooks/useRichText";

export interface RichTextToolbarProps {
  activeFormats: ActiveFormats;
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onStrikethrough: () => void;
  onHeading: (level: 1 | 2 | 3) => void;
  onOrderedList: () => void;
  onUnorderedList: () => void;
  onBlockquote: () => void;
  onCodeBlock: () => void;
  onLink: (url: string) => void;
  onRemoveLink: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  className?: string;
}

function ToolbarButton({
  active,
  onClick,
  label,
  shortcut,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  label: string;
  shortcut?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onMouseDown={(e) => e.preventDefault()}
      className={cn(
        "allem-rte-btn",
        active && "allem-rte-btn-active"
      )}
      aria-label={label}
      aria-pressed={active}
      title={shortcut ? `${label} (${shortcut})` : label}
    >
      {children}
    </button>
  );
}

function Separator() {
  return <div className="allem-rte-sep" />;
}

export function RichTextToolbar({
  activeFormats,
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onHeading,
  onOrderedList,
  onUnorderedList,
  onBlockquote,
  onCodeBlock,
  onLink,
  onRemoveLink,
  onUndo,
  onRedo,
  className,
}: RichTextToolbarProps) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const isMac = typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
  const mod = isMac ? "\u2318" : "Ctrl+";

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      const url = linkUrl.startsWith("http") ? linkUrl : `https://${linkUrl}`;
      onLink(url);
    }
    setLinkUrl("");
    setShowLinkInput(false);
  };

  return (
    <div className={cn("allem-rte-toolbar-wrap", className)}>
      <style>{`
        .allem-rte-toolbar-wrap { position: relative; }
        .allem-rte-toolbar {
          display: flex; align-items: center; gap: 2px; flex-wrap: wrap;
          padding: 6px 10px; border-bottom: 1px solid var(--allem-rte-border, #e5e5e5);
          background: var(--allem-rte-toolbar-bg, #fafafa);
        }
        .allem-rte-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 8px; cursor: pointer;
          border: none; background: transparent; color: var(--allem-rte-icon, #737373);
          transition: all 150ms ease; position: relative; flex-shrink: 0;
        }
        .allem-rte-btn:hover {
          background: var(--allem-rte-hover-bg, #f0f0f0);
          color: var(--allem-rte-hover-color, #404040);
        }
        .allem-rte-btn-active {
          background: var(--allem-rte-active-bg, rgba(99, 102, 241, 0.12)) !important;
          color: var(--allem-rte-active-color, #4f46e5) !important;
        }
        .allem-rte-sep {
          width: 1px; height: 22px; flex-shrink: 0; margin: 0 6px;
          background: var(--allem-rte-border, #e5e5e5);
        }
        .allem-rte-link-popover {
          position: absolute; left: 10px; top: 100%; margin-top: 4px; z-index: 10;
          display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          border-radius: 10px; border: 1px solid var(--allem-rte-border, #e5e5e5);
          background: var(--allem-rte-bg, #fff);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04);
        }
        .allem-rte-link-input {
          width: 220px; font-size: 14px; border: none; outline: none; background: transparent;
          color: var(--allem-rte-text, #171717);
        }
        .allem-rte-link-input::placeholder { color: #a3a3a3; }
        .allem-rte-link-add {
          padding: 5px 12px; border-radius: 6px; border: none; cursor: pointer;
          background: #4f46e5; color: #fff; font-size: 13px; font-weight: 500;
          transition: background 150ms;
        }
        .allem-rte-link-add:hover { background: #4338ca; }
        .allem-rte-link-remove {
          padding: 5px 8px; border-radius: 6px; border: none; cursor: pointer;
          background: transparent; color: #a3a3a3; font-size: 13px;
          transition: color 150ms;
        }
        .allem-rte-link-remove:hover { color: #ef4444; }

        /* Dark mode */
        .dark .allem-rte-toolbar-wrap {
          --allem-rte-border: #2d2d2d;
          --allem-rte-toolbar-bg: #0a0a0a;
          --allem-rte-bg: #0a0a0a;
          --allem-rte-text: #ededed;
          --allem-rte-icon: #a3a3a3;
          --allem-rte-hover-bg: #262626;
          --allem-rte-hover-color: #ededed;
          --allem-rte-active-bg: rgba(99, 102, 241, 0.18);
          --allem-rte-active-color: #818cf8;
        }
      `}</style>
      <div className="allem-rte-toolbar">
        {/* Undo / Redo */}
        {onUndo && (
          <>
            <ToolbarButton onClick={onUndo} label="Undo" shortcut={`${mod}Z`}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 6h8a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H8M3 6l3-3M3 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ToolbarButton>
            {onRedo && (
              <ToolbarButton onClick={onRedo} label="Redo" shortcut={`${mod}Shift+Z`}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M13 6H5a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3M13 6l-3-3M13 6l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ToolbarButton>
            )}
            <Separator />
          </>
        )}

        {/* Headings */}
        <ToolbarButton active={activeFormats.heading1} onClick={() => onHeading(1)} label="Heading 1" shortcut="# ">
          <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>H1</span>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.heading2} onClick={() => onHeading(2)} label="Heading 2" shortcut="## ">
          <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>H2</span>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.heading3} onClick={() => onHeading(3)} label="Heading 3" shortcut="### ">
          <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>H3</span>
        </ToolbarButton>

        <Separator />

        {/* Inline formatting */}
        <ToolbarButton active={activeFormats.bold} onClick={onBold} label="Bold" shortcut={`${mod}B`}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M4 2.5H9C9.79565 2.5 10.5587 2.81607 11.1213 3.37868C11.6839 3.94129 12 4.70435 12 5.5C12 6.29565 11.6839 7.05871 11.1213 7.62132C10.5587 8.18393 9.79565 8.5 9 8.5H4V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 8.5H10C10.7956 8.5 11.5587 8.81607 12.1213 9.37868C12.6839 9.94129 13 10.7044 13 11.5C13 12.2956 12.6839 13.0587 12.1213 13.6213C11.5587 14.1839 10.7956 14.5 10 14.5H4V8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.italic} onClick={onItalic} label="Italic" shortcut={`${mod}I`}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M10.5 2.5H6.5M9.5 13.5H5.5M9.5 2.5L6.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.underline} onClick={onUnderline} label="Underline" shortcut={`${mod}U`}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M4 2.5V7.5C4 8.56087 4.42143 9.57828 5.17157 10.3284C5.92172 11.0786 6.93913 11.5 8 11.5C9.06087 11.5 10.0783 11.0786 10.8284 10.3284C11.5786 9.57828 12 8.56087 12 7.5V2.5M3 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.strikethrough} onClick={onStrikethrough} label="Strikethrough">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M10.5 4C10.3379 3.52583 10.0203 3.11713 9.59782 2.84152C9.17538 2.56591 8.67278 2.43892 8.17039 2.48025C7.668 2.52158 7.19343 2.72891 6.82205 3.06975C6.45066 3.41059 6.20316 3.86541 6.11914 4.36211M5.5 12C5.66215 12.4742 5.97969 12.8829 6.40218 13.1585C6.82462 13.4341 7.32722 13.5611 7.82961 13.5197C8.332 13.4784 8.80657 13.2711 9.17795 12.9302C9.54934 12.5894 9.79684 12.1346 9.88086 11.6379" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>

        <Separator />

        {/* Lists */}
        <ToolbarButton active={activeFormats.unorderedList} onClick={onUnorderedList} label="Bullet list" shortcut="- ">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M6 3.5H14M6 8H14M6 12.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="2.5" cy="3.5" r="1" fill="currentColor" />
            <circle cx="2.5" cy="8" r="1" fill="currentColor" />
            <circle cx="2.5" cy="12.5" r="1" fill="currentColor" />
          </svg>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.orderedList} onClick={onOrderedList} label="Numbered list" shortcut="1. ">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M6 3.5H14M6 8H14M6 12.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <text x="1.5" y="5.5" fill="currentColor" fontSize="6" fontWeight="700" fontFamily="system-ui">1</text>
            <text x="1.5" y="10" fill="currentColor" fontSize="6" fontWeight="700" fontFamily="system-ui">2</text>
            <text x="1.5" y="14.5" fill="currentColor" fontSize="6" fontWeight="700" fontFamily="system-ui">3</text>
          </svg>
        </ToolbarButton>

        <Separator />

        {/* Block */}
        <ToolbarButton active={activeFormats.blockquote} onClick={onBlockquote} label="Blockquote" shortcut="> ">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3 4.5H7V8.5L4 12.5M9 4.5H13V8.5L10 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>
        <ToolbarButton active={activeFormats.code} onClick={onCodeBlock} label="Code block" shortcut="```">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L1.5 8L5 12M11 4L14.5 8L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>

        <Separator />

        {/* Link */}
        <ToolbarButton
          onClick={() => setShowLinkInput(!showLinkInput)}
          label="Insert link"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M6.66667 8.66667C6.95297 9.04943 7.31825 9.36612 7.73732 9.59529C8.15639 9.82446 8.61928 9.96074 9.09458 9.99489C9.56988 10.029 10.0469 9.96024 10.4933 9.79319C10.9397 9.62614 11.345 9.36471 11.6827 9.02667L13.6827 7.02667C14.2948 6.39265 14.6345 5.54188 14.6271 4.65734C14.6197 3.7728 14.2658 2.92774 13.6431 2.30362C13.0204 1.67949 12.1762 1.32361 11.2917 1.31429C10.4071 1.30497 9.55576 1.64268 8.92 2.25333L7.80667 3.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33333 7.33333C9.04703 6.95058 8.68175 6.63388 8.26268 6.40471C7.84361 6.17554 7.38072 6.03926 6.90542 6.00511C6.43012 5.97096 5.95314 6.03976 5.50671 6.20681C5.06028 6.37386 4.65497 6.63529 4.31733 6.97333L2.31733 8.97333C1.70523 9.60735 1.36552 10.4581 1.37288 11.3427C1.38024 12.2272 1.73419 13.0723 2.35689 13.6964C2.97958 14.3205 3.82381 14.6764 4.70835 14.6857C5.59289 14.695 6.44424 14.3573 7.08 13.7467L8.18667 12.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ToolbarButton>
      </div>

      {/* Link input popover */}
      {showLinkInput && (
        <div className="allem-rte-link-popover">
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLinkSubmit();
              if (e.key === "Escape") setShowLinkInput(false);
            }}
            placeholder="https://..."
            className="allem-rte-link-input"
            autoFocus
          />
          <button onClick={handleLinkSubmit} className="allem-rte-link-add">
            Add
          </button>
          <button
            onClick={() => { onRemoveLink(); setShowLinkInput(false); }}
            onMouseDown={(e) => e.preventDefault()}
            className="allem-rte-link-remove"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
