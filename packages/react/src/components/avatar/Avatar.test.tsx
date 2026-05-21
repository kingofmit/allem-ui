import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders initials when name is provided without src", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders ? when no name or src", () => {
    render(<Avatar />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("applies size variants", () => {
    render(<Avatar name="Jane Doe" size="lg" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.getByLabelText("Jane Doe")).toHaveClass("h-14");
  });

  it("renders status indicator", () => {
    render(<Avatar name="Jane Doe" status="online" />);
    const statusEl = screen.getByLabelText("online");
    expect(statusEl).toBeInTheDocument();
    expect(statusEl).toHaveClass("bg-emerald-500");
  });

  it("renders offline status", () => {
    render(<Avatar name="Jane Doe" status="offline" />);
    expect(screen.getByLabelText("offline")).toHaveClass("bg-neutral-400");
  });

  it("renders busy status", () => {
    render(<Avatar name="Jane Doe" status="busy" />);
    expect(screen.getByLabelText("busy")).toHaveClass("bg-red-500");
  });

  it("uses alt from props for image", () => {
    render(<Avatar src="test.jpg" alt="Profile" />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Profile");
  });
});
