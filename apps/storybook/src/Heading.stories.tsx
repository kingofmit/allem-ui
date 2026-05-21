import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@allem-ui/react";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    as: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { children: "Heading" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Heading size="2xl">2XL Heading</Heading>
      <Heading size="xl">XL Heading</Heading>
      <Heading size="lg">LG Heading</Heading>
      <Heading size="md">MD Heading</Heading>
      <Heading size="sm">SM Heading</Heading>
      <Heading size="xs">XS Heading</Heading>
    </div>
  ),
};
