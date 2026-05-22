import { createContext, useContext, useCallback } from "react";
import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import type { ReactNode } from "react";

export type ColorScheme = "light" | "dark";
export type ColorSchemePreference = "light" | "dark" | "system";

interface ThemeContextValue {
  /** Current resolved color scheme ("light" or "dark") */
  colorScheme: ColorScheme;
  /** Set color scheme to "light", "dark", or "system" */
  setColorScheme: (scheme: ColorSchemePreference) => void;
  /** Toggle between light and dark */
  toggleColorScheme: () => void;
  /** Whether the current scheme is dark */
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: ReactNode;
  /** Initial color scheme. Defaults to "system". */
  defaultScheme?: ColorSchemePreference;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativeWindColorScheme();

  const handleSetColorScheme = useCallback(
    (scheme: ColorSchemePreference) => {
      setColorScheme(scheme);
    },
    [setColorScheme],
  );

  const handleToggle = useCallback(() => {
    toggleColorScheme();
  }, [toggleColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme: colorScheme ?? "light",
        setColorScheme: handleSetColorScheme,
        toggleColorScheme: handleToggle,
        isDark: colorScheme === "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Access the current theme. Must be used within a ThemeProvider.
 *
 * @example
 * ```tsx
 * const { colorScheme, toggleColorScheme, isDark } = useTheme();
 * ```
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
