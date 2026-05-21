import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with status role", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has sr-only loading text by default", () => {
    render(<Spinner />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders visible label", () => {
    render(<Spinner label="Please wait" />);
    expect(screen.getByText("Please wait")).toBeInTheDocument();
  });

  it("merges className", () => {
    render(<Spinner className="my-4" />);
    expect(screen.getByRole("status")).toHaveClass("my-4");
  });
});
