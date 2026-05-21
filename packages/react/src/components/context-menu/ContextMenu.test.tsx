import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "./ContextMenu";

describe("ContextMenu", () => {
  it("renders children", () => {
    render(
      <ContextMenu>
        <div>Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    expect(screen.getByText("Right click me")).toBeInTheDocument();
  });

  it("menu is hidden initially", () => {
    render(
      <ContextMenu>
        <div>Target</div>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens on right click", () => {
    render(
      <ContextMenu>
        <div>Target</div>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Target"));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("calls onAction when item is clicked", () => {
    const onAction = vi.fn();
    render(
      <ContextMenu>
        <div>Target</div>
        <ContextMenuContent>
          <ContextMenuItem onAction={onAction}>Edit</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Target"));
    fireEvent.click(screen.getByText("Edit"));
    expect(onAction).toHaveBeenCalled();
  });

  it("renders separator", () => {
    render(
      <ContextMenu>
        <div>Target</div>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Target"));
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders menu items with roles", () => {
    render(
      <ContextMenu>
        <div>Target</div>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Target"));
    expect(screen.getByRole("menuitem")).toBeInTheDocument();
  });
});
