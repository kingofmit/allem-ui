import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@allem-ui/react";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: { control: "select", options: ["default", "muted", "danger", "success", "warning"] },
    weight: { control: "select", options: ["normal", "medium", "semibold", "bold"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "The quick brown fox jumps over the lazy dog." },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Text color="default">Default text</Text>
      <Text color="muted">Muted text</Text>
      <Text color="danger">Danger text</Text>
      <Text color="success">Success text</Text>
      <Text color="warning">Warning text</Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Text size="xs">Extra small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
    </div>
  ),
};
