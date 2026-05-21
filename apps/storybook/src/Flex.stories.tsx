import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@allem-ui/react";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    direction: { control: "select", options: ["row", "column", "row-reverse", "column-reverse"] },
    align: { control: "select", options: ["start", "center", "end", "stretch", "baseline"] },
    justify: { control: "select", options: ["start", "center", "end", "between", "around", "evenly"] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl"] },
    wrap: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded text-sm font-medium">{children}</div>
);

export const Row: Story = {
  render: () => (
    <Flex gap="md">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
  ),
};

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap="md">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="between" align="center" style={{ width: 400 }}>
      <Item>Left</Item>
      <Item>Right</Item>
    </Flex>
  ),
};
