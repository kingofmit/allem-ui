# Pricing

```bash
npm i @allem-ui/pricing
```

```tsx
import {
  PricingTable,
  PricingCard,
  PricingToggle,
  FeatureList,
  PricingComparisonTable,
} from "@allem-ui/pricing";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Basic pricing page

```tsx
import { useState } from "react";
import { PricingTable, PricingCard, PricingToggle } from "@allem-ui/pricing";

const [isYearly, setIsYearly] = useState(false);

<PricingToggle isYearly={isYearly} onChange={setIsYearly} savingsLabel="Save 20%" />

<PricingTable>
  <PricingCard
    name="Free"
    price={0}
    description="For individuals"
    features={[
      { text: "5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "Priority support", included: false },
    ]}
    onCtaClick={() => signup("free")}
  />
  <PricingCard
    name="Pro"
    price={isYearly ? 19 : 24}
    period={isYearly ? "/mo (billed yearly)" : "/mo"}
    description="For professionals"
    isPopular
    features={[
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
    ]}
    onCtaClick={() => signup("pro")}
  />
  <PricingCard
    name="Enterprise"
    price="Custom"
    description="For large teams"
    color="neutral"
    features={[
      { text: "Everything in Pro", included: true },
      { text: "SSO & SAML", included: true },
      { text: "Dedicated support", included: true },
    ]}
    cta="Contact Sales"
    onCtaClick={() => openContact()}
  />
</PricingTable>
```

## PricingCard Props

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | required |
| `price` | `string \| number` | required |
| `period` | `string` | `"/mo"` |
| `description` | `string` | — |
| `features` | `{ text: string; included: boolean }[]` | — |
| `cta` | `string` | `"Get started"` |
| `onCtaClick` | `() => void` | — |
| `isPopular` | `boolean` | `false` |
| `color` | `"primary" \| "neutral"` | `"primary"` |
| `children` | `ReactNode` | — |

- `isPopular` adds an indigo ring, slight scale-up, and a "Most Popular" badge
- `price` as number adds `$` prefix automatically; as string displays as-is
- `children` renders below the feature list for custom content

## PricingToggle

Monthly/Yearly segmented control.

| Prop | Type | Default |
|------|------|---------|
| `isYearly` | `boolean` | required |
| `onChange` | `(isYearly: boolean) => void` | required |
| `savingsLabel` | `string` | — |

`savingsLabel` shows as a green badge (e.g., "Save 20%").

## PricingComparisonTable

Full feature comparison matrix.

```tsx
<PricingComparisonTable
  plans={[
    { name: "Free", price: 0 },
    { name: "Pro", price: 24, period: "/mo" },
    { name: "Enterprise", price: "Custom" },
  ]}
  features={[
    {
      category: "Core Features",
      items: [
        { name: "Projects", values: ["5", "Unlimited", "Unlimited"] },
        { name: "Storage", values: ["1 GB", "100 GB", "Unlimited"] },
        { name: "API Access", values: [false, true, true] },
      ],
    },
    {
      category: "Support",
      items: [
        { name: "Email support", values: [true, true, true] },
        { name: "Priority support", values: [false, true, true] },
        { name: "Dedicated CSM", values: [false, false, true] },
      ],
    },
  ]}
/>
```

Boolean values render as checkmarks (true) or X marks (false). String values display as text.

## FeatureList

Standalone feature list (used inside PricingCard automatically, but available separately).

```tsx
<FeatureList features={[
  { text: "Unlimited projects", included: true },
  { text: "No watermark", included: false },
]} />
```
