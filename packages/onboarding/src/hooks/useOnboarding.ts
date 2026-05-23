"use client";

import { useState, useCallback } from "react";

export interface UseOnboardingOptions {
  totalSteps: number;
  initialStep?: number;
  onComplete?: () => void;
  onSkip?: () => void;
}

export function useOnboarding(options: UseOnboardingOptions) {
  const { totalSteps, initialStep = 0, onComplete, onSkip } = options;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isComplete, setIsComplete] = useState(false);

  const next = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentStep, totalSteps, onComplete]);

  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const goTo = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps]
  );

  const skip = useCallback(() => {
    setIsComplete(true);
    onSkip?.();
  }, [onSkip]);

  const reset = useCallback(() => {
    setCurrentStep(initialStep);
    setIsComplete(false);
  }, [initialStep]);

  return {
    currentStep,
    totalSteps,
    isFirst: currentStep === 0,
    isLast: currentStep === totalSteps - 1,
    isComplete,
    next,
    prev,
    goTo,
    skip,
    reset,
  };
}
