import { ReactNode } from "react";
import {
  LuBrainCircuit,
  LuDatabase,
  LuLayoutDashboard,
  LuMonitor,
  LuServer,
  LuSmartphone,
  LuFileSearch,
  LuLanguages,
} from "react-icons/lu";
import SkillSpan from "../Elemets/SkillsSpan";
import Reveal from "../Elemets/Reveal";

interface Skill {
  title: string;
  icon: ReactNode;
  items: string[];
}

const SKILLS: Skill[] = [
  {
    title: "AI",
    icon: <LuBrainCircuit size={20} />,
    items: ["RAG", "LLMs", "LangChain", "ChromaDB", "Local models"],
  },
  {
    title: "Backend",
    icon: <LuServer size={20} />,
    items: ["FastAPI", "Flask", "CROW", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: <LuLayoutDashboard size={20} />,
    items: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Mobile",
    icon: <LuSmartphone size={20} />,
    items: ["Flutter", "Dart", "Android"],
  },
  {
    title: "Desktop",
    icon: <LuMonitor size={20} />,
    items: ["Qt / PySide6", "Python", "C++"],
  },
  {
    title: "Databases",
    icon: <LuDatabase size={20} />,
    items: ["MySQL", "SQLite3", "MongoDB"],
  },
  {
    title: "Data Scraping",
    icon: <LuFileSearch size={20} />,
    items: ["Python", "Automation", "Parsing"],
  },
  {
    title: "Languages",
    icon: <LuLanguages size={20} />,
    items: ["English", "Arabic", "Turkmen", "Spanish (basic)"],
  },
];

const Skills = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-5 md:grid-cols-3 lg:grid-cols-4">
      {SKILLS.map((skill, i) => (
        <Reveal key={skill.title} delay={(i % 4) * 60} className="h-full">
          <SkillSpan icon={skill.icon} items={skill.items}>
            {skill.title}
          </SkillSpan>
        </Reveal>
      ))}
    </div>
  );
};

export default Skills;
