"use client";

import { Switch } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "children", type: "ReactNode", description: "Label text." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size." },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether disabled." },
];

export default function SwitchPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        A toggle switch for on/off states.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Switch>Enable notifications</Switch>`}>
          <Switch>Enable notifications</Switch>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Sizes</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Switch size="sm">Small</Switch>\n<Switch size="md">Medium</Switch>\n<Switch size="lg">Large</Switch>`}>
          <div className="flex flex-col gap-3">
            <Switch size="sm">Small</Switch>
            <Switch size="md">Medium</Switch>
            <Switch size="lg">Large</Switch>
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
