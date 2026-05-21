import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders as span", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New").tagName).toBe("SPAN");
  });

  it("applies subtle variant by default", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toHaveClass("bg-indigo-50");
  });

  it("applies solid variant", () => {
    render(<Badge variant="solid">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("bg-indigo-600");
  });

  it("applies outline variant", () => {
    render(<Badge variant="outline">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("border");
  });

  it("applies color variants", () => {
    render(<Badge color="danger">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("bg-red-50");
  });

  it("applies size variants", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("text-sm");
  });

  it("merges className", () => {
    render(<Badge className="custom">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("custom");
  });
});
