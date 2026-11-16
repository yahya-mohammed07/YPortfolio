import { useState } from "react";
import ProjectCard from "../Elemets/ProjectCard";
import Reveal from "../Elemets/Reveal";
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

  return (
    <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <div
        role="group"
        aria-label="Filter projects"
        className="mb-6 flex flex-wrap justify-center gap-2"
      >
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 font-Nunito text-sm font-semibold transition-colors
                ${
                  active
                    ? "border-brand-800 bg-brand-800 text-brand-50 dark:border-brand-600 dark:bg-brand-600"
                    : "border-stone-300 bg-white/60 text-stone-600 hover:border-brand-500 hover:text-brand-800 dark:border-stone-600 dark:bg-stone-800/60 dark:text-stone-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 80} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
