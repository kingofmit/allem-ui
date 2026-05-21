import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@allem-ui/react";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box className="p-4 bg-indigo-50 rounded-lg text-sm text-indigo-700">
      A basic Box component — renders a div by default.
    </Box>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" className="p-6 border border-neutral-200 rounded-lg">
      <p className="text-sm text-neutral-600">Rendered as a &lt;section&gt; element.</p>
    </Box>
  ),
};
