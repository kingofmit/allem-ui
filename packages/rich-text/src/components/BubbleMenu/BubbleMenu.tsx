"use client";

import React, { useState, useEffect, useRef } from "react";
import type { ActiveFormats, SelectionRect } from "../../hooks/useRichText";

export interface BubbleMenuProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
  selectionRect: SelectionRect | null;
  hasSelection: boolean;
  activeFormats: ActiveFormats;
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onStrikethrough: () => void;
  onLink: (url: string) => void;
  onRemoveLink: () => void;
}

function BubbleButton({
  active,
  onClick,
  label,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onMouseDown={(e) => e.preventDefault()}
      className={active ? "allem-bubble-btn allem-bubble-btn-active" : "allem-bubble-btn"}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export function BubbleMenu({
  editorRef,
  selectionRect,
  hasSelection,
  activeFormats,
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onLink,
  onRemoveLink,
}: BubbleMenuProps) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [visible, setVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!hasSelection || !selectionRect || !editorRef.current) {
      setVisible(false);
      setShowLinkInput(false);
      return;
    }

    const editorRect = editorRef.current.getBoundingClientRect();
    const menuWidth = 240;
    const menuHeight = 40;

    // Position above the selection, centered
    let top = selectionRect.top - editorRect.top - menuHeight - 8;
    let left = selectionRect.left - editorRect.left + selectionRect.width / 2 - menuWidth / 2;

    // If too far left, clamp
    if (left < 4) left = 4;
    // If too far right
    const maxLeft = editorRect.width - menuWidth - 4;
    if (left > maxLeft) left = maxLeft;

    // If not enough room above, show below
    if (top < -8) {
      top = selectionRect.top - editorRect.top + selectionRect.height + 8;
    }

    setPosition({ top, left });
    setVisible(true);
  }, [hasSelection, selectionRect, editorRef]);

  if (!visible) return null;

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      const url = linkUrl.startsWith("http") ? linkUrl : `https://${linkUrl}`;
      onLink(url);
    }
    setLinkUrl("");
    setShowLinkInput(false);
  };

  return (
    <>
      <style>{`
        .allem-bubble {
          position: absolute; z-index: 50;
          display: flex; align-items: center; gap: 2px; padding: 4px;
          border-radius: 10px;
          background: var(--allem-bubble-bg, #1a1a1a);
          border: 1px solid var(--allem-bubble-border, #333);
          box-shadow: 0 8px 24px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
          animation: allem-bubble-in 150ms ease-out;
        }
        .allem-bubble-btn {
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 6px; cursor: pointer;
          border: none; background: transparent; color: #d4d4d4;
          transition: all 120ms ease;
        }
        .allem-bubble-btn:hover {
          background: rgba(255,255,255,0.1); color: #fff;
        }
        .allem-bubble-btn-active {
          background: rgba(99, 102, 241, 0.25) !important;
          color: #a5b4fc !important;
        }
        .allem-bubble-sep {
          width: 1px; height: 20px; background: #404040; margin: 0 2px; flex-shrink: 0;
        }
        .allem-bubble-link-input {
          width: 160px; font-size: 13px; border: none; outline: none;
          background: transparent; color: #ededed; padding: 0 4px;
        }
        .allem-bubble-link-input::placeholder { color: #737373; }
        .allem-bubble-link-ok {
          padding: 4px 10px; border-radius: 5px; border: none; cursor: pointer;
          background: #4f46e5; color: #fff; font-size: 12px; font-weight: 500;
        }
        @keyframes allem-bubble-in {
          from { opacity: 0; transform: translateY(4px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        :root:not(.dark) .allem-bubble {
          --allem-bubble-bg: #fff;
          --allem-bubble-border: #e5e5e5;
        }
        :root:not(.dark) .allem-bubble-btn { color: #737373; }
        :root:not(.dark) .allem-bubble-btn:hover { background: #f5f5f5; color: #262626; }
        :root:not(.dark) .allem-bubble-btn-active { background: rgba(99,102,241,0.12) !important; color: #4f46e5 !important; }
        :root:not(.dark) .allem-bubble-sep { background: #e5e5e5; }
        :root:not(.dark) .allem-bubble-link-input { color: #171717; }
      `}</style>
      <div
        ref={menuRef}
        className="allem-bubble"
        style={{ top: position.top, left: position.left }}
      >
        {showLinkInput ? (
          <>
            <input
              className="allem-bubble-link-input"
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLinkSubmit();
                if (e.key === "Escape") setShowLinkInput(false);
              }}
              placeholder="Paste link..."
              autoFocus
            />
            <button onClick={handleLinkSubmit} className="allem-bubble-link-ok">
              Apply
            </button>
          </>
        ) : (
          <>
            <BubbleButton active={activeFormats.bold} onClick={onBold} label="Bold">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5H9C9.79565 2.5 10.5587 2.81607 11.1213 3.37868C11.6839 3.94129 12 4.70435 12 5.5C12 6.29565 11.6839 7.05871 11.1213 7.62132C10.5587 8.18393 9.79565 8.5 9 8.5H4V2.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 8.5H10C10.7956 8.5 11.5587 8.81607 12.1213 9.37868C12.6839 9.94129 13 10.7044 13 11.5C13 12.2956 12.6839 13.0587 12.1213 13.6213C11.5587 14.1839 10.7956 14.5 10 14.5H4V8.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BubbleButton>
            <BubbleButton active={activeFormats.italic} onClick={onItalic} label="Italic">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.5 2.5H6.5M9.5 13.5H5.5M9.5 2.5L6.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BubbleButton>
            <BubbleButton active={activeFormats.underline} onClick={onUnderline} label="Underline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5V7.5C4 8.56087 4.42143 9.57828 5.17157 10.3284C5.92172 11.0786 6.93913 11.5 8 11.5C9.06087 11.5 10.0783 11.0786 10.8284 10.3284C11.5786 9.57828 12 8.56087 12 7.5V2.5M3 14H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BubbleButton>
            <BubbleButton active={activeFormats.strikethrough} onClick={onStrikethrough} label="Strikethrough">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M10.5 4C10.34 3.53 10.02 3.12 9.6 2.84C9.18 2.57 8.67 2.44 8.17 2.48C7.67 2.52 7.19 2.73 6.82 3.07C6.45 3.41 6.2 3.87 6.12 4.36M5.5 12C5.66 12.47 5.98 12.88 6.4 13.16C6.82 13.43 7.33 13.56 7.83 13.52C8.33 13.48 8.81 13.27 9.18 12.93C9.55 12.59 9.8 12.13 9.88 11.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BubbleButton>
            <div className="allem-bubble-sep" />
            <BubbleButton onClick={() => setShowLinkInput(true)} label="Link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.67 8.67C6.95 9.05 7.32 9.37 7.74 9.6C8.16 9.82 8.62 9.96 9.09 9.99C9.57 10.03 10.05 9.96 10.49 9.79C10.94 9.63 11.35 9.36 11.68 9.03L13.68 7.03C14.29 6.39 14.63 5.54 14.63 4.66C14.62 3.77 14.27 2.93 13.64 2.3C13.02 1.68 12.18 1.32 11.29 1.31C10.41 1.3 9.56 1.64 8.92 2.25L7.81 3.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9.33 7.33C9.05 6.95 8.68 6.63 8.26 6.4C7.84 6.18 7.38 6.04 6.91 6.01C6.43 5.97 5.95 6.04 5.51 6.21C5.06 6.37 4.65 6.64 4.32 6.97L2.32 8.97C1.71 9.61 1.37 10.46 1.37 11.34C1.38 12.23 1.73 13.07 2.36 13.7C2.98 14.32 3.82 14.68 4.71 14.69C5.59 14.7 6.44 14.36 7.08 13.75L8.19 12.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </BubbleButton>
          </>
        )}
      </div>
    </>
  );
}
