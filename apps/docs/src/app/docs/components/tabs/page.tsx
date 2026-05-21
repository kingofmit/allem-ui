"use client";

import { Tabs, TabList, Tab, TabPanel } from "@allem-ui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const props = [
  { name: "variant", type: '"underline" | "solid" | "pills"', default: '"underline"', description: "The visual style of the tabs." },
];

export default function TabsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Tabbed navigation for switching between content panels.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Default</h2>
      <div className="mt-4">
        <ComponentPreview code={`<Tabs>\n  <TabList>\n    <Tab id="1">Account</Tab>\n    <Tab id="2">Security</Tab>\n    <Tab id="3">Billing</Tab>\n  </TabList>\n  <TabPanel id="1">Account settings...</TabPanel>\n  <TabPanel id="2">Security settings...</TabPanel>\n  <TabPanel id="3">Billing info...</TabPanel>\n</Tabs>`}>
          <Tabs className="w-full max-w-md">
            <TabList>
              <Tab id="1">Account</Tab>
              <Tab id="2">Security</Tab>
              <Tab id="3">Billing</Tab>
            </TabList>
            <TabPanel id="1"><p className="text-sm text-neutral-600 dark:text-neutral-400">Manage your account settings and preferences.</p></TabPanel>
            <TabPanel id="2"><p className="text-sm text-neutral-600 dark:text-neutral-400">Update your password and security options.</p></TabPanel>
            <TabPanel id="3"><p className="text-sm text-neutral-600 dark:text-neutral-400">View your billing history and plan details.</p></TabPanel>
          </Tabs>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <div className="mt-4"><PropsTable props={props} /></div>
    </div>
  );
}
