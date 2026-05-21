import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code by default", () => {
    render(<Code>const x = 1</Code>);
    const el = screen.getByText("const x = 1");
    expect(el.tagName).toBe("CODE");
  });

  it("applies inline styles", () => {
    render(<Code data-testid="c">code</Code>);
    expect(screen.getByTestId("c")).toHaveClass("font-mono");
  });

  it("renders block variant with pre wrapper", () => {
    render(<Code variant="block" data-testid="c">code block</Code>);
    expect(screen.getByTestId("c").tagName).toBe("PRE");
    expect(screen.getByTestId("c").querySelector("code")).toBeTruthy();
  });

  it("merges className", () => {
    render(<Code className="my-class" data-testid="c">code</Code>);
    expect(screen.getByTestId("c")).toHaveClass("my-class");
  });
});
