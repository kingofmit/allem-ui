import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Select, SelectItem } from "./Select";

describe("Select", () => {
  it("renders with label", () => {
    render(
      <Select label="Country">
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
      </Select>,
    );
    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  it("renders trigger button", () => {
    render(
      <Select label="Color">
        <SelectItem id="red">Red</SelectItem>
      </Select>,
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(
      <Select label="Size" description="Choose a size">
        <SelectItem id="sm">Small</SelectItem>
      </Select>,
    );
    expect(screen.getByText("Choose a size")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(
      <Select label="Size" errorMessage="Required" isInvalid>
        <SelectItem id="sm">Small</SelectItem>
      </Select>,
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
