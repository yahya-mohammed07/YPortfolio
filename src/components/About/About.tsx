import { FaGithubAlt } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuBrainCircuit, LuCode, LuSmartphone } from "react-icons/lu";

const HIGHLIGHTS = [
  { icon: <LuBrainCircuit size={15} />, label: "AI / RAG" },
  { icon: <LuCode size={15} />, label: "Web & Backend" },
  { icon: <LuSmartphone size={15} />, label: "Mobile & Desktop" },
];

const About = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-10 pt-16 text-center md:pt-24">
      <p className="animate-fade-in font-Nunito text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
        Software &amp; AI Developer
      </p>

      <h1 className="mt-4 animate-fade-up font-Fredoka text-4xl font-medium leading-tight text-stone-700 md:text-7xl dark:text-stone-100">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-brand-600 to-brand-900 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-600">
          Yahya M. Baqer
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl animate-fade-up font-Roboto text-lg leading-relaxed text-stone-600 md:text-xl dark:text-stone-400">
        Three years building software people actually use — AI assistants and
        RAG pipelines, web and backend services, mobile apps and licensed
        desktop tools. I work across open-source and proprietary projects, and
        I'm still learning something new every week.
      </p>

      <ul className="mt-8 flex list-none flex-wrap justify-center gap-2">
        {HIGHLIGHTS.map(({ icon, label }) => (
          <li key={label} className="chip">
            <span className="text-brand-600 dark:text-brand-400" aria-hidden="true">
              {icon}
            </span>
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#section_project"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-6 py-3 font-Roboto
            text-base font-medium text-brand-50 shadow-sm transition duration-200
            hover:bg-brand-700 hover:shadow-md active:scale-[0.98]
            dark:bg-brand-600 dark:hover:bg-brand-500"
        >
          View my work
        </a>
        <a
          href="mailto:yahyabaqer@proton.me"
          className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white/60 px-6 py-3
            font-Roboto text-base font-medium text-stone-700 transition duration-200
            hover:border-brand-500 hover:text-brand-800
            dark:border-stone-600 dark:bg-stone-800/60 dark:text-stone-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
        >
          <HiOutlineMail size={20} aria-hidden="true" />
          Get in touch
        </a>
        <a
          href="https://github.com/yahya-mohammed07"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white/60 p-3
            text-stone-700 transition duration-200 hover:border-brand-500 hover:text-brand-800
            dark:border-stone-600 dark:bg-stone-800/60 dark:text-stone-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
        >
          <FaGithubAlt size={22} />
        </a>
      </div>

      <p className="mt-8 font-Nunito text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500">
        CV available on request
      </p>
    </div>
  );
};

export default About;
