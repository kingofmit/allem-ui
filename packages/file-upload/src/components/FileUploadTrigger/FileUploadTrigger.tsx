"use client";

import React, { useRef } from "react";

export interface FileUploadTriggerProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export function FileUploadTrigger({
  onFilesSelected,
  accept,
  multiple = true,
  disabled = false,
  children,
}: FileUploadTriggerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          if (e.target.files) {
            onFilesSelected(Array.from(e.target.files));
            e.target.value = "";
          }
        }}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />
      <span
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {children}
      </span>
    </>
  );
}
