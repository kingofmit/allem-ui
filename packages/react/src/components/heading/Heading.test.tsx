import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders children", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("renders as h2 by default", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders as custom heading level", () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("applies size variants", () => {
    render(<Heading size="2xl" data-testid="h">Title</Heading>);
    expect(screen.getByTestId("h")).toHaveClass("text-4xl");
  });

  it("defaults to lg size", () => {
    render(<Heading data-testid="h">Title</Heading>);
    expect(screen.getByTestId("h")).toHaveClass("text-2xl");
  });

  it("merges className", () => {
    render(<Heading className="mb-4" data-testid="h">Title</Heading>);
    expect(screen.getByTestId("h")).toHaveClass("mb-4");
  });
});
