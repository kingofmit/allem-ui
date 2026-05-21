import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>content</Container>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies mx-auto and padding", () => {
    render(<Container data-testid="c">content</Container>);
    const el = screen.getByTestId("c");
    expect(el).toHaveClass("mx-auto");
    expect(el).toHaveClass("px-4");
  });

  it("applies size variants", () => {
    render(<Container size="sm" data-testid="c">content</Container>);
    expect(screen.getByTestId("c")).toHaveClass("max-w-screen-sm");
  });

  it("defaults to lg", () => {
    render(<Container data-testid="c">content</Container>);
    expect(screen.getByTestId("c")).toHaveClass("max-w-screen-lg");
  });
});
