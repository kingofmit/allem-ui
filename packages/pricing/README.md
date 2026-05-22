<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Pricing" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/pricing"><img src="https://img.shields.io/npm/v/@allem-ui/pricing.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/pricing

Pricing table and comparison components for Allem UI -- pricing cards, billing toggles, feature lists, and side-by-side plan comparisons.

## Installation

```bash
npm install @allem-ui/pricing @allem-ui/react @allem-ui/theme
```

## Quick Start

```tsx
import {
  PricingCard,
  PricingToggle,
  FeatureList,
} from "@allem-ui/pricing";

export function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      <PricingToggle value={billing} onChange={setBilling} />
      <PricingCard
        title="Pro"
        price={billing === "monthly" ? "$19" : "$190"}
        period={billing === "monthly" ? "/month" : "/year"}
        highlighted
      >
        <FeatureList
          features={[
            { label: "Unlimited projects", included: true },
            { label: "Priority support", included: true },
            { label: "Custom domain", included: true },
          ]}
        />
      </PricingCard>
    </div>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `PricingCard` | Individual pricing tier card with price, features, and CTA |
| `PricingToggle` | Monthly/yearly billing toggle switch |
| `PricingTable` | Layout container for multiple pricing cards |
| `FeatureList` | Checklist of included/excluded features |
| `PricingComparisonTable` | Side-by-side feature comparison across plans |

## Features

- **SaaS-ready** -- Drop-in pricing page components for subscription products
- **Billing toggle** -- Monthly/yearly toggle with price switching
- **Comparison tables** -- Feature-by-feature plan comparison with categories
- **Highlighted plans** -- Visually emphasize recommended pricing tiers
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with exported prop types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
