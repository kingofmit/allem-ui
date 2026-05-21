import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "@allem-ui/react";

const meta: Meta<typeof Code> = {
  title: "Typography/Code",
  component: Code,
  argTypes: {
    variant: { control: "select", options: ["inline", "block"] },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = {
  render: () => (
    <p className="text-sm text-neutral-600">
      Run <Code>npm install @allem-ui/react</Code> to get started.
    </p>
  ),
};

export const Block: Story = {
  render: () => (
    <Code variant="block">
      {`import { Button } from "@allem-ui/react";

function App() {
  return <Button>Click me</Button>;
}`}
    </Code>
  ),
};
