"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface OnboardingStepProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function OnboardingStep({
  title,
  description,
  icon,
  className,
  children,
}: OnboardingStepProps) {
  return (
    <div className={cn("flex flex-col items-center text-center px-6", className)}>
      {icon && (
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 mb-6">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-md">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
