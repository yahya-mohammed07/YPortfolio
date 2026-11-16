import { LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";
import { PROJECTS } from "../Projects/projects.data";

const CVS = [
  { label: "Full-Stack", href: "/cv/Yahya-Baqer-CV-Full-Stack.pdf" },
  { label: "Flutter / Mobile", href: "/cv/Yahya-Baqer-CV-Flutter-Mobile.pdf" },
  { label: "ML Engineer", href: "/cv/Yahya-Baqer-CV-ML-Engineer.pdf" },
];

/* Derived from the project data so it can't go stale. Sub-projects such as
   "Shahadaty Backend" fold into their parent's name. */
const ongoing = PROJECTS.filter((p) => p.period?.includes("Present")).map((p) => p.title);
const NOW = ongoing.filter((t) => !ongoing.some((o) => o !== t && t.startsWith(`${o} `)));

const listFormat = (items: string[]) =>
  items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-5 sm:pt-20 md:pt-28">
      <div className="max-w-3xl">
        <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
          Software and AI developer in Kirkuk, Iraq
        </p>

        <h1 className="mt-2 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white">
          Yahya M. Baqer
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-slate-700 dark:text-slate-300">
          I build AI assistants and RAG pipelines, web backends, Flutter apps and
          licensed Windows desktop tools, most of them in Arabic and Kurdish for
          users here in Iraq.
          {NOW.length > 0 && <> Right now I'm working on {listFormat(NOW)}.</>}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#section_project" className="btn-primary">
            See projects
          </a>
          <a href="mailto:yahyabaqer@proton.me" className="btn-secondary">
            Email me
          </a>
          <a
            href="https://github.com/yahya-mohammed07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="btn-secondary px-3"
          >
            <LuGithub size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/yahyabaqer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="btn-secondary px-3"
          >
            <LuLinkedin size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <LuDownload size={16} aria-hidden="true" />
            Download CV for
          </span>
          {CVS.map((cv) => (
            <a key={cv.href} href={cv.href} download className="text-link">
              {cv.label}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
