import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

describe("Tabs", () => {
  const renderTabs = () =>
    render(
      <Tabs>
        <TabList>
          <Tab id="1">Tab 1</Tab>
          <Tab id="2">Tab 2</Tab>
        </TabList>
        <TabPanel id="1">Panel 1</TabPanel>
        <TabPanel id="2">Panel 2</TabPanel>
      </Tabs>,
    );

  it("renders tab elements", () => {
    renderTabs();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
  });

  it("renders tab labels", () => {
    renderTabs();
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("renders tablist", () => {
    renderTabs();
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("renders tabpanel", () => {
    renderTabs();
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("shows first panel by default", () => {
    renderTabs();
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
  });
});
