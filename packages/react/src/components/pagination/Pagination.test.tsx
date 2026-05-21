import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders pagination nav", () => {
    render(<Pagination total={10} current={1} onChange={() => {}} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders page buttons", () => {
    render(<Pagination total={5} current={1} onChange={() => {}} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("highlights current page", () => {
    render(<Pagination total={5} current={3} onChange={() => {}} />);
    expect(screen.getByText("3")).toHaveAttribute("aria-current", "page");
  });

  it("calls onChange on page click", () => {
    const onChange = vi.fn();
    render(<Pagination total={5} current={1} onChange={onChange} />);
    fireEvent.click(screen.getByText("3"));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("calls onChange on next button", () => {
    const onChange = vi.fn();
    render(<Pagination total={5} current={2} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("Next page"));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("calls onChange on prev button", () => {
    const onChange = vi.fn();
    render(<Pagination total={5} current={3} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("Previous page"));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("disables prev on first page", () => {
    render(<Pagination total={5} current={1} onChange={() => {}} />);
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
  });

  it("disables next on last page", () => {
    render(<Pagination total={5} current={5} onChange={() => {}} />);
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("shows dots for many pages", () => {
    render(<Pagination total={20} current={10} onChange={() => {}} />);
    expect(screen.getAllByText("...").length).toBeGreaterThanOrEqual(1);
  });
});
