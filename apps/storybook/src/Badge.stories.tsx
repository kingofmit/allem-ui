import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@allem-ui/react";

const meta: Meta<typeof Badge> = {
  title: "Feedback/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["subtle", "solid", "outline"] },
    color: { control: "select", options: ["primary", "neutral", "danger", "success", "warning"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge color="primary">Primary</Badge>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
