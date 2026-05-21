import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders with separator role", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("defaults to horizontal orientation", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("supports vertical orientation", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });

  it("applies horizontal styles by default", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveClass("border-t");
  });

  it("applies vertical styles", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveClass("border-l");
  });

  it("merges className", () => {
    render(<Divider className="my-4" />);
    expect(screen.getByRole("separator")).toHaveClass("my-4");
  });
});
