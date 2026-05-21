import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownMenu, DropdownItem, DropdownSeparator, Button } from "@allem-ui/react";

const meta: Meta<typeof Dropdown> = {
  title: "Overlay/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <Button>Actions</Button>
      <DropdownMenu>
        <DropdownItem id="edit">Edit</DropdownItem>
        <DropdownItem id="duplicate">Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem id="delete">Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
