import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(<Grid>content</Grid>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies grid class", () => {
    render(<Grid data-testid="grid">content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("grid");
  });

  it("applies column count", () => {
    render(<Grid columns={3} data-testid="grid">content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("grid-cols-3");
  });

  it("applies gap", () => {
    render(<Grid gap="lg" data-testid="grid">content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("gap-6");
  });

  it("defaults to 1 column and md gap", () => {
    render(<Grid data-testid="grid">content</Grid>);
    const el = screen.getByTestId("grid");
    expect(el).toHaveClass("grid-cols-1");
    expect(el).toHaveClass("gap-4");
  });
});
