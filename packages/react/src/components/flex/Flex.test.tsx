import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children", () => {
    render(<Flex>content</Flex>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies flex class by default", () => {
    render(<Flex data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex");
  });

  it("applies direction", () => {
    render(<Flex direction="column" data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex-col");
  });

  it("applies alignment", () => {
    render(<Flex align="center" data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("items-center");
  });

  it("applies justify", () => {
    render(<Flex justify="between" data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("justify-between");
  });

  it("applies wrap", () => {
    render(<Flex wrap data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex-wrap");
  });

  it("applies gap", () => {
    render(<Flex gap="md" data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("gap-4");
  });

  it("merges className", () => {
    render(<Flex className="custom" data-testid="flex">content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("custom");
  });
});
