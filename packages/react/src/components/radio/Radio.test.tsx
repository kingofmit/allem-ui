import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RadioGroup, Radio } from "./Radio";

describe("RadioGroup", () => {
  it("renders label", () => {
    render(
      <RadioGroup label="Color">
        <Radio value="red">Red</Radio>
        <Radio value="blue">Blue</Radio>
      </RadioGroup>,
    );
    expect(screen.getByText("Color")).toBeInTheDocument();
  });

  it("renders radio buttons", () => {
    render(
      <RadioGroup label="Size">
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>,
    );
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("selects radio on click", () => {
    render(
      <RadioGroup label="Size">
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    fireEvent.click(radios[0]);
    expect(radios[0]).toBeChecked();
  });

  it("renders description", () => {
    render(
      <RadioGroup label="Size" description="Pick one">
        <Radio value="sm">Small</Radio>
      </RadioGroup>,
    );
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(
      <RadioGroup label="Size" errorMessage="Required" isInvalid>
        <Radio value="sm">Small</Radio>
      </RadioGroup>,
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
