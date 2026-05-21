import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders as checkbox role", () => {
    render(<Checkbox>Check</Checkbox>);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles on click", () => {
    render(<Checkbox>Check</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Checkbox isDisabled>Check</Checkbox>);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("supports default selected", () => {
    render(<Checkbox defaultSelected>Check</Checkbox>);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
