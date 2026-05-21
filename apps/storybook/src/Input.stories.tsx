import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@allem-ui/react";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "Email", placeholder: "you@example.com" },
};

export const WithDescription: Story = {
  args: { label: "Email", placeholder: "you@example.com", description: "We'll never share your email." },
};

export const WithError: Story = {
  args: { label: "Email", placeholder: "you@example.com", errorMessage: "Email is required", isInvalid: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 300 }}>
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { label: "Disabled", placeholder: "Can't type here", isDisabled: true },
};
