import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Modal, ModalContent } from "./Modal";
import { Button } from "react-aria-components";

describe("Modal", () => {
  it("renders trigger", () => {
    render(
      <Modal>
        <Button>Open</Button>
        <ModalContent title="My Modal">Hello</ModalContent>
      </Modal>,
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("opens when trigger is clicked", () => {
    render(
      <Modal>
        <Button>Open</Button>
        <ModalContent title="My Modal">Modal body</ModalContent>
      </Modal>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("My Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal body")).toBeInTheDocument();
  });

  it("renders title in modal", () => {
    render(
      <Modal>
        <Button>Open</Button>
        <ModalContent title="Dialog Title">Content</ModalContent>
      </Modal>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
  });
});
