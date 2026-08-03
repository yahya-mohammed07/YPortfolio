import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

/** Floating button that appears once the user has scrolled past the hero. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    // Scroll fires far more often than we need; coalesce to one read per frame
    // so we never force layout mid-scroll.
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setVisible(window.scrollY > 600);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      aria-hidden={!visible}
      title="Back to top"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
      className={`fixed z-40 rounded-full bg-brand-800 p-3 text-brand-50 shadow-lg
        transition-[opacity,transform] duration-300 ease-out hover:bg-brand-700 active:scale-95
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
