"use client";

import React from "react";
import { cn } from "../../utils/cn";
import type { UploadFile } from "../../types";
import { FileUploadItem } from "../FileUploadItem/FileUploadItem";

export interface FileUploadListProps {
  files: UploadFile[];
  onRemove?: (id: string) => void;
  className?: string;
}

export function FileUploadList({ files, onRemove, className }: FileUploadListProps) {
  if (files.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {files.map((file) => (
        <FileUploadItem key={file.id} file={file} onRemove={onRemove} />
      ))}
    </div>
  );
}
