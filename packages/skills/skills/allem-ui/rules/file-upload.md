# File Upload

## Install

```bash
npm install @allem-ui/file-upload
```

Add to Tailwind content:
```ts
"./node_modules/@allem-ui/file-upload/dist/**/*.{js,mjs}",
```

## Components

### FileUpload

Drag-and-drop zone with click-to-browse.

```tsx
import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";

const { files, addFiles, removeFile, updateProgress, setStatus } = useFileUpload({
  maxFiles: 5,
  maxSize: 10 * 1024 * 1024, // 10MB
  accept: ["image/*", ".pdf"],
});

<FileUpload onFilesSelected={addFiles} accept="image/*,.pdf" multiple />
<FileUploadList files={files} onRemove={removeFile} />
```

### FileUploadItem

Individual file row with thumbnail/icon, name, size, progress bar, and status indicator.

```tsx
import { FileUploadItem } from "@allem-ui/file-upload";

<FileUploadItem file={uploadFile} onRemove={removeFile} />
```

### FileUploadTrigger

Headless trigger — wraps any child element as a file upload button.

```tsx
import { FileUploadTrigger } from "@allem-ui/file-upload";

<FileUploadTrigger onFilesSelected={addFiles} accept="image/*">
  <Button variant="outline">Choose files</Button>
</FileUploadTrigger>
```

### useFileUpload

State management hook with validation.

```tsx
const {
  files,          // UploadFile[]
  addFiles,       // (files: File[]) => void — validates type, size, count
  removeFile,     // (id: string) => void — also revokes preview URLs
  updateProgress, // (id: string, progress: number) => void
  setStatus,      // (id: string, status: "idle"|"uploading"|"success"|"error", error?: string) => void
  clearFiles,     // () => void — revokes all preview URLs
} = useFileUpload({ maxFiles, maxSize, accept });
```

### UploadFile Type

```ts
interface UploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview?: string;    // Object URL for images (auto-created)
  progress?: number;   // 0-100
  status: "idle" | "uploading" | "success" | "error";
  error?: string;
}
```

## Upload Flow

1. User drops files or clicks to browse → `onFilesSelected` fires
2. Call `addFiles(files)` — validates and creates `UploadFile` objects with image previews
3. Start your upload → call `setStatus(id, "uploading")`
4. Update progress → call `updateProgress(id, percent)`
5. On success → call `setStatus(id, "success")`
6. On error → call `setStatus(id, "error", "Upload failed")`

## Best Practices

- The hook handles validation (type, size, count) — no need to validate manually
- Image previews use `URL.createObjectURL` — the hook auto-revokes on remove/clear
- Upload logic is yours — the components only manage UI state, not network requests
- Use `FileUploadTrigger` for custom button designs
- Zero dependencies
