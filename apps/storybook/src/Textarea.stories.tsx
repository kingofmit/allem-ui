import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@allem-ui/react";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  argTypes: {
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: "Message", placeholder: "Type your message..." },
  decorators: [(Story) => <div style={{ width: 350 }}><Story /></div>],
};

export const WithDescription: Story = {
  args: { label: "Bio", description: "Tell us about yourself", placeholder: "I'm a..." },
  decorators: [(Story) => <div style={{ width: 350 }}><Story /></div>],
};

export const WithError: Story = {
  args: { label: "Comment", errorMessage: "Comment is required", isInvalid: true },
  decorators: [(Story) => <div style={{ width: 350 }}><Story /></div>],
};
