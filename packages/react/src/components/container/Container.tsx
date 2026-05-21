import { cn } from "../../utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children?: ReactNode;
}

const sizeStyles: Record<string, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

export function Container({ size = "lg", className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
