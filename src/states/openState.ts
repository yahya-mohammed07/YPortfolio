import { create } from "zustand";

interface openType {
  isNavOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

const useIsNavOpenState = create<openType>((set) => ({
  isNavOpen: false,
  setNavOpen: (value: boolean) => set({ isNavOpen: value }),
}));

export default useIsNavOpenState;

type Theme = "light" | "dark";

interface themeType {
  theme: Theme;
  toggleTheme: () => void;
}

const readTheme = (): Theme => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* localStorage blocked — theme just won't persist */
  }
};

// Initial value comes from the pre-paint script in index.html
export const useThemeState = create<themeType>((set, get) => ({
  theme: readTheme(),
  toggleTheme: () => {
    const next: Theme = get().theme === "dark" ? "light" : "dark";
    applyTheme(next);
    set({ theme: next });
  },
}));
