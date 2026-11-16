import React from "react";
import { LuExternalLink, LuGithub, LuLock } from "react-icons/lu";
import type { Project } from "../Projects/projects.data";

interface ProjectCardType extends Project {
  /** The first featured project gets the full row and a wider text measure */
  lead?: boolean;
}

/** Live-site / source / closed-source actions, shared by cards and rows. */
export const ProjectLinks: React.FC<
  Pick<Project, "title" | "hasWebsite" | "websiteLink" | "websiteLabel" | "openSource" | "githubLink"> & {
    compact?: boolean;
  }
> = ({ title, hasWebsite, websiteLink, websiteLabel = "Live site", openSource, githubLink, compact }) => (
  <div className="flex flex-wrap items-center gap-2">
    {hasWebsite && (
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title}: ${websiteLabel}`}
        className={compact ? "btn-secondary btn-sm" : "btn-primary btn-sm"}
      >
        <LuExternalLink size={15} aria-hidden="true" />
        {websiteLabel}
      </a>
    )}
    {openSource && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title}: source code on GitHub`}
        className="btn-secondary btn-sm"
      >
        <LuGithub size={15} aria-hidden="true" />
        Source
      </a>
    )}
    {!openSource && !compact && (
      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <LuLock size={14} aria-hidden="true" />
        Closed source
      </span>
    )}
  </div>
);

const ProjectCard: React.FC<ProjectCardType> = ({ lead = false, ...p }) => {
  return (
    <article
      className={`surface flex h-full flex-col p-6 transition-colors hover:border-brand-300 sm:p-7 dark:hover:border-brand-700
        ${lead ? "md:col-span-2 md:grid md:grid-cols-[1fr_1.3fr] md:gap-x-10" : ""}`}
    >
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3
            className={`font-semibold tracking-tight text-slate-900 dark:text-white ${
              lead ? "text-3xl" : "text-2xl"
            }`}
          >
            {p.title}
          </h3>
          {p.period && (
            <time className="text-sm text-slate-500 dark:text-slate-400">{p.period}</time>
          )}
        </div>

        {p.impact && (
          <p className="mt-4 border-l-2 border-ochre-500 pl-3 font-medium leading-snug text-brand-800 dark:border-ochre-400 dark:text-ochre-300">
            {p.impact}
          </p>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${lead ? "mt-4 md:mt-0" : "mt-4"}`}>
        <p className="flex-1 font-light leading-relaxed text-slate-700 dark:text-slate-300">
          {p.description}
        </p>

        <ul className="mt-5 flex list-none flex-wrap gap-1.5" aria-label="Tech used">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <ProjectLinks {...p} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
