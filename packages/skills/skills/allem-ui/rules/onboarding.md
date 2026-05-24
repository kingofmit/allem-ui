# Onboarding

## Install

```bash
npm install @allem-ui/onboarding @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add to your main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/onboarding";
@source "@allem-ui/theme";
```

The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles won't be generated.

## Onboarding Wizard

Multi-step wizard with slide transitions and progress indicators.

```tsx
import { OnboardingWizard, OnboardingStep, useOnboarding } from "@allem-ui/onboarding";

const onboarding = useOnboarding({
  totalSteps: 3,
  onComplete: () => console.log("Done!"),
  onSkip: () => console.log("Skipped"),
});

<OnboardingWizard
  {...onboarding}
  onNext={onboarding.next}
  onPrev={onboarding.prev}
  onSkip={onboarding.skip}
  progressVariant="dots"
>
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

**Important:** `useOnboarding` returns `next`, `prev`, and `skip`, but `OnboardingWizard` expects `onNext`, `onPrev`, and `onSkip`. You must map them explicitly when spreading:

```tsx
<OnboardingWizard {...onboarding} onNext={onboarding.next} onPrev={onboarding.prev} onSkip={onboarding.skip}>
```

### OnboardingWizard Props

| Prop | Type | Default |
|------|------|---------|
| `currentStep` | `number` | required |
| `totalSteps` | `number` | required |
| `onNext` | `() => void` | required |
| `onPrev` | `() => void` | required |
| `onSkip` | `() => void` | -- |
| `isFirst` | `boolean` | required |
| `isLast` | `boolean` | required |
| `progressVariant` | `"dots" \| "bar" \| "numbers"` | `"dots"` |
| `nextLabel` | `string` | `"Next"` |
| `prevLabel` | `string` | `"Back"` |
| `skipLabel` | `string` | `"Skip"` |
| `finishLabel` | `string` | `"Get Started"` |
| `className` | `string` | -- |

### OnboardingStep Props

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | required |
| `description` | `string` | -- |
| `icon` | `ReactNode` | -- |
| `children` | `ReactNode` | -- |
| `className` | `string` | -- |

### OnboardingProgress Props

Standalone progress indicator (also used internally by OnboardingWizard).

| Prop | Type | Default |
|------|------|---------|
| `currentStep` | `number` | required |
| `totalSteps` | `number` | required |
| `variant` | `"dots" \| "bar" \| "numbers"` | `"dots"` |

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

| Option | Type | Default |
|--------|------|---------|
| `totalSteps` | `number` | required |
| `initialStep` | `number` | `0` |
| `onComplete` | `() => void` | -- |
| `onSkip` | `() => void` | -- |

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

### SpotlightTour Props

| Prop | Type | Default |
|------|------|---------|
| `isActive` | `boolean` | required |
| `step` | `TourStep` | required |
| `targetRect` | `TargetRect` | required |
| `currentStep` | `number` | required |
| `totalSteps` | `number` | required |
| `isFirst` | `boolean` | required |
| `isLast` | `boolean` | required |
| `onNext` | `() => void` | required |
| `onPrev` | `() => void` | required |
| `onSkip` | `() => void` | required |
| `padding` | `number` | `8` |

### Exported Types

```ts
interface TourStep {
  target: string;    // CSS selector
  title: string;
  content: string;
  placement?: "top" | "bottom" | "left" | "right"; // default: "bottom"
}

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}
```

```tsx
import type {
  OnboardingWizardProps,
  OnboardingStepProps,
  OnboardingProgressProps,
  SpotlightTourProps,
  SpotlightStepProps,
  UseOnboardingOptions,
  UseTourOptions,
  TourStep,
  TargetRect,
} from "@allem-ui/onboarding";
```

### useTour

```tsx
const {
  isActive, currentStep, totalSteps, step, targetRect,
  isFirst, isLast, start, stop, next, prev, skip,
} = useTour({ steps, onComplete, onSkip });
```

### Keyboard Navigation (Tour)

- `Right arrow` -- next step
- `Left arrow` -- previous step
- `Escape` -- dismiss tour

## Best Practices

- Wizard uses `Children.toArray` internally -- each `OnboardingStep` is a direct child
- Remember to map `next`/`prev`/`skip` from `useOnboarding` to `onNext`/`onPrev`/`onSkip` on `OnboardingWizard`
- Spotlight uses `getBoundingClientRect` + `ResizeObserver` to track target position
- Spotlight cutout uses `box-shadow: 0 0 0 9999px` -- no SVG masks needed
- Tour auto-scrolls to target elements with `scrollIntoView({ behavior: "smooth" })`
- Both components support dark mode
- Zero dependencies
