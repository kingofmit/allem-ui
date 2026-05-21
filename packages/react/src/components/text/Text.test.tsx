import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders as p by default", () => {
    render(<Text data-testid="t">Hello</Text>);
    expect(screen.getByTestId("t").tagName).toBe("P");
  });

  it("renders as custom element", () => {
    render(<Text as="span" data-testid="t">Hello</Text>);
    expect(screen.getByTestId("t").tagName).toBe("SPAN");
  });

  it("applies size", () => {
    render(<Text size="sm" data-testid="t">Hello</Text>);
    expect(screen.getByTestId("t")).toHaveClass("text-sm");
  });

  it("applies color", () => {
    render(<Text color="muted" data-testid="t">Hello</Text>);
    expect(screen.getByTestId("t")).toHaveClass("text-neutral-500");
  });

  it("applies weight", () => {
    render(<Text weight="bold" data-testid="t">Hello</Text>);
    expect(screen.getByTestId("t")).toHaveClass("font-bold");
  });
});
