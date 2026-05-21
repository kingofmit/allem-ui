import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@allem-ui/react";

const meta: Meta<typeof ContextMenu> = {
  title: "Overlay/ContextMenu",
  component: ContextMenu,
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex items-center justify-center w-64 h-32 border-2 border-dashed border-neutral-300 rounded-lg text-sm text-neutral-500">
        Right-click here
      </div>
      <ContextMenuContent>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
