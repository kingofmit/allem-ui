"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "../../utils/cn";

export interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxFiles?: number;
  currentCount?: number;
  maxSize?: number;
  className?: string;
  children?: React.ReactNode;
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(0)}GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(0)}MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${bytes}B`;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = true,
  disabled = false,
  maxFiles,
  currentCount = 0,
  maxSize,
  className,
  children,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const dragCounter = useRef(0);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || disabled) return;
      onFilesSelected(Array.from(fileList));
    },
    [onFilesSelected, disabled]
  );

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounter.current++;
      if (e.dataTransfer.items.length > 0) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragOver(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      dragCounter.current = 0;
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles, disabled]
  );

  const isFull = maxFiles !== undefined && currentCount >= maxFiles;

  return (
    <div
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      role="button"
      tabIndex={disabled || isFull ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Upload files"
      aria-disabled={disabled || isFull}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 py-6 px-6",
        "rounded-xl border-2 border-dashed",
        "transition-all duration-200 cursor-pointer",
        "outline-none",
        isDragOver
          ? "border-indigo-400 bg-indigo-50 scale-[1.01] shadow-[0_0_20px_rgba(99,102,241,0.15)] dark:border-indigo-500 dark:bg-indigo-500/10 dark:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          : "border-neutral-300 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-600",
        !isDragOver && "bg-neutral-50/80 dark:bg-neutral-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5",
        "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950",
        (disabled || isFull) && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {children || (
        <>
          <div
            className={cn(
              "flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200",
              isDragOver
                ? "bg-indigo-100 text-indigo-600 scale-110 dark:bg-indigo-500/20 dark:text-indigo-400"
                : "bg-neutral-200/80 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
            )}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              <span className="text-indigo-600 dark:text-indigo-400">Click to upload</span> or drag and drop
            </p>
            <div className="mt-1 flex items-center justify-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span>{accept ? accept.split(",").join(", ") : "Any file type"}</span>
              {maxSize && (
                <>
                  <span className="w-0.5 h-0.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <span>Max {formatSize(maxSize)}</span>
                </>
              )}
            </div>
            {maxFiles !== undefined && (
              <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                {currentCount} of {maxFiles} files
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
