"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface FeatureListItem {
  text: string;
  included: boolean;
}

export interface FeatureListProps {
  features: FeatureListItem[];
  className?: string;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export function FeatureList({ features, className }: FeatureListProps) {
  return (
    <ul className={cn("space-y-3 text-sm", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          {feature.included ? (
            <CheckIcon className="text-emerald-500 dark:text-emerald-400" />
          ) : (
            <XIcon className="text-neutral-300 dark:text-neutral-600" />
          )}
          <span
            className={cn(
              feature.included
                ? "text-neutral-700 dark:text-neutral-300"
                : "text-neutral-400 line-through dark:text-neutral-500"
            )}
          >
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
