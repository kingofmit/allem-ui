import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@allem-ui/react";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { children: "Dark mode" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Switch size="sm">Small</Switch>
      <Switch size="md">Medium</Switch>
      <Switch size="lg">Large</Switch>
    </div>
  ),
};

export const DefaultSelected: Story = {
  args: { children: "Enabled", defaultSelected: true },
};

export const Disabled: Story = {
  args: { children: "Disabled", isDisabled: true },
};
