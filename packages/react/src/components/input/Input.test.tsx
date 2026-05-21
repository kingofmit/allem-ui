import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input label="Name" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Input label="Name" description="Enter your name" />);
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Input label="Email" errorMessage="Invalid email" isInvalid />);
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("hides description when error is shown", () => {
    render(<Input label="Email" description="desc" errorMessage="error" isInvalid />);
    expect(screen.queryByText("desc")).not.toBeInTheDocument();
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  it("merges className", () => {
    render(<Input label="Name" className="custom" data-testid="input-wrapper" />);
    expect(screen.getByRole("textbox").closest(".custom")).toBeTruthy();
  });
});
