import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@allem-ui/react";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  argTypes: {
    variant: { control: "select", options: ["simple", "striped"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args} style={{ width: 500 }}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ahmed Allem</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Doe</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>Away</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table variant="striped" style={{ width: 500 }}>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Widget A</TableCell><TableCell>$10</TableCell><TableCell>142</TableCell></TableRow>
        <TableRow><TableCell>Widget B</TableCell><TableCell>$25</TableCell><TableCell>89</TableCell></TableRow>
        <TableRow><TableCell>Widget C</TableCell><TableCell>$15</TableCell><TableCell>256</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
};
