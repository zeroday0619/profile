import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "theme-change";
let currentTheme: Theme = "light";
const fontFamilyBase = '"Segoe UI Variable", "Segoe UI", "Pretendard", system-ui, sans-serif';
const lightTheme = { ...webLightTheme, fontFamilyBase };
const darkTheme = { ...webDarkTheme, fontFamilyBase };

const getThemeSnapshot = (): Theme => {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    currentTheme = storedTheme === "dark" || storedTheme === "oneui-dark" ? "dark" : "light";
  } catch {
    // The in-memory value keeps theme switching usable when storage is unavailable.
  }
  return currentTheme;
};

const getServerThemeSnapshot = (): Theme => "light";
const subscribeToTheme = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    currentTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    } catch {
      // The document theme remains authoritative when storage is unavailable.
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FluentProvider theme={theme === "dark" ? darkTheme : lightTheme} className="site-fluent-provider">
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
