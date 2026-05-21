import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, Button } from "@allem-ui/react";

const meta: Meta<typeof Tooltip> = {
  title: "Overlay/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Button>Hover me</Button>
      <TooltipContent>This is a tooltip</TooltipContent>
    </Tooltip>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip>
      <Button variant="outline">No arrow</Button>
      <TooltipContent showArrow={false}>Tooltip without arrow</TooltipContent>
    </Tooltip>
  ),
};
