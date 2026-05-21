"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import { PricingCard, PricingToggle } from "@allem-ui/pricing";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/pricing</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Pricing tables, cards, toggles, and feature comparison components for SaaS and product pages.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/pricing`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/pricing</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Components</h2>

      <h3 className="mt-8 text-lg font-medium">PricingCard</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Individual pricing plan card with name, price, features, and CTA button.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { PricingCard } from "@allem-ui/pricing";\n\n<PricingCard\n  name="Pro"\n  price={29}\n  period="/mo"\n  description="For growing teams"\n  isPopular\n  features={[\n    { text: "Unlimited projects", included: true },\n    { text: "Priority support", included: true },\n    { text: "Custom domains", included: true },\n    { text: "SSO", included: false },\n  ]}\n  cta="Get Started"\n/>`}>
          <div className="flex justify-center py-8">
            <PricingCard
              name="Pro"
              price={29}
              period="/mo"
              description="For growing teams"
              isPopular
              features={[
                { text: "Unlimited projects", included: true },
                { text: "Priority support", included: true },
                { text: "Custom domains", included: true },
                { text: "SSO", included: false },
              ]}
              cta="Get Started"
            />
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">PricingToggle</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Monthly/yearly billing period toggle with optional savings badge.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { PricingToggle } from "@allem-ui/pricing";\n\n<PricingToggle\n  isYearly={false}\n  onChange={setIsYearly}\n  savingsLabel="Save 20%"\n/>`}>
          <div className="py-4">
            <PricingToggle
              isYearly={isYearly}
              onChange={setIsYearly}
              savingsLabel="Save 20%"
            />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">PricingCard Props</h2>
      <PropsTable
        props={[
          { name: "name", type: "string", required: true, description: "Plan name" },
          { name: "price", type: "string | number", required: true, description: "Plan price" },
          { name: "period", type: "string", default: '"/mo"', description: "Billing period label" },
          { name: "description", type: "string", description: "Plan description" },
          { name: "features", type: "{ text: string; included: boolean }[]", description: "Feature list" },
          { name: "cta", type: "string", description: "CTA button text" },
          { name: "onCtaClick", type: "() => void", description: "CTA click handler" },
          { name: "isPopular", type: "boolean", default: "false", description: "Highlight as popular plan" },
        ]}
      />
    </div>
  );
}
