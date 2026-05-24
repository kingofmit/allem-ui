"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody, CardFooter,
  Badge,
  Button,
  RadioGroup, Radio,
  Slider,
  Accordion, AccordionItem,
  ToastProvider, useToast,
} from "@allem-ui/react";
import {
  PricingCard,
  PricingToggle,
  PricingTable,
  FeatureList,
  PricingComparisonTable,
  type PricingFeature,
  type ComparisonPlan,
  type ComparisonFeatureCategory,
} from "@allem-ui/pricing";
import { DashboardShell } from "../../components/DashboardShell";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 9,
    yearlyPrice: 86,
    description: "For individuals and small side projects.",
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "1 GB storage", included: true },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: true },
      { text: "Custom domain", included: false },
      { text: "API access", included: false },
      { text: "Priority support", included: false },
    ] as PricingFeature[],
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 278,
    description: "For growing teams that need more power.",
    popular: true,
    features: [
      { text: "Unlimited projects", included: true },
      { text: "10 GB storage", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority email support", included: true },
      { text: "Custom domain", included: true },
      { text: "API access", included: true },
      { text: "Priority support", included: false },
    ] as PricingFeature[],
  },
  {
    name: "Enterprise",
    monthlyPrice: 79,
    yearlyPrice: 758,
    description: "For large organizations with advanced needs.",
    features: [
      { text: "Unlimited everything", included: true },
      { text: "100 GB storage", included: true },
      { text: "Custom analytics", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Custom domain", included: true },
      { text: "Full API access", included: true },
      { text: "Dedicated account manager", included: true },
    ] as PricingFeature[],
  },
];

const comparisonPlans: ComparisonPlan[] = [
  { name: "Starter", price: "$9", period: "/mo" },
  { name: "Pro", price: "$29", period: "/mo" },
  { name: "Enterprise", price: "$79", period: "/mo" },
];

const comparisonFeatures: ComparisonFeatureCategory[] = [
  {
    category: "Core",
    items: [
      { name: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { name: "Storage", values: ["1 GB", "10 GB", "100 GB"] },
      { name: "Team members", values: ["1", "10", "Unlimited"] },
    ],
  },
  {
    category: "Features",
    items: [
      { name: "Analytics", values: ["Basic", "Advanced", "Custom"] },
      { name: "Custom domain", values: [false, true, true] },
      { name: "API access", values: [false, true, true] },
      { name: "Webhooks", values: [false, true, true] },
      { name: "SSO", values: [false, false, true] },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Email support", values: [true, true, true] },
      { name: "Priority support", values: [false, true, true] },
      { name: "Phone support", values: [false, false, true] },
      { name: "Dedicated manager", values: [false, false, true] },
    ],
  },
];

const faqItems = [
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. When upgrading, you'll be prorated for the remainder of the current period." },
  { q: "Is there a free trial?", a: "All plans come with a 14-day free trial. No credit card required. You'll be notified before any charges apply." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers for Enterprise plans. All payments are securely processed via Stripe." },
  { q: "Can I cancel anytime?", a: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period." },
  { q: "Do you offer discounts for nonprofits?", a: "Yes! We offer a 50% discount for registered nonprofits and educational institutions. Contact our sales team with proof of status to get started." },
];

function PricingContent() {
  const { toast } = useToast();
  const [isYearly, setIsYearly] = useState(false);
  const [seats, setSeats] = useState(5);
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <DashboardShell
      active="/pricing"
      title="Pricing"
      headerRight={
        <Badge variant="subtle" color="success" size="sm">Current: Pro</Badge>
      }
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h1>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Choose the plan that fits your team. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Toggle + Billing Options */}
        <div className="flex flex-col items-center gap-6">
          <PricingToggle
            isYearly={isYearly}
            onChange={(yearly) => {
              setIsYearly(yearly);
              setBillingCycle(yearly ? "yearly" : "monthly");
            }}
            savingsLabel="Save 20%"
          />

          <RadioGroup
            label="Billing cycle"
            orientation="horizontal"
            value={billingCycle}
            onChange={(value) => {
              setBillingCycle(value);
              setIsYearly(value === "yearly");
            }}
          >
            <Radio value="monthly">Monthly</Radio>
            <Radio value="yearly">Yearly</Radio>
          </RadioGroup>
        </div>

        {/* Team Size Slider */}
        <Card>
          <CardBody>
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Team size</span>
                <Badge variant="subtle" color="primary">{seats} seats</Badge>
              </div>
              <Slider
                label="Number of seats"
                minValue={1}
                maxValue={50}
                value={seats}
                onChange={(v) => setSeats(v as number)}
              />
              <p className="text-xs text-neutral-400 text-center">
                Estimated cost: ${((isYearly ? plans[1].yearlyPrice / 12 : plans[1].monthlyPrice) * seats / 5).toFixed(0)}/mo for Pro
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Pricing Cards */}
        <PricingTable>
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div key={plan.name} className="flex flex-col">
                <PricingCard
                  name={plan.name}
                  price={`$${price}`}
                  period={isYearly ? "/yr" : "/mo"}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.popular}
                  onCtaClick={() => toast({ title: `${plan.name} selected`, description: `You chose the ${plan.name} plan at $${price}${isYearly ? "/yr" : "/mo"}.` })}
                />
                <CardFooter className="mt-auto pt-0 px-6 pb-6">
                  <FeatureList features={plan.features.slice(0, 3)} />
                </CardFooter>
              </div>
            );
          })}
        </PricingTable>

        {/* Comparison Table */}
        <div>
          <h2 className="text-xl font-semibold text-center mb-6">Compare plans</h2>
          <PricingComparisonTable plans={comparisonPlans} features={comparisonFeatures} />
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold text-center mb-6">Frequently asked questions</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion>
              {faqItems.map((faq, i) => (
                <AccordionItem key={i} title={faq.q} id={`faq-${i}`}>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

export default function PricingPage() {
  return (
    <ToastProvider>
      <PricingContent />
    </ToastProvider>
  );
}
