"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  name: string;
  price: string | number;
  period?: string;
  description?: string;
  features?: PricingFeature[];
  cta?: string;
  onCtaClick?: () => void;
  isPopular?: boolean;
  color?: "primary" | "neutral";
  className?: string;
  children?: React.ReactNode;
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

export function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features,
  cta = "Get started",
  onCtaClick,
  isPopular = false,
  color = "primary",
  className,
  children,
}: PricingCardProps) {
  const isNeutral = color === "neutral";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-8 transition-all duration-200",
        "dark:bg-neutral-900",
        isPopular
          ? "ring-2 ring-indigo-600 shadow-lg shadow-indigo-600/10 scale-[1.02] z-10 dark:ring-indigo-500 dark:shadow-indigo-500/10"
          : "ring-1 ring-neutral-950/5 shadow-sm hover:shadow-md dark:ring-white/10",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-sm dark:bg-indigo-500">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {name}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {typeof price === "number" ? `$${price}` : price}
        </span>
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {period}
        </span>
      </div>

      <button
        onClick={onCtaClick}
        className={cn(
          "w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
          isPopular || !isNeutral
            ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 shadow-sm dark:bg-indigo-500 dark:hover:bg-indigo-400"
            : "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
        )}
      >
        {cta}
      </button>

      {features && features.length > 0 && (
        <ul className="mt-8 space-y-3 text-sm">
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
                    : "text-neutral-400 dark:text-neutral-500"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}
