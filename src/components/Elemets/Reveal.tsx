import React, { useEffect, useRef, useState } from "react";

interface RevealType {
  children: React.ReactNode;
  /** Stagger in ms, useful when revealing a grid of cards */
  delay?: number;
  className?: string;
}

/* One observer for every Reveal on the page instead of one each — the browser
   only has to track a single set of targets. */
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  return observer;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades content up the first time it scrolls into view. */
const Reveal: React.FC<RevealType> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Skip the observer entirely when animation is off or unsupported.
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined" || prefersReducedMotion()
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const io = getObserver();
    callbacks.set(node, () => setShown(true));
    io.observe(node);

    return () => {
      callbacks.delete(node);
      io.unobserve(node);
    };
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
