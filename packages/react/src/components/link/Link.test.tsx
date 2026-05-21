import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  it("renders children", () => {
    render(<Link href="https://example.com">Click me</Link>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a link", () => {
    render(<Link href="https://example.com">Click me</Link>);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("applies href", () => {
    render(<Link href="https://example.com">Click me</Link>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });

  it("applies underline styling", () => {
    render(<Link href="#">Link</Link>);
    expect(screen.getByRole("link")).toHaveClass("underline");
  });
});
