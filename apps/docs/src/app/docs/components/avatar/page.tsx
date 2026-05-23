"use client";

import { Avatar } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "src", type: "string", description: "Image URL for the avatar." },
  { name: "name", type: "string", description: "Name used to generate initials." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
  { name: "alt", type: "string", description: "Alt text for the avatar image." },
  { name: "status", type: '"online" | "offline" | "away" | "busy"', description: "Status indicator." },
];

export default function AvatarPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A user avatar with image, initials, or placeholder.
      </p>

      <h2 className="mt-12 text-xl font-semibold">With initials</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Avatar name="John Doe" />\n<Avatar name="Jane Smith" size="lg" />`}>
          <div className="flex items-center gap-4">
            <Avatar name="John Doe" />
            <Avatar name="Jane Smith" size="lg" />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">With status</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Avatar name="John" status="online" />\n<Avatar name="Jane" status="away" />\n<Avatar name="Bob" status="busy" />\n<Avatar name="Sue" status="offline" />`}>
          <div className="flex items-center gap-4">
            <Avatar name="John Doe" status="online" />
            <Avatar name="Jane Smith" status="away" />
            <Avatar name="Bob Brown" status="busy" />
            <Avatar name="Sue Lee" status="offline" />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
