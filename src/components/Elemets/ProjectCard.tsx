import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

interface ProjectCardType {
  openSource: boolean;
  hasWebsite: boolean;
  githubLink: string;
  websiteLink: string;
  /** Label for the external link button, e.g. "Google Play" or "Live site" */
  websiteLabel?: string;
  description: string;
  tech: string[];
  title: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardType> = ({
  hasWebsite,
  openSource,
  githubLink,
  websiteLink,
  websiteLabel = "Live site",
  description,
  tech,
  title,
  featured = false,
}) => {
  return (
    <article
      className={`surface group flex h-full flex-col overflow-hidden p-6 text-left transition duration-200
        hover:-translate-y-1 hover:shadow-lg
        ${
          featured
            ? "border-brand-300 ring-1 ring-brand-200 dark:border-brand-800 dark:ring-brand-900"
            : "hover:border-brand-300 dark:hover:border-brand-700"
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-Nunito text-xl font-bold text-brand-900 md:text-2xl dark:text-brand-400">
          {title}
        </h3>
        {featured && (
          <span className="shrink-0 rounded-full bg-brand-100 px-2.5 py-1 font-Nunito text-[0.7rem] font-bold uppercase tracking-wide text-brand-800 dark:bg-brand-950 dark:text-brand-400">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 font-Fredoka text-[0.95rem] leading-relaxed text-stone-600 dark:text-stone-400">
        {description}
      </p>

      <ul className="mt-5 flex list-none flex-wrap gap-1.5">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      {(hasWebsite || openSource) && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-200/70 pt-4 dark:border-stone-700/70">
          {hasWebsite && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — ${websiteLabel}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-800 px-3 py-2 font-Roboto text-sm
                font-medium text-brand-50 transition hover:bg-brand-700 active:scale-[0.98]
                dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              <LuExternalLink size={16} aria-hidden="true" />
              {websiteLabel}
            </a>
          )}
          {openSource && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — source code on GitHub`}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 px-3 py-2
                font-Roboto text-sm font-medium text-stone-700 transition
                hover:border-brand-500 hover:text-brand-800 active:scale-[0.98]
                dark:border-stone-600 dark:text-stone-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              <FaGithub size={16} aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
