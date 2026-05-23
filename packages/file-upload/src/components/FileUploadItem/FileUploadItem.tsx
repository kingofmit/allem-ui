"use client";

import React from "react";
import { cn } from "../../utils/cn";
import type { UploadFile } from "../../types";

export interface FileUploadItemProps {
  file: UploadFile;
  onRemove?: (id: string) => void;
  className?: string;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)} ${units[i]}`;
}

function FileIcon({ type }: { type: string }) {
  const isImage = type.startsWith("image/");
  const isPdf = type === "application/pdf";
  const isVideo = type.startsWith("video/");

  const color = isImage
    ? "text-emerald-500"
    : isPdf
      ? "text-red-500"
      : isVideo
        ? "text-purple-500"
        : "text-neutral-400 dark:text-neutral-500";

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={color}>
      <path
        d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666v-10l-5-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 1.667v5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FileUploadItem({ file, onRemove, className }: FileUploadItemProps) {
  const isImage = file.type.startsWith("image/");

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg p-3",
        "bg-neutral-50 dark:bg-neutral-900/50",
        "border border-neutral-200 dark:border-neutral-800",
        "transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/50",
        file.status === "error" && "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/10",
        file.status === "success" && "border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10",
        className
      )}
    >
      {/* Thumbnail or Icon */}
      <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {isImage && file.preview ? (
          <img src={file.preview} alt={file.name} className="w-full h-full object-cover" />
        ) : (
          <FileIcon type={file.type} />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
          {file.name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {formatFileSize(file.size)}
          </span>
          {file.status === "uploading" && file.progress !== undefined && (
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
              {Math.round(file.progress)}%
            </span>
          )}
          {file.status === "error" && file.error && (
            <span className="text-xs text-red-600 dark:text-red-400">{file.error}</span>
          )}
          {file.status === "success" && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400">Uploaded</span>
          )}
        </div>

        {/* Progress bar */}
        {file.status === "uploading" && file.progress !== undefined && (
          <div className="mt-2 h-1 w-full rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${Math.min(100, file.progress)}%` }}
            />
          </div>
        )}
      </div>

      {/* Status Icon / Remove */}
      {file.status === "uploading" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="shrink-0 animate-spin text-indigo-500"
        >
          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" strokeDasharray="22 22" strokeLinecap="round" />
        </svg>
      ) : file.status === "success" ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-emerald-500">
          <path d="M4.5 9L7.5 12L13.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : onRemove ? (
        <button
          onClick={() => onRemove(file.id)}
          className="shrink-0 rounded-md p-1 text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:text-neutral-500 dark:hover:text-red-400 dark:hover:bg-red-900/15 transition-colors"
          aria-label={`Remove ${file.name}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
