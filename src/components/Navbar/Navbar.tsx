import React, { ReactNode, useEffect, useState } from "react";
import { LuCoffee, LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useTheme } from "../../hooks/useTheme";

const SECTIONS = [
  { id: "section_about", label: "About" },
  { id: "section_experience", label: "Experience" },
  { id: "section_project", label: "Projects" },
  { id: "section_skills", label: "Skills" },
  { id: "section_contact", label: "Contact" },
];

const COFFEE_URL = "https://buymeacoffee.com/yahyabaqer";

/** Highlights the nav link matching the section currently in view. */
const useActiveSection = () => {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
};

interface NavLinkType {
  href: string;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkType> = ({ href, active, onClick, children }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`relative block rounded-lg px-3 py-2 font-medium transition-colors
        after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left
        after:rounded-full after:bg-ochre-500 after:transition-transform after:duration-200
        hover:text-brand-700 dark:hover:text-ochre-300
        ${
          active
            ? "text-brand-700 after:scale-x-100 dark:text-white"
            : "text-slate-600 after:scale-x-0 dark:text-slate-300"
        }`}
    >
      {children}
    </a>
  </li>
);

const CoffeeButton = ({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => (
  <a
    href={COFFEE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-secondary btn-sm ${className}`}
  >
    {/* Below xl the full label crowds the nav links out */}
    <span className={compact ? "hidden xl:inline" : ""}>Buy Me A Coffee</span>
    {compact && <span className="xl:hidden">Coffee</span>}
    <LuCoffee size={18} aria-hidden="true" />
  </a>
);

/* Theme state is owned by Navbar and passed in: the desktop and mobile
   toggles are both mounted at once, so separate state would leave the hidden
   one showing a stale icon after a resize. */
const ThemeToggle = ({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="rounded-lg border border-slate-200 bg-white/70 p-2 text-slate-600 transition-colors
        hover:border-brand-400 hover:text-brand-700
        dark:border-brand-800 dark:bg-transparent dark:text-slate-300 dark:hover:border-ochre-400 dark:hover:text-ochre-300"
    >
      {isDark ? <LuSun size={20} /> : <LuMoon size={20} />}
    </button>
  );
};

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection();
  const isDark = theme === "dark";

  // Lock background scroll and allow Escape to close while the drawer is open
  useEffect(() => {
    if (!isNavOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-md dark:border-brand-900 dark:bg-ink/85">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-5"
      >
        <a
          href="#section_about"
          className=" text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-brand-700 md:text-2xl dark:text-white dark:hover:text-ochre-300"
        >
          Yahya<span className="text-ochre-500">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden list-none items-center gap-1 text-sm md:flex lg:text-base">
          {SECTIONS.map(({ id, label }) => (
            <NavLink key={id} href={`#${id}`} active={active === id}>
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <CoffeeButton compact />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isNavOpen}
            aria-controls="mobile-menu"
            className="rounded-lg border border-slate-200 bg-white/70 p-2 text-slate-700 transition-colors
              hover:border-brand-400 hover:text-brand-700
              dark:border-brand-800 dark:bg-transparent dark:text-slate-200"
          >
            {isNavOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isNavOpen && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-slate-200/70 bg-slate-50/95 md:hidden dark:border-brand-900 dark:bg-ink/95"
        >
          <ul className="mx-auto flex max-w-6xl list-none flex-col gap-1 px-4 py-4 text-xl sm:px-5">
            {SECTIONS.map(({ id, label }) => (
              <NavLink
                key={id}
                href={`#${id}`}
                active={active === id}
                onClick={closeNav}
              >
                {label}
              </NavLink>
            ))}
          </ul>
          <div className="px-4 pb-6 sm:px-5">
            <CoffeeButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
