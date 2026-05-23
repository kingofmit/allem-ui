# Onboarding

## Install

```bash
npm install @allem-ui/onboarding
```

Add to Tailwind content:
```ts
"./node_modules/@allem-ui/onboarding/dist/**/*.{js,mjs}",
```

## Onboarding Wizard

Multi-step wizard with slide transitions and progress indicators.

```tsx
import { OnboardingWizard, OnboardingStep, useOnboarding } from "@allem-ui/onboarding";

const onboarding = useOnboarding({
  totalSteps: 3,
  onComplete: () => console.log("Done!"),
  onSkip: () => console.log("Skipped"),
});

<OnboardingWizard {...onboarding} progressVariant="dots">
  <OnboardingStep title="Welcome" description="Get started in minutes." icon={<WaveIcon />}>
    <img src="/step-1.png" />
  </OnboardingStep>
  <OnboardingStep title="Connect" description="Link your services.">
    <ConnectForm />
  </OnboardingStep>
  <OnboardingStep title="Ready!" description="You're all set.">
    <p>Start exploring.</p>
  </OnboardingStep>
</OnboardingWizard>
```

### Progress Variants

```tsx
<OnboardingWizard progressVariant="dots" />    // Expanding dot for active step
<OnboardingWizard progressVariant="bar" />     // Progress bar with percentage
<OnboardingWizard progressVariant="numbers" /> // Numbered circles with checkmarks
```

### useOnboarding

```tsx
const {
  currentStep, totalSteps, isFirst, isLast, isComplete,
  next, prev, goTo, skip, reset,
} = useOnboarding({ totalSteps, initialStep, onComplete, onSkip });
```

## Spotlight Tour

Guided tour overlay that highlights DOM elements.

```tsx
import { SpotlightTour, useTour } from "@allem-ui/onboarding";

const tour = useTour({
  steps: [
    { target: "#sidebar", title: "Navigation", content: "Browse sections here.", placement: "right" },
    { target: "#search", title: "Search", content: "Find anything.", placement: "bottom" },
    { target: "#profile", title: "Profile", content: "Manage your account.", placement: "left" },
  ],
  onComplete: () => console.log("Tour done"),
});

<button onClick={tour.start}>Start Tour</button>
<SpotlightTour {...tour} />
```

### TourStep Type

```ts
interface TourStep {
  target: string;    // CSS selector
  title: string;
  content: string;
  placement?: "top" | "bottom" | "left" | "right"; // default: "bottom"
}
```

### useTour

```tsx
const {
  isActive, currentStep, totalSteps, step, targetRect,
  isFirst, isLast, start, stop, next, prev, skip,
} = useTour({ steps, onComplete, onSkip });
```

### Keyboard Navigation (Tour)

- `→` — next step
- `←` — previous step
- `Escape` — dismiss tour

## Best Practices

- Wizard uses `Children.toArray` internally — each `OnboardingStep` is a direct child
- Spotlight uses `getBoundingClientRect` + `ResizeObserver` to track target position
- Spotlight cutout uses `box-shadow: 0 0 0 9999px` — no SVG masks needed
- Tour auto-scrolls to target elements with `scrollIntoView({ behavior: "smooth" })`
- Both components support dark mode
- Zero dependencies
