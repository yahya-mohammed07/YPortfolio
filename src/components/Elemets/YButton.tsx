import React from "react";

interface YButtonType {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-Roboto text-base font-medium " +
  "transition duration-200 active:scale-[0.98]";

const variants = {
  solid:
    "bg-brand-800 text-brand-50 shadow-sm hover:bg-brand-700 hover:shadow-md " +
    "dark:bg-brand-600 dark:hover:bg-brand-500",
  outline:
    "border border-stone-300 bg-white/60 text-stone-700 hover:border-brand-500 hover:text-brand-800 " +
    "dark:border-stone-600 dark:bg-stone-800/60 dark:text-stone-200 dark:hover:border-brand-400 dark:hover:text-brand-300",
};

const YButton: React.FC<YButtonType> = ({
  children,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default YButton;
