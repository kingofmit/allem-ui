import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders a textarea element", () => {
    render(<Textarea label="Message" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Textarea label="Bio" />);
    expect(screen.getByText("Bio")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Textarea label="Bio" description="Tell us about yourself" />);
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Textarea label="Bio" errorMessage="Too short" isInvalid />);
    expect(screen.getByText("Too short")).toBeInTheDocument();
  });

  it("sets rows attribute", () => {
    render(<Textarea label="Bio" rows={5} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "5");
  });
});
