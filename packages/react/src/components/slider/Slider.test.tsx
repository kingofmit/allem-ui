import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders slider", () => {
    render(<Slider label="Volume" defaultValue={50} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Slider label="Volume" defaultValue={50} />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
  });

  it("renders output when showOutput is true", () => {
    render(<Slider label="Volume" defaultValue={50} showOutput />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("merges className", () => {
    render(<Slider label="Volume" defaultValue={50} className="w-64" data-testid="s" />);
    expect(screen.getByTestId("s").closest(".w-64")).toBeTruthy();
  });
});
