import React, { ReactNode } from "react";

interface SkillSpanType {
  children: ReactNode;
  icon?: ReactNode;
  items?: string[];
}

const SkillSpan: React.FC<SkillSpanType> = ({ children, icon, items }) => {
  return (
    <div className="surface card-lift group h-full p-5 text-left hover:border-brand-300 hover:shadow-md dark:hover:border-brand-700">
      <div className="flex items-center gap-3">
        {icon && (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800 transition-colors group-hover:bg-brand-200 dark:bg-brand-950 dark:text-brand-400"
          >
            {icon}
          </span>
        )}
        <h3 className="font-Fredoka text-lg font-medium text-stone-800 md:text-xl dark:text-stone-100">
          {children}
        </h3>
      </div>

      {items && items.length > 0 && (
        <ul className="mt-4 flex list-none flex-wrap gap-1.5">
          {items.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillSpan;
