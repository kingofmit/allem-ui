import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@allem-ui/react";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { children: "Accept terms and conditions" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox size="sm">Small checkbox</Checkbox>
      <Checkbox size="md">Medium checkbox</Checkbox>
      <Checkbox size="lg">Large checkbox</Checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: "Disabled option", isDisabled: true },
};

export const DefaultSelected: Story = {
  args: { children: "Pre-selected", defaultSelected: true },
};
