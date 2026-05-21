import { colors } from "./colors";

export const allemPreset = {
  theme: {
    extend: {
      colors: {
        allem: colors,
      },
      borderRadius: {
        allem: "0.625rem",
      },
      fontFamily: {
        allem: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "allem-spin": "spin 0.6s linear infinite",
        "allem-pulse": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "allem-fade-in": "allemFadeIn 0.2s ease-out",
        "allem-slide-up": "allemSlideUp 0.2s ease-out",
        "allem-bounce": "allemBounce 1.4s infinite ease-in-out",
        "allem-scale-in": "allemScaleIn 0.2s ease-out",
        "allem-slide-left": "allemSlideLeft 0.2s ease-out",
        "allem-slide-right": "allemSlideRight 0.2s ease-out",
      },
      keyframes: {
        allemFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        allemSlideUp: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        allemBounce: {
          "0%, 80%, 100%": { transform: "scale(0)" },
          "40%": { transform: "scale(1)" },
        },
        allemScaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        allemSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        allemSlideRight: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
};

export { colors };
