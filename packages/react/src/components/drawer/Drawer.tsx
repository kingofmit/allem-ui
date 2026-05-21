"use client";

import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  Heading,
  type DialogTriggerProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface DrawerProps extends DialogTriggerProps {
  children: ReactNode;
}

export interface DrawerContentProps {
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
}

const placementStyles: Record<string, string> = {
  left: "inset-y-0 left-0 animate-allem-slide-right",
  right: "inset-y-0 right-0 ml-auto animate-allem-slide-left",
  top: "inset-x-0 top-0 animate-allem-slide-down",
  bottom: "inset-x-0 bottom-0 mt-auto animate-allem-slide-up",
};

const sizeStyles: Record<string, Record<string, string>> = {
  horizontal: {
    sm: "max-w-xs",
    md: "max-w-sm",
    lg: "max-w-md",
    xl: "max-w-lg",
  },
  vertical: {
    sm: "max-h-[25vh]",
    md: "max-h-[33vh]",
    lg: "max-h-[50vh]",
    xl: "max-h-[75vh]",
  },
};

export function Drawer({ children, ...props }: DrawerProps) {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
}

export function DrawerContent({
  title,
  placement = "right",
  size = "md",
  children,
  className,
}: DrawerContentProps) {
  const isVertical = placement === "top" || placement === "bottom";
  const dimension = isVertical ? "vertical" : "horizontal";

  return (
    <ModalOverlay
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs animate-allem-fade-in"
      isDismissable
    >
      <Modal
        className={cn(
          "fixed bg-white shadow-2xl dark:bg-neutral-900 overflow-y-auto",
          isVertical ? "w-full" : "h-full w-full",
          placementStyles[placement],
          sizeStyles[dimension][size],
          className,
        )}
      >
        <Dialog className="outline-none p-6 h-full">
          {title && (
            <Heading
              slot="title"
              className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-4"
            >
              {title}
            </Heading>
          )}
          {children}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
