import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@allem-ui/react";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "neutral", "white"] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: "Loading..." },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner color="primary" label="Primary" />
      <Spinner color="neutral" label="Neutral" />
      <div className="bg-neutral-900 p-4 rounded-lg">
        <Spinner color="white" label="White" />
      </div>
    </div>
  ),
};
