/** @format */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg-primary", "#0a0a0f");
      root.style.setProperty("--bg-section-a", "#0d0f1a");
      root.style.setProperty("--bg-section-b", "#0a0c14");
      root.style.setProperty("--bg-card", "rgba(255,255,255,0.03)");
      root.style.setProperty("--bg-card-hover", "rgba(255,255,255,0.05)");
      root.style.setProperty(
        "--bg-card-active",
        "linear-gradient(135deg,#0b2a1d,#091f16)",
      );
      root.style.setProperty("--accent", "#00ff99");
      root.style.setProperty("--accent-dim", "rgba(0,255,153,0.45)");
      root.style.setProperty("--accent-glow", "rgba(0,255,153,0.25)");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "rgba(255,255,255,0.55)");
      root.style.setProperty("--text-muted", "rgba(255,255,255,0.25)");
      root.style.setProperty("--border", "rgba(255,255,255,0.07)");
      root.style.setProperty("--border-accent", "rgba(0,255,153,0.2)");
      root.style.setProperty("--grid-line", "rgba(0,255,153,0.025)");
      root.style.setProperty("--scrollbar-thumb", "rgba(0,255,153,0.35)");
      root.style.setProperty("--scrollbar-track", "rgba(255,255,255,0.03)");
      root.setAttribute("data-theme", "dark");
    } else {
      root.style.setProperty("--bg-primary", "#f4f4f0");
      root.style.setProperty("--bg-section-a", "#eeeee8");
      root.style.setProperty("--bg-section-b", "#f0f0ea");
      root.style.setProperty("--bg-card", "rgba(0,0,0,0.03)");
      root.style.setProperty("--bg-card-hover", "rgba(0,0,0,0.06)");
      root.style.setProperty(
        "--bg-card-active",
        "linear-gradient(135deg,#d4f5e8,#c8f0e0)",
      );
      root.style.setProperty("--accent", "#009955");
      root.style.setProperty("--accent-dim", "rgba(0,153,85,0.55)");
      root.style.setProperty("--accent-glow", "rgba(0,153,85,0.2)");
      root.style.setProperty("--text-primary", "#0a0a0f");
      root.style.setProperty("--text-secondary", "rgba(10,10,15,0.6)");
      root.style.setProperty("--text-muted", "rgba(10,10,15,0.35)");
      root.style.setProperty("--border", "rgba(0,0,0,0.09)");
      root.style.setProperty("--border-accent", "rgba(0,153,85,0.25)");
      root.style.setProperty("--grid-line", "rgba(0,100,50,0.06)");
      root.style.setProperty("--scrollbar-thumb", "rgba(0,153,85,0.4)");
      root.style.setProperty("--scrollbar-track", "rgba(0,0,0,0.04)");
      root.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
