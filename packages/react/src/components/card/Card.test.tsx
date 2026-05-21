import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>content</Card>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies outline variant by default", () => {
    render(<Card data-testid="card">content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("border");
  });

  it("applies filled variant", () => {
    render(<Card variant="filled" data-testid="card">content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("bg-neutral-50");
  });

  it("applies elevated variant", () => {
    render(<Card variant="elevated" data-testid="card">content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("shadow-md");
  });

  it("merges className", () => {
    render(<Card className="w-96" data-testid="card">content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("w-96");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Header</CardHeader>);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("has border bottom", () => {
    render(<CardHeader data-testid="h">Header</CardHeader>);
    expect(screen.getByTestId("h")).toHaveClass("border-b");
  });
});

describe("CardBody", () => {
  it("renders children", () => {
    render(<CardBody>Body</CardBody>);
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("has padding", () => {
    render(<CardBody data-testid="b">Body</CardBody>);
    expect(screen.getByTestId("b")).toHaveClass("px-6", "py-4");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("has border top", () => {
    render(<CardFooter data-testid="f">Footer</CardFooter>);
    expect(screen.getByTestId("f")).toHaveClass("border-t");
  });
});
