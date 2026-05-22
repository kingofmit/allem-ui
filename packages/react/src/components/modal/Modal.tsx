"use client";

import {
  Dialog,
  DialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  Heading,
  type DialogTriggerProps,
} from "react-aria-components";
import { cn } from "../../utils/cn";
import type { ReactNode } from "react";

export interface ModalProps extends Omit<DialogTriggerProps, "children"> {
  children: ReactNode;
}

export interface ModalContentProps {
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export function Modal({ children, ...props }: ModalProps) {
  return <DialogTrigger {...props}>{children as any}</DialogTrigger>;
}

export function ModalContent({
  title,
  size = "md",
  children,
  className,
}: ModalContentProps) {
  return (
    <ModalOverlay
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs animate-allem-fade-in"
      isDismissable
    >
      <AriaModal
        className={cn(
          "w-full mx-4 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-neutral-950/5 dark:bg-neutral-900 dark:ring-white/10 animate-allem-slide-up",
          sizeStyles[size],
          className,
        )}
      >
        <Dialog className="outline-none">
          {title && (
            <Heading
              slot="title"
              className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-4"
            >
              {title}
            </Heading>
          )}
          {children as any}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}
