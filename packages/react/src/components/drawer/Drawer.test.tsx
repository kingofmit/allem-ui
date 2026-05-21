import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Drawer, DrawerContent } from "./Drawer";
import { Button } from "react-aria-components";

describe("Drawer", () => {
  it("renders trigger", () => {
    render(
      <Drawer>
        <Button>Open Drawer</Button>
        <DrawerContent title="Menu">Drawer content</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByText("Open Drawer")).toBeInTheDocument();
  });

  it("opens when trigger is clicked", () => {
    render(
      <Drawer>
        <Button>Open Drawer</Button>
        <DrawerContent title="Menu">Drawer content</DrawerContent>
      </Drawer>,
    );
    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Drawer content")).toBeInTheDocument();
  });
});
