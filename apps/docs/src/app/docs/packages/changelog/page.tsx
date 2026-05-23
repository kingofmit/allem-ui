"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  ChangelogTimeline,
  ChangelogEntry,
  ChangelogGroup,
  ChangelogGroupItem,
} from "@allem-ui/changelog";

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/changelog</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Timeline components for displaying changelogs, release notes, and version history.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/changelog`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/changelog</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Basic Usage</h2>
      <div className="mt-4">
        <ComponentPreview code={`import {\n  ChangelogTimeline,\n  ChangelogEntry,\n  ChangelogGroup,\n  ChangelogGroupItem,\n} from "@allem-ui/changelog";\n\n<ChangelogTimeline>\n  <ChangelogEntry\n    date="2026-05-21"\n    version="1.2.0"\n    title="New Components"\n    type="added"\n  >\n    <ChangelogGroup type="added">\n      <ChangelogGroupItem>Added DatePicker component</ChangelogGroupItem>\n      <ChangelogGroupItem>Added DataGrid component</ChangelogGroupItem>\n    </ChangelogGroup>\n  </ChangelogEntry>\n  <ChangelogEntry\n    date="2026-05-15"\n    version="1.1.1"\n    title="Bug Fixes"\n    type="fixed"\n  >\n    <ChangelogGroup type="fixed">\n      <ChangelogGroupItem>Fixed modal close on escape key</ChangelogGroupItem>\n      <ChangelogGroupItem>Fixed dark mode toggle in sidebar</ChangelogGroupItem>\n    </ChangelogGroup>\n  </ChangelogEntry>\n</ChangelogTimeline>`}>
          <div className="py-4">
            <ChangelogTimeline>
              <ChangelogEntry
                date="2026-05-21"
                version="1.2.0"
                title="New Components"
                type="added"
              >
                <ChangelogGroup type="added">
                  <ChangelogGroupItem>Added DatePicker component</ChangelogGroupItem>
                  <ChangelogGroupItem>Added DataGrid component</ChangelogGroupItem>
                </ChangelogGroup>
              </ChangelogEntry>
              <ChangelogEntry
                date="2026-05-15"
                version="1.1.1"
                title="Bug Fixes"
                type="fixed"
              >
                <ChangelogGroup type="fixed">
                  <ChangelogGroupItem>Fixed modal close on escape key</ChangelogGroupItem>
                  <ChangelogGroupItem>Fixed dark mode toggle in sidebar</ChangelogGroupItem>
                </ChangelogGroup>
              </ChangelogEntry>
            </ChangelogTimeline>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">ChangelogEntry Props</h2>
      <PropsTable
        props={[
          { name: "date", type: "string", required: true, description: "Entry date" },
          { name: "version", type: "string", required: true, description: "Version number" },
          { name: "title", type: "string", required: true, description: "Entry title" },
          { name: "description", type: "string", description: "Entry description" },
          { name: "type", type: '"added" | "changed" | "fixed" | "removed" | "deprecated"', description: "Entry type (sets timeline dot color)" },
          { name: "children", type: "ReactNode", description: "ChangelogGroup items" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">VersionBadge Props</h2>
      <PropsTable
        props={[
          { name: "version", type: "string", required: true, description: "Version string (e.g. '1.2.0')" },
          { name: "type", type: '"major" | "minor" | "patch"', description: "Badge color type (auto-inferred from semver if omitted)" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChangelogTimeline Props</h2>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", required: true, description: "ChangelogEntry elements" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChangelogGroup Props</h2>
      <PropsTable
        props={[
          { name: "type", type: '"added" | "changed" | "fixed" | "removed" | "deprecated"', required: true, description: "Change category" },
          { name: "children", type: "ReactNode", required: true, description: "ChangelogGroupItem elements" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChangelogGroupItem Props</h2>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", required: true, description: "Change description" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
