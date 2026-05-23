"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  FileUpload,
  FileUploadList,
  FileUploadItem,
  FileUploadTrigger,
  useFileUpload,
} from "@allem-ui/file-upload";

function FileUploadDemo() {
  const { files, addFiles, removeFile } = useFileUpload({
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    accept: ["image/*", ".pdf"],
  });

  return (
    <div className="w-full space-y-4">
      <FileUpload
        onFilesSelected={addFiles}
        accept="image/*,.pdf"
        multiple
      />
      <FileUploadList files={files} onRemove={removeFile} />
    </div>
  );
}

function TriggerDemo() {
  const { files, addFiles, removeFile } = useFileUpload({ maxFiles: 3 });

  return (
    <div className="w-full space-y-4">
      <FileUploadTrigger onFilesSelected={addFiles} accept="image/*">
        <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors cursor-pointer">
          Choose images
        </button>
      </FileUploadTrigger>
      <FileUploadList files={files} onRemove={removeFile} />
    </div>
  );
}

function ValidationDemo() {
  const { files, addFiles, removeFile } = useFileUpload({
    maxFiles: 2,
    maxSize: 1 * 1024 * 1024,
    accept: [".png", ".jpg"],
  });

  return (
    <div className="w-full space-y-4">
      <FileUpload
        onFilesSelected={addFiles}
        accept=".png,.jpg"
        multiple
      />
      <FileUploadList files={files} onRemove={removeFile} />
    </div>
  );
}

export default function FileUploadPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">File Upload</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/file-upload</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Drag-and-drop file upload with image previews, progress tracking, and validation.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code="npm install @allem-ui/file-upload">
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/file-upload</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Drop Zone</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Drag files onto the zone or click to browse. Supports type, size, and count validation.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";\n\nconst { files, addFiles, removeFile } = useFileUpload({\n  maxFiles: 5,\n  maxSize: 10 * 1024 * 1024,\n  accept: ["image/*", ".pdf"],\n});\n\n<FileUpload onFilesSelected={addFiles} accept="image/*,.pdf" multiple />\n<FileUploadList files={files} onRemove={removeFile} />`}>
          <FileUploadDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Custom Trigger</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Use FileUploadTrigger to wrap any element as an upload button.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { FileUploadTrigger, FileUploadList, useFileUpload } from "@allem-ui/file-upload";\n\nconst { files, addFiles, removeFile } = useFileUpload({ maxFiles: 3 });\n\n<FileUploadTrigger onFilesSelected={addFiles} accept="image/*">\n  <button>Choose images</button>\n</FileUploadTrigger>\n<FileUploadList files={files} onRemove={removeFile} />`}>
          <TriggerDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">With Validation</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Restrict to 2 files, max 1 MB each, only .png and .jpg. Files that exceed limits show an error state.</p>
      <div className="mt-4">
        <ComponentPreview code={`const { files, addFiles, removeFile } = useFileUpload({\n  maxFiles: 2,\n  maxSize: 1 * 1024 * 1024,\n  accept: [".png", ".jpg"],\n});\n\n<FileUpload onFilesSelected={addFiles} accept=".png,.jpg" multiple />\n<FileUploadList files={files} onRemove={removeFile} />`}>
          <ValidationDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">FileUpload Props</h2>
      <PropsTable
        props={[
          { name: "onFilesSelected", type: "(files: File[]) => void", required: true, description: "Called with selected files" },
          { name: "accept", type: "string", description: 'Accepted file types (e.g. "image/*,.pdf")' },
          { name: "multiple", type: "boolean", default: "true", description: "Allow multiple files" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the drop zone" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", description: "Custom drop zone content" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">FileUploadItem Props</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Renders a single file row with thumbnail preview (for images), file icon with type-based coloring, progress bar, and status indicator. Used internally by FileUploadList — import it directly for custom list layouts.
      </p>
      <PropsTable
        props={[
          { name: "file", type: "UploadFile", required: true, description: "The file object to display" },
          { name: "onRemove", type: "(id: string) => void", description: "Callback when remove button is clicked" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">FileUploadList Props</h2>
      <PropsTable
        props={[
          { name: "files", type: "UploadFile[]", required: true, description: "Array of files to display" },
          { name: "onRemove", type: "(id: string) => void", description: "Callback when a file is removed" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">FileUploadTrigger Props</h2>
      <PropsTable
        props={[
          { name: "onFilesSelected", type: "(files: File[]) => void", required: true, description: "Called with selected files" },
          { name: "accept", type: "string", description: "Accepted file types" },
          { name: "multiple", type: "boolean", default: "true", description: "Allow multiple files" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the trigger" },
          { name: "children", type: "ReactNode", required: true, description: "Custom trigger element" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">useFileUpload</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Hook that manages file state, validation, and image previews.
      </p>
      <h3 className="mt-6 text-lg font-medium">Options</h3>
      <PropsTable
        props={[
          { name: "maxFiles", type: "number", description: "Maximum number of files" },
          { name: "maxSize", type: "number", description: "Maximum file size in bytes" },
          { name: "accept", type: "string[]", description: 'Accepted types (e.g. ["image/*", ".pdf"])' },
        ]}
      />
      <h3 className="mt-6 text-lg font-medium">Return Value</h3>
      <PropsTable
        props={[
          { name: "files", type: "UploadFile[]", description: "Current array of managed files" },
          { name: "addFiles", type: "(files: File[]) => void", description: "Add files with validation" },
          { name: "removeFile", type: "(id: string) => void", description: "Remove a file by ID" },
          { name: "updateProgress", type: "(id: string, progress: number) => void", description: "Update upload progress (0–100)" },
          { name: "setStatus", type: '(id: string, status: Status, error?: string) => void', description: 'Set file status ("idle" | "uploading" | "success" | "error")' },
          { name: "clearFiles", type: "() => void", description: "Remove all files" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">Built-in Behavior</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Keyboard accessible</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Enter/Space triggers file selection on both FileUpload and FileUploadTrigger.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Image previews</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Object URLs are automatically generated for image files and revoked on removal.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Type-based file icons</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">FileUploadItem shows color-coded icons — emerald for images, red for PDFs, purple for videos.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Smart validation</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Supports wildcard MIME matching (image/*), exact MIME, and extension matching (.pdf).</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-semibold">UploadFile Type</h2>
      <PropsTable
        props={[
          { name: "id", type: "string", description: "Unique file identifier" },
          { name: "file", type: "File", description: "Native File object" },
          { name: "name", type: "string", description: "File name" },
          { name: "size", type: "number", description: "File size in bytes" },
          { name: "type", type: "string", description: "MIME type" },
          { name: "preview", type: "string", description: "Preview URL for images" },
          { name: "progress", type: "number", description: "Upload progress (0–100)" },
          { name: "status", type: '"idle" | "uploading" | "success" | "error"', description: "Current upload status" },
          { name: "error", type: "string", description: "Error message when status is error" },
        ]}
      />
    </div>
  );
}
