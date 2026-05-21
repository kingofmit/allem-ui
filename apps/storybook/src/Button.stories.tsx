import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@allem-ui/react";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "ghost", "link"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "neutral", "danger", "success", "warning"] },
    fullWidth: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button color="primary">Primary</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="danger">Danger</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: "Disabled", isDisabled: true },
};

export const FullWidth: Story = {
  args: { children: "Full Width", fullWidth: true },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};
