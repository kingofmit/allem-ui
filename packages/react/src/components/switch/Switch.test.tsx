import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch>Dark mode</Switch>);
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });

  it("renders as switch role", () => {
    render(<Switch>Toggle</Switch>);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("toggles on click", () => {
    render(<Switch>Toggle</Switch>);
    const sw = screen.getByRole("switch");
    expect(sw).not.toBeChecked();
    fireEvent.click(sw);
    expect(sw).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Switch isDisabled>Toggle</Switch>);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("supports default selected", () => {
    render(<Switch defaultSelected>Toggle</Switch>);
    expect(screen.getByRole("switch")).toBeChecked();
  });
});
