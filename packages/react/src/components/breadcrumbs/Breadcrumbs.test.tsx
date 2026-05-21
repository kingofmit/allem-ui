import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders breadcrumb items", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumbs>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
  });

  it("renders navigation landmark", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Page</BreadcrumbItem>
      </Breadcrumbs>,
    );
    expect(screen.getByRole("list", { name: "Breadcrumbs" })).toBeInTheDocument();
  });

  it("renders links for items with href", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumbs>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  it("renders span for items without href", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumbs>,
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
  });
});
