import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./Table";

describe("Table", () => {
  const renderTable = (variant?: "simple" | "striped" | "bordered") => {
    return render(
      <Table variant={variant} data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
  };

  it("renders table element", () => {
    renderTable();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders headers", () => {
    renderTable();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders cells", () => {
    renderTable();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    renderTable();
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
  });

  it("renders rows", () => {
    renderTable();
    expect(screen.getAllByRole("row")).toHaveLength(2);
  });

  it("wraps in overflow container", () => {
    renderTable();
    expect(screen.getByRole("table").parentElement).toHaveClass("overflow-x-auto");
  });
});
