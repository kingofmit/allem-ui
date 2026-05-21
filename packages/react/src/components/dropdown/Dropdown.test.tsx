import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Dropdown, DropdownMenu, DropdownItem } from "./Dropdown";
import { Button } from "react-aria-components";

describe("Dropdown", () => {
  it("renders trigger", () => {
    render(
      <Dropdown>
        <Button>Actions</Button>
        <DropdownMenu>
          <DropdownItem id="edit">Edit</DropdownItem>
          <DropdownItem id="delete">Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("menu is hidden initially", () => {
    render(
      <Dropdown>
        <Button>Actions</Button>
        <DropdownMenu>
          <DropdownItem id="edit">Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  });

  it("opens on trigger click", () => {
    render(
      <Dropdown>
        <Button>Actions</Button>
        <DropdownMenu>
          <DropdownItem id="edit">Edit</DropdownItem>
          <DropdownItem id="delete">Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    fireEvent.click(screen.getByText("Actions"));
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
