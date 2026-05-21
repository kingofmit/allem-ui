import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("renders as button element", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies solid primary styles by default", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-indigo-600");
  });

  it("applies outline variant", () => {
    render(<Button variant="outline">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("border");
  });

  it("applies ghost variant", () => {
    render(<Button variant="ghost">Click</Button>);
    const btn = screen.getByRole("button");
    expect(btn).not.toHaveClass("bg-indigo-600");
    expect(btn).not.toHaveClass("border");
  });

  it("applies size variants", () => {
    render(<Button size="lg">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-6");
  });

  it("applies danger color", () => {
    render(<Button color="danger">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });

  it("applies fullWidth", () => {
    render(<Button fullWidth>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("supports disabled state", () => {
    render(<Button isDisabled>Click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("merges className", () => {
    render(<Button className="custom">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom");
  });
});
