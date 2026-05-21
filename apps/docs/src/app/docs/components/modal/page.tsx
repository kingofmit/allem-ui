"use client";

import { Modal, ModalContent, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "title", type: "string", description: "Modal heading text." },
  { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Width of the modal." },
];

export default function ModalPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Modal</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A dialog overlay for confirmations, forms, and important content.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Modal>\n  <Button>Open Modal</Button>\n  <ModalContent title="Confirm Action">\n    <p>Are you sure you want to proceed?</p>\n    <div className="mt-4 flex gap-2 justify-end">\n      <Button variant="outline">Cancel</Button>\n      <Button color="danger">Confirm</Button>\n    </div>\n  </ModalContent>\n</Modal>`}>
          <Modal>
            <Button>Open Modal</Button>
            <ModalContent title="Confirm Action">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Are you sure you want to proceed? This action cannot be undone.</p>
              <div className="mt-6 flex gap-2 justify-end">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button color="danger" size="sm">Confirm</Button>
              </div>
            </ModalContent>
          </Modal>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
