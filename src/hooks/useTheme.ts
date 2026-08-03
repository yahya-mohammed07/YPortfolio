import { useCallback, useState } from "react";

type Theme = "light" | "dark";

const readTheme = (): Theme => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

/** Reads the theme applied by the pre-paint script in index.html, and toggles it. */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* localStorage blocked — theme just won't persist */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};
