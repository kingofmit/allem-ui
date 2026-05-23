"use client";

import { ToastProvider, useToast, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

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

      <h2 className="mt-8 text-xl font-semibold">ToastProvider Props</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "children", type: "ReactNode", default: "—", description: "App content." },
          { name: "position", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"', default: '"bottom-right"', description: "Toast position." },
        ]} />
      </div>

      <h2 className="mt-8 text-xl font-semibold">toast() Options</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "title", type: "string", default: "—", description: "Toast title." },
          { name: "description", type: "string", default: "—", description: "Additional message." },
          { name: "variant", type: '"default" | "success" | "danger" | "warning"', default: "—", description: "Toast style." },
          { name: "duration", type: "number", default: "5000", description: "Auto-dismiss in ms (0 = persistent)." },
        ]} />
      </div>

      <h2 className="mt-8 text-xl font-semibold">useToast Return Value</h2>
      <div className="mt-4">
        <PropsTable props={[
          { name: "toast", type: "(options) => void", default: "—", description: "Show a toast notification." },
          { name: "dismiss", type: "(id: string) => void", default: "—", description: "Dismiss a toast by ID." },
        ]} />
      </div>
    </div>
  );
}
