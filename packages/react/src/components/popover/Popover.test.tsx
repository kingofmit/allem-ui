import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PopoverTrigger, Popover } from "./Popover";
import { Button } from "react-aria-components";

describe("Popover", () => {
  it("renders trigger element", () => {
    render(
      <PopoverTrigger>
        <Button>Open</Button>
        <Popover>Popover content</Popover>
      </PopoverTrigger>,
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("popover content is hidden initially", () => {
    render(
      <PopoverTrigger>
        <Button>Open</Button>
        <Popover>Popover content</Popover>
      </PopoverTrigger>,
    );
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  it("opens on trigger click", () => {
    render(
      <PopoverTrigger>
        <Button>Open</Button>
        <Popover>Popover content</Popover>
      </PopoverTrigger>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });
});
