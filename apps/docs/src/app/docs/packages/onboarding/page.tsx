"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  OnboardingWizard,
  OnboardingStep,
  OnboardingProgress,
  useOnboarding,
} from "@allem-ui/onboarding";

function WizardDemo() {
  const onboarding = useOnboarding({
    totalSteps: 3,
    onComplete: () => onboarding.reset(),
  });

  return (
    <div className="w-full max-w-lg">
      <OnboardingWizard {...onboarding} progressVariant="dots">
        <OnboardingStep title="Welcome" description="Let's get you set up in just a few steps.">
          <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-4xl">
            👋
          </div>
        </OnboardingStep>
        <OnboardingStep title="Customize" description="Pick your preferences and make it yours.">
          <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-4xl">
            ⚙️
          </div>
        </OnboardingStep>
        <OnboardingStep title="You're ready!" description="Start exploring your new workspace.">
          <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-4xl">
            🚀
          </div>
        </OnboardingStep>
      </OnboardingWizard>
    </div>
  );
}

function CustomLabelsDemo() {
  const onboarding = useOnboarding({
    totalSteps: 3,
    onComplete: () => onboarding.reset(),
  });

  return (
    <div className="w-full max-w-lg">
      <OnboardingWizard
        {...onboarding}
        progressVariant="bar"
        nextLabel="Continue"
        prevLabel="Go back"
        skipLabel="Not now"
        finishLabel="Let's go!"
        onSkip={() => onboarding.reset()}
      >
        <OnboardingStep title="Connect your account" description="Link your GitHub account to get started.">
          <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-4xl">
            🔗
          </div>
        </OnboardingStep>
        <OnboardingStep title="Choose a plan" description="Select the plan that works for your team.">
          <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-4xl">
            💎
          </div>
        </OnboardingStep>
        <OnboardingStep title="Invite your team" description="Add teammates to your new workspace.">
          <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-4xl">
            👥
          </div>
        </OnboardingStep>
      </OnboardingWizard>
    </div>
  );
}

function ProgressDemo() {
  return (
    <div className="w-full max-w-sm space-y-8">
      <div>
        <p className="text-xs font-medium text-neutral-500 mb-3">Dots</p>
        <OnboardingProgress currentStep={1} totalSteps={4} variant="dots" />
      </div>
      <div>
        <p className="text-xs font-medium text-neutral-500 mb-3">Bar</p>
        <OnboardingProgress currentStep={2} totalSteps={5} variant="bar" />
      </div>
      <div>
        <p className="text-xs font-medium text-neutral-500 mb-3">Numbers</p>
        <OnboardingProgress currentStep={2} totalSteps={4} variant="numbers" />
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Onboarding</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/onboarding</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Step-by-step onboarding wizard with animated transitions, progress indicators, and spotlight product tours.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code="npm install @allem-ui/onboarding">
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/onboarding</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Wizard</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Multi-step wizard with slide transitions. Click Next/Back to navigate.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { OnboardingWizard, OnboardingStep, useOnboarding } from "@allem-ui/onboarding";\n\nconst onboarding = useOnboarding({\n  totalSteps: 3,\n  onComplete: () => console.log("Done!"),\n});\n\n<OnboardingWizard {...onboarding} progressVariant="dots">\n  <OnboardingStep title="Welcome" description="Get started.">\n    <WelcomeContent />\n  </OnboardingStep>\n  <OnboardingStep title="Customize" description="Make it yours.">\n    <SettingsContent />\n  </OnboardingStep>\n  <OnboardingStep title="Ready!" description="You're all set.">\n    <DoneContent />\n  </OnboardingStep>\n</OnboardingWizard>`}>
          <WizardDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Custom Labels</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Customize button labels and add a skip option with the bar progress variant.</p>
      <div className="mt-4">
        <ComponentPreview code={`<OnboardingWizard\n  {...onboarding}\n  progressVariant="bar"\n  nextLabel="Continue"\n  prevLabel="Go back"\n  skipLabel="Not now"\n  finishLabel="Let's go!"\n  onSkip={() => onboarding.reset()}\n>\n  <OnboardingStep title="Connect" description="Link your account.">\n    ...\n  </OnboardingStep>\n</OnboardingWizard>`}>
          <CustomLabelsDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Progress Variants</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Three built-in styles for the progress indicator.</p>
      <div className="mt-4">
        <ComponentPreview code={`<OnboardingProgress currentStep={1} totalSteps={4} variant="dots" />\n<OnboardingProgress currentStep={2} totalSteps={5} variant="bar" />\n<OnboardingProgress currentStep={2} totalSteps={4} variant="numbers" />`}>
          <ProgressDemo />
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">OnboardingWizard Props</h2>
      <PropsTable
        props={[
          { name: "currentStep", type: "number", required: true, description: "Current step index" },
          { name: "totalSteps", type: "number", required: true, description: "Total number of steps" },
          { name: "onNext", type: "() => void", required: true, description: "Next step callback" },
          { name: "onPrev", type: "() => void", required: true, description: "Previous step callback" },
          { name: "onSkip", type: "() => void", description: "Skip callback — shows skip button when provided" },
          { name: "isFirst", type: "boolean", required: true, description: "Whether on first step" },
          { name: "isLast", type: "boolean", required: true, description: "Whether on last step" },
          { name: "progressVariant", type: '"dots" | "bar" | "numbers"', default: '"dots"', description: "Progress indicator style" },
          { name: "nextLabel", type: "string", default: '"Next"', description: "Label for the next button" },
          { name: "prevLabel", type: "string", default: '"Back"', description: "Label for the previous button" },
          { name: "skipLabel", type: "string", default: '"Skip"', description: "Label for the skip button" },
          { name: "finishLabel", type: "string", default: '"Get Started"', description: "Label for the finish button (last step)" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", required: true, description: "OnboardingStep elements" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">OnboardingStep Props</h2>
      <PropsTable
        props={[
          { name: "title", type: "string", description: "Step title" },
          { name: "description", type: "string", description: "Step description" },
          { name: "icon", type: "ReactNode", description: "Step icon" },
          { name: "className", type: "string", description: "Additional CSS classes" },
          { name: "children", type: "ReactNode", required: true, description: "Step content" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">OnboardingProgress Props</h2>
      <PropsTable
        props={[
          { name: "currentStep", type: "number", required: true, description: "Current step index" },
          { name: "totalSteps", type: "number", required: true, description: "Total number of steps" },
          { name: "variant", type: '"dots" | "bar" | "numbers"', default: '"dots"', description: "Progress display style" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">useOnboarding</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Hook that manages step navigation state. Spread the return value directly onto OnboardingWizard.
      </p>
      <h3 className="mt-6 text-lg font-medium">Options</h3>
      <PropsTable
        props={[
          { name: "totalSteps", type: "number", required: true, description: "Total number of steps" },
          { name: "initialStep", type: "number", default: "0", description: "Starting step index" },
          { name: "onComplete", type: "() => void", description: "Called when the user completes all steps" },
          { name: "onSkip", type: "() => void", description: "Called when the user skips" },
        ]}
      />
      <h3 className="mt-6 text-lg font-medium">Return Value</h3>
      <PropsTable
        props={[
          { name: "currentStep", type: "number", description: "Current step index" },
          { name: "totalSteps", type: "number", description: "Total number of steps" },
          { name: "isFirst", type: "boolean", description: "Whether on the first step" },
          { name: "isLast", type: "boolean", description: "Whether on the last step" },
          { name: "isComplete", type: "boolean", description: "Whether onboarding is complete" },
          { name: "next", type: "() => void", description: "Go to the next step" },
          { name: "prev", type: "() => void", description: "Go to the previous step" },
          { name: "goTo", type: "(step: number) => void", description: "Jump to a specific step" },
          { name: "skip", type: "() => void", description: "Skip the onboarding" },
          { name: "reset", type: "() => void", description: "Reset to the initial step" },
        ]}
      />

      <h2 className="mt-12 text-xl font-semibold">Spotlight Tour</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Use <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-sm">SpotlightTour</code> + <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-sm">useTour</code> to create guided tours that highlight DOM elements with a spotlight overlay.
      </p>
      <div className="mt-4">
        <ComponentPreview code={`import { SpotlightTour, useTour } from "@allem-ui/onboarding";\n\nconst tour = useTour({\n  steps: [\n    { target: "#step-1", title: "Welcome", content: "This is the dashboard.", placement: "bottom" },\n    { target: "#step-2", title: "Settings", content: "Configure your account.", placement: "right" },\n  ],\n  onComplete: () => console.log("Tour done!"),\n});\n\n<button onClick={tour.start}>Start tour</button>\n<SpotlightTour {...tour} />`}>
          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400 italic">
            Spotlight Tour requires live DOM targets — see the code example for usage.
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-6 text-lg font-medium">SpotlightTour Props</h3>
      <PropsTable
        props={[
          { name: "isActive", type: "boolean", required: true, description: "Whether the tour is running" },
          { name: "step", type: "TourStep | null", required: true, description: "Current tour step" },
          { name: "targetRect", type: "TargetRect | null", required: true, description: "Bounding rect of the target element" },
          { name: "currentStep", type: "number", required: true, description: "Current step index" },
          { name: "totalSteps", type: "number", required: true, description: "Total number of steps" },
          { name: "isFirst", type: "boolean", required: true, description: "Whether on first step" },
          { name: "isLast", type: "boolean", required: true, description: "Whether on last step" },
          { name: "onNext", type: "() => void", required: true, description: "Next step callback" },
          { name: "onPrev", type: "() => void", required: true, description: "Previous step callback" },
          { name: "onSkip", type: "() => void", required: true, description: "Skip tour callback" },
          { name: "padding", type: "number", default: "8", description: "Padding around the spotlight target" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h3 className="mt-6 text-lg font-medium">SpotlightStep Props</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Declarative step component — use as children of SpotlightTour or pass steps directly to useTour.
      </p>
      <PropsTable
        props={[
          { name: "target", type: "string", required: true, description: "CSS selector for the target element" },
          { name: "title", type: "string", required: true, description: "Step title" },
          { name: "content", type: "string", required: true, description: "Step description" },
          { name: "placement", type: '"top" | "bottom" | "left" | "right"', description: "Tooltip placement relative to target" },
        ]}
      />

      <h3 className="mt-6 text-lg font-medium">useTour Options</h3>
      <PropsTable
        props={[
          { name: "steps", type: "TourStep[]", required: true, description: "Array of tour steps" },
          { name: "onComplete", type: "() => void", description: "Called when tour finishes" },
          { name: "onSkip", type: "() => void", description: "Called when user skips the tour" },
        ]}
      />

      <h3 className="mt-6 text-lg font-medium">useTour Return Value</h3>
      <PropsTable
        props={[
          { name: "isActive", type: "boolean", description: "Whether the tour is currently running" },
          { name: "currentStep", type: "number", description: "Current step index" },
          { name: "totalSteps", type: "number", description: "Total number of steps" },
          { name: "step", type: "TourStep | null", description: "Current step object" },
          { name: "targetRect", type: "TargetRect | null", description: "Bounding rect of target element" },
          { name: "isFirst", type: "boolean", description: "Whether on the first step" },
          { name: "isLast", type: "boolean", description: "Whether on the last step" },
          { name: "start", type: "() => void", description: "Start the tour" },
          { name: "stop", type: "() => void", description: "Stop the tour without triggering onComplete" },
          { name: "next", type: "() => void", description: "Go to the next step" },
          { name: "prev", type: "() => void", description: "Go to the previous step" },
          { name: "skip", type: "() => void", description: "Skip the tour (triggers onSkip)" },
        ]}
      />

      <h3 className="mt-6 text-lg font-medium">TourStep Type</h3>
      <PropsTable
        props={[
          { name: "target", type: "string", required: true, description: "CSS selector for the target element" },
          { name: "title", type: "string", required: true, description: "Step title" },
          { name: "content", type: "string", required: true, description: "Step description" },
          { name: "placement", type: '"top" | "bottom" | "left" | "right"', description: "Tooltip placement relative to target" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">Tour Built-in Behavior</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-500">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Keyboard navigation</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">→ next step, ← previous step, Esc to skip the tour.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Auto-scroll</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Target elements are smoothly scrolled into view on each step.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Resize tracking</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Spotlight position updates on window resize and scroll via ResizeObserver.</td></tr>
            <tr><td className="px-4 py-2.5 text-neutral-900 dark:text-neutral-100">Spotlight overlay</td><td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">Full-screen overlay with a cutout around the target element using box-shadow.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
