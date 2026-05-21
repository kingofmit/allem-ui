import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@allem-ui/react";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    status: { control: "select", options: [undefined, "online", "offline", "away", "busy"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=3", alt: "User avatar" },
};

export const WithInitials: Story = {
  args: { name: "Ahmed Allem" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="John Doe" status="online" />
      <Avatar name="Jane Smith" status="offline" />
      <Avatar name="Bob Wilson" status="away" />
      <Avatar name="Alice Brown" status="busy" />
    </div>
  ),
};

export const Fallback: Story = {
  args: {},
};
