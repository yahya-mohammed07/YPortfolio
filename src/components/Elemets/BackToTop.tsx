import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

/** Floating button that appears once the user has scrolled past the hero. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-brand-800 p-3 text-brand-50 shadow-lg
        transition-all duration-300 hover:bg-brand-700 active:scale-95
        dark:bg-brand-600 dark:hover:bg-brand-500
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
    >
      <LuArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
