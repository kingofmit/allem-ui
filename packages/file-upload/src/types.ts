export interface UploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview?: string;
  progress?: number;
  status: "idle" | "uploading" | "success" | "error";
  error?: string;
}

export interface RejectedFile {
  file: File;
  reason: "type" | "size" | "limit";
}

export type FileUploadAction =
  | { type: "ADD"; files: File[]; maxFiles?: number; maxSize?: number; accept?: string[] }
  | { type: "REMOVE"; id: string }
  | { type: "UPDATE_PROGRESS"; id: string; progress: number }
  | { type: "SET_STATUS"; id: string; status: UploadFile["status"]; error?: string }
  | { type: "CLEAR" };
