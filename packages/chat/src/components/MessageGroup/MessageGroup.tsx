"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface MessageGroupProps {
  avatar?: string;
  variant: "sent" | "received";
  children: React.ReactNode;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function MessageGroup({
  avatar,
  variant,
  children,
  className,
}: MessageGroupProps) {
  const isSent = variant === "sent";

  return (
    <div
      className={cn(
        "flex gap-2",
        isSent ? "flex-row-reverse ml-auto max-w-[85%]" : "mr-auto max-w-[85%]",
        className
      )}
    >
      {avatar && (
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full",
            "flex items-center justify-center",
            "text-xs font-semibold text-white",
            "bg-gradient-to-br from-indigo-500 to-purple-600",
            "shadow-sm",
            "self-end"
          )}
          aria-label={avatar}
        >
          {getInitials(avatar)}
        </div>
      )}

      <div
        className={cn(
          "flex flex-col gap-1",
          isSent ? "items-end" : "items-start"
        )}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          const isFirst = index === 0;
          const isLast =
            index === React.Children.count(children) - 1;

          const groupRounding = isSent
            ? cn(
                isFirst && "rounded-2xl rounded-br-md",
                !isFirst && !isLast && "rounded-2xl rounded-r-md",
                isLast && !isFirst && "rounded-2xl rounded-tr-md"
              )
            : cn(
                isFirst && "rounded-2xl rounded-bl-md",
                !isFirst && !isLast && "rounded-2xl rounded-l-md",
                isLast && !isFirst && "rounded-2xl rounded-tl-md"
              );

          return React.cloneElement(child as React.ReactElement<any>, {
            className: cn(
              (child as React.ReactElement<any>).props.className,
              groupRounding
            ),
          });
        })}
      </div>
    </div>
  );
}
