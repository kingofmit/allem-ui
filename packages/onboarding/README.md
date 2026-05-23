# @allem-ui/onboarding

Onboarding wizard and spotlight product tour components for [Allem UI](https://github.com/kingofmit/allem-ui) — step-by-step wizards with progress indicators and guided tours that highlight DOM elements.

## Install

```bash
npm install @allem-ui/onboarding @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/onboarding";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Onboarding Wizard

Multi-step wizard with slide transitions and progress indicators.

```tsx
import {
  OnboardingWizard,
  OnboardingStep,
  useOnboarding,
} from "@allem-ui/onboarding";

function App() {
  const onboarding = useOnboarding({
    totalSteps: 3,
    onComplete: () => console.log("Done!"),
  });

  if (onboarding.isComplete) return <Dashboard />;

  return (
    <OnboardingWizard
      {...onboarding}
      progressVariant="dots" // "dots" | "bar" | "numbers"
    >
      <OnboardingStep
        title="Welcome"
        description="Let's get you set up in just a few steps."
        icon={<WaveIcon />}
      >
        <img src="/onboarding-1.png" alt="Welcome" />
      </OnboardingStep>

      <OnboardingStep
        title="Connect your account"
        description="Link your existing services."
        icon={<LinkIcon />}
      >
        <AccountForm />
      </OnboardingStep>

      <OnboardingStep
        title="You're all set!"
        description="Start exploring your dashboard."
        icon={<CheckIcon />}
      >
        <p>Everything is ready to go.</p>
      </OnboardingStep>
    </OnboardingWizard>
  );
}
```

## Spotlight Tour

Guided tour that highlights DOM elements with a spotlight overlay.

```tsx
import { SpotlightTour, useTour } from "@allem-ui/onboarding";

function App() {
  const tour = useTour({
    steps: [
      {
        target: "#sidebar-nav",
        title: "Navigation",
        content: "Use the sidebar to navigate between sections.",
        placement: "right",
      },
      {
        target: "#search-bar",
        title: "Search",
        content: "Find anything with the search bar.",
        placement: "bottom",
      },
      {
        target: "#profile-menu",
        title: "Your Profile",
        content: "Manage your account settings here.",
        placement: "left",
      },
    ],
    onComplete: () => console.log("Tour finished"),
  });

  return (
    <>
      <button onClick={tour.start}>Start Tour</button>
      <SpotlightTour {...tour} />
    </>
  );
}
```

## Components

### OnboardingWizard

Multi-step container with slide transitions and navigation controls.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentStep` | `number` | — | Current step index |
| `totalSteps` | `number` | — | Total number of steps |
| `onNext` | `() => void` | — | Next step callback |
| `onPrev` | `() => void` | — | Previous step callback |
| `onSkip` | `() => void` | — | Skip callback |
| `isFirst` | `boolean` | — | Whether on first step |
| `isLast` | `boolean` | — | Whether on last step |
| `progressVariant` | `"dots" \| "bar" \| "numbers"` | `"dots"` | Progress indicator style |
| `nextLabel` | `string` | `"Next"` | Next button label |
| `finishLabel` | `string` | `"Get Started"` | Finish button label |

### OnboardingStep

Individual step content with optional icon, title, and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Step title |
| `description` | `string` | — | Step description |
| `icon` | `ReactNode` | — | Step icon |

### OnboardingProgress

Standalone progress indicator (also used internally by OnboardingWizard).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentStep` | `number` | — | Current step index |
| `totalSteps` | `number` | — | Total steps |
| `variant` | `"dots" \| "bar" \| "numbers"` | `"dots"` | Visual style |

### SpotlightTour

Overlay that highlights target elements with a spotlight cutout and positioned tooltip.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isActive` | `boolean` | — | Whether the tour is active |
| `step` | `TourStep` | — | Current step configuration |
| `targetRect` | `TargetRect` | — | Target element position |
| `currentStep` | `number` | — | Current step index |
| `totalSteps` | `number` | — | Total steps |
| `onNext` | `() => void` | — | Next step callback |
| `onPrev` | `() => void` | — | Previous step callback |
| `onSkip` | `() => void` | — | Skip/dismiss callback |
| `padding` | `number` | `8` | Spotlight padding around target |

### useOnboarding

Hook for wizard state management.

```tsx
const {
  currentStep, totalSteps, isFirst, isLast, isComplete,
  next, prev, goTo, skip, reset,
} = useOnboarding({ totalSteps: 5, onComplete, onSkip });
```

### useTour

Hook for spotlight tour state with element tracking.

```tsx
const {
  isActive, currentStep, totalSteps, step, targetRect,
  isFirst, isLast, start, stop, next, prev, skip,
} = useTour({ steps, onComplete, onSkip });
```

## Features

- Animated slide transitions between wizard steps
- 3 progress indicator styles (dots, bar, numbers)
- Spotlight overlay with box-shadow cutout
- Auto-positioned tooltips (top, bottom, left, right)
- Smooth scroll to target elements
- ResizeObserver tracking for layout changes
- Keyboard navigation (← → Esc for tours)
- Skip and back controls
- Dark mode support
- Zero dependencies

## License

MIT
