"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import themeConfig from "./theme.json";
import { THEME_KEY } from "@/utils/constant";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  colors: any;
  images: any;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage or browser default
  useEffect(() => {
    setMounted(true);
    let savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null;

    if (!savedTheme) {
      // first visit → check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      savedTheme = prefersDark ? "dark" : "light";
      localStorage.setItem(THEME_KEY, savedTheme);
    }

    setMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newMode: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem(THEME_KEY, newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    console.log(
      "Theme toggled to:",
      newMode,
      "Dark class applied:",
      document.documentElement.classList.contains("dark")
    );
  };

  const colors = themeConfig[mode].colors;
  const images = themeConfig[mode].images;

  const value: ThemeContextType = {
    mode,
    colors,
    images,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className="dark:bg-[#0A0F0D] bg-[#FAFAFA] h-full w-full">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
