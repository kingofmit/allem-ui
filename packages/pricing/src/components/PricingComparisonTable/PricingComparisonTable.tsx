"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface ComparisonPlan {
  name: string;
  price: string;
  period?: string;
}

export interface ComparisonFeatureItem {
  name: string;
  values: (boolean | string)[];
}

export interface ComparisonFeatureCategory {
  category: string;
  items: ComparisonFeatureItem[];
}

export interface PricingComparisonTableProps {
  plans: ComparisonPlan[];
  features: ComparisonFeatureCategory[];
  className?: string;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("mx-auto h-5 w-5", className)}
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
      className={cn("mx-auto h-5 w-5", className)}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export function PricingComparisonTable({
  plans,
  features,
  className,
}: PricingComparisonTableProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl overflow-x-auto rounded-2xl ring-1 ring-neutral-950/5 dark:ring-white/10",
        className
      )}
    >
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="sticky top-0 z-10 bg-white dark:bg-neutral-900">
            <th className="border-b border-neutral-200 px-6 py-5 text-sm font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              Features
            </th>
            {plans.map((plan, index) => (
              <th
                key={index}
                className="border-b border-neutral-200 px-6 py-5 text-center dark:border-neutral-700"
              >
                <div className="text-base font-semibold text-neutral-900 dark:text-white">
                  {plan.name}
                </div>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {plan.period || "/mo"}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((category, catIndex) => (
            <React.Fragment key={catIndex}>
              <tr>
                <td
                  colSpan={plans.length + 1}
                  className="bg-neutral-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:bg-neutral-800/50 dark:text-neutral-400"
                >
                  {category.category}
                </td>
              </tr>
              {category.items.map((item, itemIndex) => (
                <tr
                  key={itemIndex}
                  className={cn(
                    "transition-colors",
                    itemIndex % 2 === 0
                      ? "bg-white dark:bg-neutral-900"
                      : "bg-neutral-50/50 dark:bg-neutral-800/20"
                  )}
                >
                  <td className="border-b border-neutral-100 px-6 py-4 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    {item.name}
                  </td>
                  {item.values.map((value, valIndex) => (
                    <td
                      key={valIndex}
                      className="border-b border-neutral-100 px-6 py-4 text-center dark:border-neutral-800"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckIcon className="text-emerald-500 dark:text-emerald-400" />
                        ) : (
                          <XIcon className="text-neutral-300 dark:text-neutral-600" />
                        )
                      ) : (
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {value}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
