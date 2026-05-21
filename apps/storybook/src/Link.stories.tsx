import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@allem-ui/react";

const meta: Meta<typeof Link> = {
  title: "Typography/Link",
  component: Link,
  argTypes: {
    color: { control: "select", options: ["primary", "neutral"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: "Click here", href: "#" },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Link href="#" color="primary">Primary link</Link>
      <Link href="#" color="neutral">Neutral link</Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Link href="#" size="sm">Small</Link>
      <Link href="#" size="md">Medium</Link>
      <Link href="#" size="lg">Large</Link>
    </div>
  ),
};
