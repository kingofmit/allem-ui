import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerContent, Button } from "@allem-ui/react";

const meta: Meta<typeof Drawer> = {
  title: "Overlay/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => (
    <Drawer>
      <Button>Open Drawer</Button>
      <DrawerContent title="Settings" placement="right">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Drawer content goes here. Click outside or press Escape to close.
        </p>
      </DrawerContent>
    </Drawer>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer>
      <Button>Open Left Drawer</Button>
      <DrawerContent title="Navigation" placement="left">
        <nav className="flex flex-col gap-2">
          <a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Home</a>
          <a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Dashboard</a>
          <a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Settings</a>
        </nav>
      </DrawerContent>
    </Drawer>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Drawer>
      <Button>Open Bottom Drawer</Button>
      <DrawerContent title="Details" placement="bottom">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bottom drawer content.
        </p>
      </DrawerContent>
    </Drawer>
  ),
};
