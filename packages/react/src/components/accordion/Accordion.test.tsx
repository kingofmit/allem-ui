import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion, AccordionItem } from "./Accordion";

describe("Accordion", () => {
  it("renders accordion items", () => {
    render(
      <Accordion>
        <AccordionItem title="Section 1" id="1">Content 1</AccordionItem>
        <AccordionItem title="Section 2" id="2">Content 2</AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("content is hidden by default", () => {
    render(
      <Accordion>
        <AccordionItem title="Section 1" id="1">Content 1</AccordionItem>
      </Accordion>,
    );
    expect(screen.queryByText("Content 1")).not.toBeVisible();
  });

  it("expands on click", () => {
    render(
      <Accordion>
        <AccordionItem title="Section 1" id="1">Content 1</AccordionItem>
      </Accordion>,
    );
    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  it("renders trigger buttons", () => {
    render(
      <Accordion>
        <AccordionItem title="Section 1" id="1">Content 1</AccordionItem>
      </Accordion>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("Section 1");
  });
});
