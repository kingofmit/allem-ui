import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@allem-ui/react";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

function PaginationDemo({ total = 10, size }: { total?: number; size?: "sm" | "md" | "lg" }) {
  const [page, setPage] = useState(1);
  return <Pagination total={total} current={page} onChange={setPage} size={size} />;
}

export const Default: Story = {
  render: () => <PaginationDemo />,
};

export const ManyPages: Story = {
  render: () => <PaginationDemo total={50} />,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <PaginationDemo total={10} size="sm" />
      <PaginationDemo total={10} size="md" />
      <PaginationDemo total={10} size="lg" />
    </div>
  ),
};
