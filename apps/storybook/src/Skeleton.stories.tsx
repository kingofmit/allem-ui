import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@allem-ui/react";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: { control: "select", options: ["text", "circular", "rectangular", "rounded"] },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: { variant: "text", width: 200 },
};

export const Circular: Story = {
  args: { variant: "circular", width: 48, height: 48 },
};

export const Rectangular: Story = {
  args: { variant: "rectangular", width: 200, height: 120 },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", width: 300 }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};
