"use client";

import { Dropdown, DropdownMenu, DropdownItem, DropdownSeparator, Button } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

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

      <h2 className="mt-12 text-xl font-semibold">DropdownItem Props</h2>
      <PropsTable
        props={[
          { name: "color", type: '"default" | "danger"', default: '"default"', description: "Item color" },
        ]}
      />
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Plus standard MenuItemProps from React Aria.</p>

      <h2 className="mt-12 text-xl font-semibold">DropdownSeparator Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", default: "—", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
