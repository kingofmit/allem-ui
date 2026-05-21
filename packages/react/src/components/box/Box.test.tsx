import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    render(<Box>content</Box>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("renders as div by default", () => {
    render(<Box data-testid="box">content</Box>);
    expect(screen.getByTestId("box").tagName).toBe("DIV");
  });

  it("renders as custom element", () => {
    render(<Box as="section" data-testid="box">content</Box>);
    expect(screen.getByTestId("box").tagName).toBe("SECTION");
  });

  it("merges className", () => {
    render(<Box className="custom-class" data-testid="box">content</Box>);
    expect(screen.getByTestId("box")).toHaveClass("custom-class");
  });

  it("passes HTML attributes", () => {
    render(<Box id="my-box" data-testid="box">content</Box>);
    expect(screen.getByTestId("box")).toHaveAttribute("id", "my-box");
  });
});
