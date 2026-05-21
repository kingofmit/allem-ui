import { cn } from "../../utils/cn";
import type { HTMLAttributes, ElementType, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

export function Box({ as: Component = "div", className, children, ...props }: BoxProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}
