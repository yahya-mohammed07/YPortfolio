import React, { ReactNode, useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { PiCoffeeLight } from "react-icons/pi";
import { LuMoon, LuSun } from "react-icons/lu";
import useIsNavOpenState, { useThemeState } from "../../states/openState";

const SECTIONS = [
  { id: "section_about", label: "About" },
  { id: "section_skills", label: "Skills" },
  { id: "section_project", label: "Projects" },
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
      className={`relative block rounded-lg px-3 py-2 font-Nunito font-semibold transition-colors
        after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left
        after:rounded-full after:bg-brand-600 after:transition-transform after:duration-200
        hover:text-brand-700 dark:hover:text-brand-400
        ${
          active
            ? "text-brand-800 after:scale-x-100 dark:text-brand-400"
            : "text-stone-600 after:scale-x-0 dark:text-stone-300"
        }`}
    >
      {children}
    </a>
  </li>
);

const CoffeeButton = ({ className = "" }: { className?: string }) => (
  <a
    href={COFFEE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2 text-base font-semibold
      text-brand-50 shadow-sm transition duration-200 hover:bg-brand-600 hover:shadow-md
      active:scale-[0.98] dark:bg-brand-600 dark:hover:bg-brand-500 ${className}`}
  >
    <span>Buy Me A Coffee</span>
    <PiCoffeeLight size={22} aria-hidden="true" />
  </a>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeState();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="rounded-lg border border-stone-200 bg-white/70 p-2 text-stone-600 transition
        hover:border-brand-400 hover:text-brand-700
        dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-300 dark:hover:text-brand-400"
    >
      {isDark ? <LuSun size={20} /> : <LuMoon size={20} />}
    </button>
  );
};

const Navbar = () => {
  const { isNavOpen, setNavOpen } = useIsNavOpenState();
  const active = useActiveSection();

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
  }, [isNavOpen, setNavOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-stone-800/80 dark:bg-ink/80">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3"
      >
        <a
          href="#section_about"
          className="font-Nunito text-2xl font-bold tracking-tight text-stone-800 transition-colors hover:text-brand-700 md:text-3xl dark:text-stone-100 dark:hover:text-brand-400"
        >
          Yahya<span className="text-brand-600">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden list-none items-center gap-1 text-base lg:text-lg md:flex">
          {SECTIONS.map(({ id, label }) => (
            <NavLink key={id} href={`#${id}`} active={active === id}>
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <CoffeeButton />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isNavOpen}
            aria-controls="mobile-menu"
            className="rounded-lg border border-stone-200 bg-white/70 p-2 text-stone-700 transition
              hover:border-brand-400 hover:text-brand-700
              dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-200"
          >
            {isNavOpen ? (
              <MdOutlineClose size={22} />
            ) : (
              <HiOutlineMenuAlt3 size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isNavOpen && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-stone-200/70 bg-stone-50/95 backdrop-blur-md md:hidden dark:border-stone-800 dark:bg-ink/95"
        >
          <ul className="mx-auto flex max-w-7xl list-none flex-col gap-1 px-5 py-4 text-xl">
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
          <div className="px-5 pb-6">
            <CoffeeButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
