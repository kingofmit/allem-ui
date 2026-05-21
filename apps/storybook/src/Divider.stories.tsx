import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@allem-ui/react";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <p className="text-sm text-neutral-600 mb-3">Content above</p>
      <Divider />
      <p className="text-sm text-neutral-600 mt-3">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, height: 40 }}>
      <span className="text-sm text-neutral-600">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-neutral-600">Right</span>
    </div>
  ),
};
