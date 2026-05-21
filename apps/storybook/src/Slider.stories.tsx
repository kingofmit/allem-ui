import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@allem-ui/react";

const meta: Meta<typeof Slider> = {
  title: "Forms/Slider",
  component: Slider,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { label: "Volume", defaultValue: 50, showOutput: true },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
      <Slider label="Small" size="sm" defaultValue={30} showOutput />
      <Slider label="Medium" size="md" defaultValue={50} showOutput />
      <Slider label="Large" size="lg" defaultValue={70} showOutput />
    </div>
  ),
};

export const Range: Story = {
  args: { label: "Price range", minValue: 0, maxValue: 100, defaultValue: 40, showOutput: true },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};
