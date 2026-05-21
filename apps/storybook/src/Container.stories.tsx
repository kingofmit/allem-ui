import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@allem-ui/react";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <div className="p-4 bg-indigo-50 rounded-lg text-sm text-indigo-700">
        Content inside a container (size: {args.size || "lg"})
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 py-4">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Container key={size} size={size}>
          <div className="p-3 bg-indigo-50 rounded text-xs text-indigo-700">Container size="{size}"</div>
        </Container>
      ))}
    </div>
  ),
};
