import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@allem-ui/react";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["outline", "filled", "elevated"] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 350 }}>
      <CardHeader>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Card Title</h3>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This is a card with header, body, and footer sections.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {(["outline", "filled", "elevated"] as const).map((v) => (
        <Card key={v} variant={v} style={{ width: 200 }}>
          <CardBody>
            <p className="text-sm font-medium text-neutral-900 dark:text-white capitalize">{v}</p>
            <p className="text-xs text-neutral-500 mt-1">Card variant</p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <CardBody>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">A simple card with just a body.</p>
      </CardBody>
    </Card>
  ),
};
