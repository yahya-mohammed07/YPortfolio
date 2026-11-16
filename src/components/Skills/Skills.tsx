import SkillSpan from "../Elemets/SkillsSpan";

interface Skill {
  title: string;
  items: string[];
}

const SKILLS: Skill[] = [
  { title: "AI", items: ["RAG", "LLMs", "LangChain", "ChromaDB", "Local models"] },
  { title: "Backend", items: ["FastAPI", "Flask", "CROW", "REST APIs"] },
  { title: "Frontend", items: ["React", "TypeScript", "TailwindCSS"] },
  { title: "Mobile", items: ["Flutter", "Dart", "Android"] },
  { title: "Desktop", items: ["Qt / PySide6", "Python", "C++"] },
  { title: "Databases", items: ["MySQL", "SQLite3", "MongoDB"] },
  { title: "Data scraping", items: ["Python", "Automation", "Parsing"] },
  { title: "Languages", items: ["English", "Arabic", "Turkmen", "Spanish (basic)"] },
];

const Skills = () => (
  <dl className="mx-auto mt-8 grid max-w-6xl px-4 sm:px-5 md:grid-cols-2 md:gap-x-14">
    {SKILLS.map((skill) => (
      <SkillSpan key={skill.title} title={skill.title} items={skill.items} />
    ))}
  </dl>
);

export default Skills;
