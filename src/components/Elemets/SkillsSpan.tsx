import React from "react";

interface SkillSpanType {
  title: string;
  items: string[];
}

/** One row of a definition list: category on the left, plain-text items on the right. */
const SkillSpan: React.FC<SkillSpanType> = ({ title, items }) => (
  <div className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-4 dark:border-brand-900">
    <dt className="font-medium text-brand-700 dark:text-ochre-300">{title}</dt>
    <dd className="font-light text-slate-700 dark:text-slate-300">{items.join(", ")}</dd>
  </div>
);

export default SkillSpan;
