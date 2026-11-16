import { useState } from "react";
import { LuLock } from "react-icons/lu";
import ProjectCard, { ProjectLinks } from "../Elemets/ProjectCard";
import { CATEGORIES, PROJECTS } from "./projects.data";

const SITE = "https://yahyabaqer.netlify.app/";

type Filter = "All" | (typeof CATEGORIES)[number] | "Open source";

const FILTERS: Filter[] = ["All", ...CATEGORIES, "Open source"];

/** Structured data so search engines can list each project as a rich result. */
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Yahya M. Baqer",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.title,
      description: p.description,
      applicationCategory: "DeveloperApplication",
      keywords: p.tech.join(", "),
      url: p.websiteLink || p.githubLink || `${SITE}#section_project`,
      author: { "@type": "Person", name: "Yahya M. Baqer", url: SITE },
    },
  })),
};

const matches = (filter: Filter, p: (typeof PROJECTS)[number]) =>
  filter === "All" ||
  (filter === "Open source" ? p.openSource : p.categories?.includes(filter));

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = PROJECTS.filter((p) => matches(filter, p));
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1 text-sm transition-colors
                ${
                  active
                    ? "border-brand-600 bg-brand-600 text-white dark:border-ochre-400 dark:bg-ochre-400 dark:text-ink"
                    : "border-slate-300 text-slate-700 hover:border-brand-600 hover:text-brand-700 dark:border-brand-800 dark:text-slate-300 dark:hover:border-ochre-400 dark:hover:text-ochre-300"
                }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        Showing {visible.length} of {PROJECTS.length} projects
      </p>

      {featured.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} {...project} lead={i === 0} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          {featured.length > 0 && (
            <h3 className="mt-14 text-xl font-semibold text-slate-900 dark:text-white">
              More projects
            </h3>
          )}
          <ul className="mt-4 list-none border-t border-slate-200 dark:border-brand-900">
            {rest.map((p) => (
              <li
                key={p.title}
                className="grid gap-x-8 gap-y-2 border-b border-slate-200 py-5 md:grid-cols-[13rem_1fr_auto] dark:border-brand-900"
              >
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h4>
                  {p.period && (
                    <time className="text-sm text-slate-500 dark:text-slate-400">{p.period}</time>
                  )}
                </div>
                <div>
                  <p className="max-w-2xl font-light leading-relaxed text-slate-700 dark:text-slate-300">
                    {p.description}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {p.tech.join(", ")}
                  </p>
                </div>
                <div className="md:pt-0.5">
                  {p.hasWebsite || p.openSource ? (
                    <ProjectLinks {...p} compact />
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                      <LuLock size={14} aria-hidden="true" />
                      Closed source
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Projects;
