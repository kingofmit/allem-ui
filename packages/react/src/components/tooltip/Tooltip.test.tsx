import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip, TooltipContent } from "./Tooltip";
import { Button } from "react-aria-components";

describe("Tooltip", () => {
  it("renders trigger element", () => {
    render(
      <Tooltip>
        <Button>Hover me</Button>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("tooltip content is not visible initially", () => {
    render(
      <Tooltip>
        <Button>Hover me</Button>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>,
    );
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });
});
