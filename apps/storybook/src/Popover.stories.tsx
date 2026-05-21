import type { Meta, StoryObj } from "@storybook/react";
import { PopoverTrigger, Popover, Button, Input } from "@allem-ui/react";

const meta: Meta<typeof Popover> = {
  title: "Overlay/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Open Popover</Button>
      <Popover>
        <div style={{ width: 200 }}>
          <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Settings</p>
          <p className="text-xs text-neutral-500">Customize your experience here.</p>
        </div>
      </Popover>
    </PopoverTrigger>
  ),
};

export const WithForm: Story = {
  render: () => (
    <PopoverTrigger>
      <Button variant="outline">Edit Name</Button>
      <Popover>
        <div style={{ width: 250 }}>
          <Input label="Display Name" placeholder="Enter name" />
          <div className="mt-3 flex justify-end">
            <Button size="sm">Save</Button>
          </div>
        </div>
      </Popover>
    </PopoverTrigger>
  ),
};
