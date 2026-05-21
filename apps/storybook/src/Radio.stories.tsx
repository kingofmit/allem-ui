import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "@allem-ui/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup label="Notification preference">
      <Radio value="email">Email</Radio>
      <Radio value="sms">SMS</Radio>
      <Radio value="push">Push notification</Radio>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup label="Plan" description="Select your billing plan">
      <Radio value="monthly">Monthly</Radio>
      <Radio value="yearly">Yearly</Radio>
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <RadioGroup label="Size" errorMessage="Please select a size" isInvalid>
      <Radio value="s">Small</Radio>
      <Radio value="m">Medium</Radio>
      <Radio value="l">Large</Radio>
    </RadioGroup>
  ),
};
