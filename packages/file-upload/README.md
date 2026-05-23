# @allem-ui/file-upload

Drag-and-drop file upload components for [Allem UI](https://github.com/kingofmit/allem-ui) — with image previews, progress tracking, validation, and a headless trigger option.

## Install

```bash
npm install @allem-ui/file-upload @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/file-upload";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Quick Start

```tsx
import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";

function App() {
  const { files, addFiles, removeFile, updateProgress, setStatus } = useFileUpload({
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024, // 10MB
    accept: ["image/*", ".pdf"],
  });

  const handleUpload = async (newFiles: File[]) => {
    addFiles(newFiles);
    // Your upload logic here — call updateProgress() and setStatus()
  };

  return (
    <div>
      <FileUpload
        onFilesSelected={handleUpload}
        accept="image/*,.pdf"
        multiple
      />
      <FileUploadList files={files} onRemove={removeFile} />
    </div>
  );
}
```

## Components

### FileUpload

Drop zone with click-to-browse. Shows an upload icon and instructions by default, or accepts custom children.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onFilesSelected` | `(files: File[]) => void` | — | Called with selected files |
| `accept` | `string` | — | Accepted file types (e.g. `"image/*,.pdf"`) |
| `multiple` | `boolean` | `true` | Allow multiple files |
| `disabled` | `boolean` | `false` | Disable the drop zone |
| `className` | `string` | — | Additional CSS classes |

### FileUploadList

Renders a list of `FileUploadItem` components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `files` | `UploadFile[]` | — | Array of file objects |
| `onRemove` | `(id: string) => void` | — | Remove file callback |

### FileUploadItem

Individual file row with thumbnail/icon, name, size, progress bar, and status.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `file` | `UploadFile` | — | File object to display |
| `onRemove` | `(id: string) => void` | — | Remove callback |

### FileUploadTrigger

Headless trigger — wraps any child element as a file upload button.

```tsx
import { FileUploadTrigger } from "@allem-ui/file-upload";

<FileUploadTrigger onFilesSelected={handleFiles} accept="image/*">
  <button>Choose files</button>
</FileUploadTrigger>
```

### useFileUpload

Hook for managing file state with validation.

```tsx
const {
  files,          // UploadFile[]
  addFiles,       // (files: File[]) => void
  removeFile,     // (id: string) => void
  updateProgress, // (id: string, progress: number) => void
  setStatus,      // (id: string, status, error?) => void
  clearFiles,     // () => void
} = useFileUpload({
  maxFiles: 10,
  maxSize: 5 * 1024 * 1024,
  accept: ["image/*", ".pdf", ".docx"],
});
```

## UploadFile Type

```ts
interface UploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview?: string;      // Object URL for images
  progress?: number;     // 0-100
  status: "idle" | "uploading" | "success" | "error";
  error?: string;
}
```

## Features

- Drag-and-drop with visual feedback
- Click to open native file picker
- Image thumbnail previews (via `URL.createObjectURL`)
- File type and size validation
- Per-file progress bars
- Status indicators (uploading spinner, success check, error)
- Remove individual files
- Keyboard accessible
- Dark mode support
- Zero dependencies

## License

MIT
