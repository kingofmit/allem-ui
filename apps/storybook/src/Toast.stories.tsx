import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast, Button } from "@allem-ui/react";

function ToastDemo({ variant }: { variant?: "default" | "success" | "danger" | "warning" }) {
  const { toast } = useToast();
  return (
    <Button
      onPress={() =>
        toast({
          title: `${(variant || "default").charAt(0).toUpperCase() + (variant || "default").slice(1)} Toast`,
          description: "This is a toast notification.",
          variant: variant || "default",
          duration: 5000,
        })
      }
    >
      Show {variant || "default"} toast
    </Button>
  );
}

const meta: Meta = {
  title: "Overlay/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <ToastDemo variant="default" />
      <ToastDemo variant="success" />
      <ToastDemo variant="danger" />
      <ToastDemo variant="warning" />
    </div>
  ),
};
