"use client";

import React from "react";

export interface SpotlightStepProps {
  target: string;
  title: string;
  content: string;
  placement?: "top" | "bottom" | "left" | "right";
}

/**
 * SpotlightStep is a configuration component — it does not render anything.
 * Pass it as a child of SpotlightTour or use it to define TourStep objects.
 */
export function SpotlightStep(_props: SpotlightStepProps) {
  return null;
}
