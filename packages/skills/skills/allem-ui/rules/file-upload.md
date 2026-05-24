# File Upload

## Install

```bash
npm install @allem-ui/file-upload @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add to your main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/file-upload";
@source "@allem-ui/theme";
```

The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles won't be generated.

## Components

### FileUpload

Drag-and-drop zone with click-to-browse. Shows upload icon and instructions by default, or accepts custom `children`.

```tsx
import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";

const { files, addFiles, removeFile, updateProgress, setStatus } = useFileUpload({
  maxFiles: 5,
  maxSize: 10 * 1024 * 1024, // 10MB
  accept: ["image/*", ".pdf"],
});

<FileUpload
  onFilesSelected={(f) => addFiles(f)}
  accept="image/*,.pdf"
  multiple
  maxFiles={5}
  currentCount={files.length}
  maxSize={10 * 1024 * 1024}
/>
<FileUploadList files={files} onRemove={removeFile} />
```

| Prop | Type | Default |
|------|------|---------|
| `onFilesSelected` | `(files: File[]) => void` | required |
| `accept` | `string` | -- |
| `multiple` | `boolean` | `true` |
| `disabled` | `boolean` | `false` |
| `maxFiles` | `number` | -- |
| `currentCount` | `number` | `0` |
| `maxSize` | `number` (bytes) | -- |
| `className` | `string` | -- |
| `children` | `ReactNode` | -- |

When `maxFiles` and `currentCount` are set, the zone shows "X of Y files" and disables when full.
When `maxSize` is set, the zone shows the max file size hint.

### FileUploadItem

Individual file row with thumbnail/icon, name, size, progress bar, and status indicator.

```tsx
import { FileUploadItem } from "@allem-ui/file-upload";

<FileUploadItem file={uploadFile} onRemove={removeFile} />
```

| Prop | Type | Default |
|------|------|---------|
| `file` | `UploadFile` | required |
| `onRemove` | `(id: string) => void` | -- |
| `className` | `string` | -- |

### FileUploadList

Renders a list of `FileUploadItem` components.

| Prop | Type | Default |
|------|------|---------|
| `files` | `UploadFile[]` | required |
| `onRemove` | `(id: string) => void` | -- |

### FileUploadTrigger

Headless trigger -- wraps any child element as a file upload button.

```tsx
import { FileUploadTrigger } from "@allem-ui/file-upload";

<FileUploadTrigger onFilesSelected={addFiles} accept="image/*">
  <Button variant="outline">Choose files</Button>
</FileUploadTrigger>
```

### useFileUpload

State management hook with validation. Returns rejected files with rejection reasons.

```tsx
const {
  files,          // UploadFile[]
  addFiles,       // (files: File[]) => RejectedFile[] -- validates type, size, count
  removeFile,     // (id: string) => void -- also revokes preview URLs
  updateProgress, // (id: string, progress: number) => void
  setStatus,      // (id: string, status: "idle"|"uploading"|"success"|"error", error?: string) => void
  clearFiles,     // () => void -- revokes all preview URLs
  rejectedFiles,  // RejectedFile[] -- files rejected from last addFiles call
} = useFileUpload({ maxFiles, maxSize, accept });
```

| Option | Type | Default |
|--------|------|---------|
| `maxFiles` | `number` | -- |
| `maxSize` | `number` (bytes) | -- |
| `accept` | `string[]` | -- |

**Important:** `addFiles()` returns a `RejectedFile[]` array. Use this to show toast notifications for rejected files:

```tsx
const rejected = addFiles(files);
if (rejected.length > 0) {
  rejected.forEach((r) => {
    if (r.reason === "type") toast({ title: `${r.file.name}: unsupported type` });
    if (r.reason === "size") toast({ title: `${r.file.name}: too large` });
    if (r.reason === "limit") toast({ title: `${r.file.name}: file limit reached` });
  });
}
```

## Exported Types

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

interface RejectedFile {
  file: File;
  reason: "type" | "size" | "limit";
}
```

```tsx
import type {
  FileUploadProps,
  FileUploadListProps,
  FileUploadItemProps,
  FileUploadTriggerProps,
  UseFileUploadOptions,
  UploadFile,
  RejectedFile,
} from "@allem-ui/file-upload";
```

## Upload Flow

1. User drops files or clicks to browse -> `onFilesSelected` fires
2. Call `addFiles(files)` -- validates and creates `UploadFile` objects with image previews, returns rejected files
3. Start your upload -> call `setStatus(id, "uploading")`
4. Update progress -> call `updateProgress(id, percent)`
5. On success -> call `setStatus(id, "success")`
6. On error -> call `setStatus(id, "error", "Upload failed")`

## Best Practices

- The hook handles validation (type, size, count) -- no need to validate manually
- `addFiles()` returns rejected files -- use this for user feedback (toasts)
- Image previews use `URL.createObjectURL` -- the hook auto-revokes on remove/clear
- Upload logic is yours -- the components only manage UI state, not network requests
- Use `FileUploadTrigger` for custom button designs
- Pass `maxFiles`, `currentCount`, and `maxSize` to `FileUpload` for visual hints
- Zero dependencies
