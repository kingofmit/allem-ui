import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToastProvider, useToast } from "./Toast";

function ToastTrigger({ variant }: { variant?: "default" | "success" | "danger" | "warning" }) {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: "Test Toast",
          description: "Toast description",
          variant: variant || "default",
          duration: 0,
        })
      }
    >
      Show Toast
    </button>
  );
}

describe("Toast", () => {
  it("renders toast provider", () => {
    render(
      <ToastProvider>
        <div>App</div>
      </ToastProvider>,
    );
    expect(screen.getByText("App")).toBeInTheDocument();
  });

  it("shows toast when triggered", () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByText("Test Toast")).toBeInTheDocument();
    expect(screen.getByText("Toast description")).toBeInTheDocument();
  });

  it("renders toast with alert role", () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("dismisses toast on close button", () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByText("Test Toast")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(screen.queryByText("Test Toast")).not.toBeInTheDocument();
  });

  it("auto-dismisses after duration", () => {
    vi.useFakeTimers();

    function AutoDismiss() {
      const { toast } = useToast();
      return (
        <button onClick={() => toast({ title: "Auto", duration: 3000 })}>
          Trigger
        </button>
      );
    }

    render(
      <ToastProvider>
        <AutoDismiss />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText("Trigger"));
    expect(screen.getByText("Auto")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.queryByText("Auto")).not.toBeInTheDocument();

    vi.useRealTimers();
  });

  it("throws when useToast is used outside provider", () => {
    function BadComponent() {
      useToast();
      return null;
    }
    expect(() => render(<BadComponent />)).toThrow(
      "useToast must be used within a ToastProvider",
    );
  });
});
