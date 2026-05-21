import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@allem-ui/react";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    columns: { control: "select", options: [1, 2, 3, 4, 6, 12] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl"] },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Cell = ({ n }: { n: number }) => (
  <div className="p-4 bg-indigo-50 text-indigo-700 rounded-lg text-sm text-center font-medium">{n}</div>
);

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap="md" style={{ width: 500 }}>
      {[1, 2, 3, 4, 5, 6].map((n) => <Cell key={n} n={n} />)}
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap="sm" style={{ width: 500 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <Cell key={n} n={n} />)}
    </Grid>
  ),
};
