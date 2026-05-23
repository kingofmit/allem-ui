"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Button,
  ToastProvider, useToast,
} from "@allem-ui/react";
import { FileUpload, FileUploadList, useFileUpload } from "@allem-ui/file-upload";
import { DashboardShell } from "../../components/DashboardShell";

function simulateUpload(
  id: string,
  updateProgress: (id: string, progress: number) => void,
  setStatus: (id: string, status: "idle" | "uploading" | "success" | "error", error?: string) => void
) {
  setStatus(id, "uploading");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 25 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      updateProgress(id, 100);
      setTimeout(() => setStatus(id, "success"), 200);
    } else {
      updateProgress(id, Math.round(progress));
    }
  }, 300);
}

function FileUploadShowcase() {
  const { toast } = useToast();

  // Main upload zone
  const main = useFileUpload({
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024,
    accept: ["image/*", ".pdf", ".docx", ".xlsx"],
  });

  // Images only
  const images = useFileUpload({
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024,
    accept: ["image/*"],
  });

  // Documents only
  const docs = useFileUpload({
    maxFiles: 5,
    maxSize: 20 * 1024 * 1024,
    accept: [".pdf", ".docx", ".xlsx", ".csv", ".txt"],
  });

  const handleMainFiles = useCallback((files: File[]) => {
    const rejected = main.addFiles(files);
    const accepted = files.length - (rejected?.length || 0);
    if (accepted > 0) {
      toast({ title: `${accepted} file${accepted > 1 ? "s" : ""} added`, description: "Files ready for upload." });
    }
    if (rejected && rejected.length > 0) {
      const reasons = rejected.map((r) =>
        r.reason === "type" ? `${r.file.name}: unsupported type`
        : r.reason === "size" ? `${r.file.name}: too large`
        : `${r.file.name}: file limit reached`
      );
      toast({ title: `${rejected.length} file${rejected.length > 1 ? "s" : ""} rejected`, description: reasons.join(", ") });
    }
  }, [main, toast]);

  const handleUploadAll = useCallback(() => {
    main.files.forEach((f) => {
      if (f.status === "idle") {
        simulateUpload(f.id, main.updateProgress, main.setStatus);
      }
    });
  }, [main]);

  return (
    <DashboardShell
      active="/file-upload"
      title="File Upload"
      headerRight={
        <>
          <Badge variant="subtle" color="primary" size="sm">@allem-ui/file-upload</Badge>
          <span className="text-sm text-neutral-400">{main.files.length} files</span>
          <Button
            variant="outline"
            size="sm"
            onPress={() => { main.clearFiles(); toast({ title: "Cleared", description: "All files removed." }); }}
          >
            Clear All
          </Button>
        </>
      }
    >
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Hero */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">File Upload</h1>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Drag-and-drop file uploads with previews, progress tracking, and validation. Zero dependencies.
          </p>
        </div>

        {/* Main Upload */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Upload Files</span>
              <div className="flex items-center gap-2">
                {main.files.length > 0 && (
                  <Button variant="solid" size="sm" onPress={handleUploadAll}>
                    Upload All
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <FileUpload
              onFilesSelected={handleMainFiles}
              accept="image/*,.pdf,.docx,.xlsx"
              multiple
              maxFiles={10}
              currentCount={main.files.length}
              maxSize={10 * 1024 * 1024}
            />
            {main.files.length > 0 && (
              <FileUploadList files={main.files} onRemove={main.removeFile} />
            )}
          </CardBody>
        </Card>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-semibold">Drag & Drop</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Drag files directly onto the drop zone or click to browse. Visual feedback on hover with smooth transitions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-semibold">Validation</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Built-in file type, size, and count validation. Invalid files are silently filtered — only valid files are added.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L8 8M12 4L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-semibold">Progress Tracking</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Per-file progress bars with status indicators. Control upload state programmatically with the useFileUpload hook.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Side-by-side: Images + Documents */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Image Upload</span>
                <Badge variant="subtle" color="success" size="sm">Images Only</Badge>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <FileUpload
                onFilesSelected={(files) => images.addFiles(files)}
                accept="image/*"
                multiple
                maxFiles={5}
                currentCount={images.files.length}
                maxSize={5 * 1024 * 1024}
              />
              {images.files.length > 0 && (
                <FileUploadList files={images.files} onRemove={images.removeFile} />
              )}
              {images.files.length === 0 && (
                <p className="text-sm text-neutral-400 text-center py-2">
                  Drop images here — JPG, PNG, GIF, WebP accepted
                </p>
              )}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Document Upload</span>
                <Badge variant="subtle" color="primary" size="sm">Docs Only</Badge>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <FileUpload
                onFilesSelected={(files) => docs.addFiles(files)}
                accept=".pdf,.docx,.xlsx,.csv,.txt"
                multiple
                maxFiles={5}
                currentCount={docs.files.length}
                maxSize={20 * 1024 * 1024}
              />
              {docs.files.length > 0 && (
                <FileUploadList files={docs.files} onRemove={docs.removeFile} />
              )}
              {docs.files.length === 0 && (
                <p className="text-sm text-neutral-400 text-center py-2">
                  Drop documents here — PDF, DOCX, XLSX, CSV, TXT accepted
                </p>
              )}
            </CardBody>
          </Card>
        </div>

        {/* API Reference */}
        <Card>
          <CardHeader>
            <span className="font-semibold">useFileUpload Hook API</span>
          </CardHeader>
          <CardBody>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "addFiles(files)", desc: "Add files to the list" },
                { name: "removeFile(id)", desc: "Remove a file by ID" },
                { name: "updateProgress(id, n)", desc: "Set upload progress (0-100)" },
                { name: "setStatus(id, status)", desc: "Set idle / uploading / success / error" },
                { name: "clearFiles()", desc: "Remove all files" },
                { name: "files", desc: "Current file list with metadata" },
              ].map((item) => (
                <div key={item.name} className="flex flex-col rounded-lg bg-neutral-50 dark:bg-neutral-900 px-3 py-2">
                  <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{item.name}</code>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Options Reference */}
        <Card>
          <CardHeader>
            <span className="font-semibold">Configuration Options</span>
          </CardHeader>
          <CardBody>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { opt: "maxFiles", value: "number", desc: "Maximum number of files" },
                { opt: "maxSize", value: "number (bytes)", desc: "Maximum file size per file" },
                { opt: "accept", value: "string[]", desc: "Allowed MIME types or extensions" },
              ].map((item) => (
                <div key={item.opt} className="flex items-center justify-between rounded-lg bg-neutral-50 dark:bg-neutral-900 px-3 py-2">
                  <div>
                    <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{item.opt}</code>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{item.desc}</p>
                  </div>
                  <Badge variant="subtle" color="neutral" size="sm">{item.value}</Badge>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </DashboardShell>
  );
}

export default function FileUploadPage() {
  return (
    <ToastProvider>
      <FileUploadShowcase />
    </ToastProvider>
  );
}
