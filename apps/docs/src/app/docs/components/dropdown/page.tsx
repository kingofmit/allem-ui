"use client";

import { Dropdown, DropdownMenu, DropdownItem, DropdownSeparator, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";

export default function DropdownPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Dropdown</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A menu triggered by a button click.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Dropdown>\n  <Button>Actions</Button>\n  <DropdownMenu>\n    <DropdownItem id="edit">Edit</DropdownItem>\n    <DropdownItem id="dup">Duplicate</DropdownItem>\n    <DropdownSeparator />\n    <DropdownItem id="del" color="danger">Delete</DropdownItem>\n  </DropdownMenu>\n</Dropdown>`}>
          <Dropdown>
            <Button variant="outline">Actions</Button>
            <DropdownMenu>
              <DropdownItem id="edit">Edit</DropdownItem>
              <DropdownItem id="dup">Duplicate</DropdownItem>
              <DropdownSeparator />
              <DropdownItem id="del" color="danger">Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ComponentPreview>
      </div>
    </div>
  );
}
