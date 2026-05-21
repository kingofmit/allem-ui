import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders with status role", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has aria-label", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
  });

  it("applies pulse animation", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toHaveClass("animate-allem-pulse");
  });

  it("applies text variant by default", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toHaveClass("rounded-md");
  });

  it("applies circular variant", () => {
    render(<Skeleton variant="circular" />);
    expect(screen.getByRole("status")).toHaveClass("rounded-full");
  });

  it("applies custom dimensions", () => {
    render(<Skeleton width={200} height={40} />);
    const el = screen.getByRole("status");
    expect(el.style.width).toBe("200px");
    expect(el.style.height).toBe("40px");
  });

  it("supports string dimensions", () => {
    render(<Skeleton width="100%" height="2rem" />);
    const el = screen.getByRole("status");
    expect(el.style.width).toBe("100%");
    expect(el.style.height).toBe("2rem");
  });
});
