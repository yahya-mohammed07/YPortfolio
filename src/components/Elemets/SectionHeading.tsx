import React from "react";

interface SectionHeadingType {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingType> = ({ title, subtitle, id }) => {
  return (
    <div className="mx-auto max-w-2xl px-5 text-center">
      <h2
        id={id}
        className="font-Roboto text-3xl font-semibold tracking-tight text-stone-800 md:text-4xl dark:text-stone-100"
      >
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-brand-500 to-brand-800"
      />
      {subtitle && (
        <p className="mt-4 font-Fredoka text-base text-stone-500 dark:text-stone-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
