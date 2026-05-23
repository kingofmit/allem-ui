"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export interface TourStep {
  target: string;
  title: string;
  content: string;
  placement?: "top" | "bottom" | "left" | "right";
}

export interface UseTourOptions {
  steps: TourStep[];
  onComplete?: () => void;
  onSkip?: () => void;
}

export interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function useTour(options: UseTourOptions) {
  const { steps, onComplete, onSkip } = options;
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const updateTargetRect = useCallback(() => {
    if (!isActive || !steps[currentStep]) return;
    const el = document.querySelector(steps[currentStep].target);
    if (el) {
      const rect = el.getBoundingClientRect();
      setTargetRect({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    } else {
      setTargetRect(null);
    }
  }, [isActive, currentStep, steps]);

  // Track target element position
  useEffect(() => {
    if (!isActive) return;
    updateTargetRect();

    const handleResize = () => updateTargetRect();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);

    const el = document.querySelector(steps[currentStep]?.target);
    if (el) {
      observerRef.current = new ResizeObserver(updateTargetRect);
      observerRef.current.observe(el);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
      observerRef.current?.disconnect();
    };
  }, [isActive, currentStep, steps, updateTargetRect]);

  const start = useCallback(() => {
    setCurrentStep(0);
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
    setTargetRect(null);
  }, []);

  const next = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      const nextEl = document.querySelector(steps[currentStep + 1]?.target);
      nextEl?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      stop();
      onComplete?.();
    }
  }, [currentStep, steps, stop, onComplete]);

  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      const prevEl = document.querySelector(steps[currentStep - 1]?.target);
      prevEl?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentStep, steps]);

  const skipTour = useCallback(() => {
    stop();
    onSkip?.();
  }, [stop, onSkip]);

  // Keyboard navigation
  useEffect(() => {
    if (!isActive) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") skipTour();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, next, prev, skipTour]);

  return {
    isActive,
    currentStep,
    totalSteps: steps.length,
    step: steps[currentStep] || null,
    targetRect,
    isFirst: currentStep === 0,
    isLast: currentStep === steps.length - 1,
    start,
    stop,
    next,
    prev,
    skip: skipTour,
  };
}
