"use client";

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "variant", type: '"simple" | "striped" | "bordered"', default: '"simple"', description: "The visual style." },
];

export default function TablePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Table</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A data table with header, body, and row components.</p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n      <TableHead>Email</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>John Doe</TableCell>\n      <TableCell>john@example.com</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}>
          <Table className="w-full">
            <TableHeader>
              <TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>John Doe</TableCell><TableCell>john@example.com</TableCell><TableCell>Admin</TableCell></TableRow>
              <TableRow><TableCell>Jane Smith</TableCell><TableCell>jane@example.com</TableCell><TableCell>Editor</TableCell></TableRow>
              <TableRow><TableCell>Bob Brown</TableCell><TableCell>bob@example.com</TableCell><TableCell>Viewer</TableCell></TableRow>
            </TableBody>
          </Table>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>

      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
        All sub-components (<code className="text-xs">TableHeader</code>, <code className="text-xs">TableBody</code>, <code className="text-xs">TableRow</code>, <code className="text-xs">TableHead</code>, <code className="text-xs">TableCell</code>) accept <code className="text-xs">children</code> and standard HTML table element attributes.
      </p>
    </div>
  );
}
