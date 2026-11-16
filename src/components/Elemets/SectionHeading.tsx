import React from "react";

interface SectionHeadingType {
  title: string;
  subtitle?: string;
  id?: string;
}

/** Left-aligned on the same column as the content below it. */
const SectionHeading: React.FC<SectionHeadingType> = ({ title, subtitle, id }) => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-5">
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base font-light text-slate-600 sm:text-lg dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
