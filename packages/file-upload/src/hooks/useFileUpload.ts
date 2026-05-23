"use client";

import { useReducer, useCallback, useRef } from "react";
import type { UploadFile, RejectedFile, FileUploadAction } from "../types";

let fileIdCounter = 0;

function generateId(): string {
  return `file-${++fileIdCounter}-${Date.now()}`;
}

function isAccepted(file: File, accept?: string[]): boolean {
  if (!accept || accept.length === 0) return true;
  return accept.some((type) => {
    if (type.endsWith("/*")) {
      return file.type.startsWith(type.replace("/*", "/"));
    }
    if (type.startsWith(".")) {
      return file.name.toLowerCase().endsWith(type.toLowerCase());
    }
    return file.type === type;
  });
}

function createUploadFile(file: File): UploadFile {
  const isImage = file.type.startsWith("image/");
  return {
    id: generateId(),
    file,
    name: file.name,
    size: file.size,
    type: file.type,
    preview: isImage ? URL.createObjectURL(file) : undefined,
    progress: 0,
    status: "idle",
  };
}

function reducer(state: UploadFile[], action: FileUploadAction): UploadFile[] {
  switch (action.type) {
    case "ADD": {
      const { files, maxFiles, maxSize, accept } = action;
      const validFiles = files.filter((f) => {
        if (accept && !isAccepted(f, accept)) return false;
        if (maxSize && f.size > maxSize) return false;
        return true;
      });
      const newFiles = validFiles.map(createUploadFile);
      const merged = [...state, ...newFiles];
      return maxFiles ? merged.slice(0, maxFiles) : merged;
    }
    case "REMOVE": {
      const file = state.find((f) => f.id === action.id);
      if (file?.preview) URL.revokeObjectURL(file.preview);
      return state.filter((f) => f.id !== action.id);
    }
    case "UPDATE_PROGRESS":
      return state.map((f) =>
        f.id === action.id ? { ...f, progress: action.progress } : f
      );
    case "SET_STATUS":
      return state.map((f) =>
        f.id === action.id ? { ...f, status: action.status, error: action.error } : f
      );
    case "CLEAR": {
      state.forEach((f) => {
        if (f.preview) URL.revokeObjectURL(f.preview);
      });
      return [];
    }
    default:
      return state;
  }
}

export interface UseFileUploadOptions {
  maxFiles?: number;
  maxSize?: number;
  accept?: string[];
}

export function useFileUpload(options: UseFileUploadOptions = {}) {
  const { maxFiles, maxSize, accept } = options;
  const [files, dispatch] = useReducer(reducer, []);
  const lastRejected = useRef<RejectedFile[]>([]);

  const addFiles = useCallback(
    (newFiles: File[]) => {
      const rejected: RejectedFile[] = [];
      const accepted: File[] = [];

      for (const f of newFiles) {
        if (accept && !isAccepted(f, accept)) {
          rejected.push({ file: f, reason: "type" });
        } else if (maxSize && f.size > maxSize) {
          rejected.push({ file: f, reason: "size" });
        } else {
          accepted.push(f);
        }
      }

      dispatch({ type: "ADD", files: accepted, maxFiles, maxSize, accept });

      // Check if any accepted files were dropped due to maxFiles limit
      if (maxFiles) {
        const currentCount = files.length;
        const availableSlots = Math.max(0, maxFiles - currentCount);
        const overLimit = accepted.slice(availableSlots);
        overLimit.forEach((f) => rejected.push({ file: f, reason: "limit" }));
      }

      lastRejected.current = rejected;
      return rejected;
    },
    [maxFiles, maxSize, accept, files.length]
  );

  const removeFile = useCallback((id: string) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const updateProgress = useCallback((id: string, progress: number) => {
    dispatch({ type: "UPDATE_PROGRESS", id, progress });
  }, []);

  const setStatus = useCallback(
    (id: string, status: UploadFile["status"], error?: string) => {
      dispatch({ type: "SET_STATUS", id, status, error });
    },
    []
  );

  const clearFiles = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  return { files, addFiles, removeFile, updateProgress, setStatus, clearFiles, rejectedFiles: lastRejected.current };
}
