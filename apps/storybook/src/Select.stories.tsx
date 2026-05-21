import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "@allem-ui/react";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select label="Country" placeholder="Choose a country" {...args}>
      <SelectItem id="us">United States</SelectItem>
      <SelectItem id="uk">United Kingdom</SelectItem>
      <SelectItem id="ca">Canada</SelectItem>
      <SelectItem id="au">Australia</SelectItem>
    </Select>
  ),
  decorators: [(Story) => <div style={{ width: 250 }}><Story /></div>],
};

export const WithDescription: Story = {
  render: () => (
    <div style={{ width: 250 }}>
      <Select label="Plan" description="Choose your subscription plan">
        <SelectItem id="free">Free</SelectItem>
        <SelectItem id="pro">Pro</SelectItem>
        <SelectItem id="enterprise">Enterprise</SelectItem>
      </Select>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: 250 }}>
      <Select label="Role" errorMessage="Role is required" isInvalid>
        <SelectItem id="admin">Admin</SelectItem>
        <SelectItem id="user">User</SelectItem>
      </Select>
    </div>
  ),
};
