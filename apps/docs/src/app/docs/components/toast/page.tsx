"use client";

import { ToastProvider, useToast, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button onPress={() => toast({ title: "Saved", description: "Your changes have been saved." })}>Default</Button>
      <Button color="success" onPress={() => toast({ title: "Success!", description: "Operation completed.", variant: "success" })}>Success</Button>
      <Button color="danger" onPress={() => toast({ title: "Error", description: "Something went wrong.", variant: "danger" })}>Danger</Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Toast</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Notification toasts for feedback messages.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`const { toast } = useToast();\ntoast({ title: "Saved", description: "Your changes have been saved." });`}>
          <ToastProvider>
            <ToastDemo />
          </ToastProvider>
        </ComponentPreview>
      </div>
    </div>
  );
}
