import ProjectCard from "../Elemets/ProjectCard";
import Reveal from "../Elemets/Reveal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  hasWebsite: boolean;
  websiteLink: string;
  websiteLabel?: string;
  openSource: boolean;
  githubLink: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Focus Timer",
    description:
      "A focus timer app on Google Play with presets, session history, a floating overlay bubble, local notifications and custom sound effects.",
    tech: ["Flutter", "Dart", "SQLite", "Android"],
    hasWebsite: true,
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.focus_timer.yahyaapps",
    websiteLabel: "Google Play",
    openSource: false,
    githubLink: "",
    featured: true,
  },
  {
    title: "RAG Assistant",
    description:
      "A retrieval-augmented generation assistant that answers questions over your own PDFs with inline source citations, running fully local LLMs.",
    tech: ["Python", "LangChain", "ChromaDB", "Flask", "LLM"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
    featured: true,
  },
  {
    title: "Al-Kfaat For Private Tutoring",
    description:
      "A website for a private educational institute, covering courses, teachers and student enrollment.",
    tech: ["React (Ts)", "TailwindCSS", "Framer Motion", "Database"],
    hasWebsite: true,
    websiteLink: "https://al-kfaat.netlify.app",
    openSource: false,
    githubLink: "",
  },
  {
    title: "Wellix",
    description:
      "A medical website that provides a minimal user interface and user experience to use extremely useful medical tools.",
    tech: ["React (Ts)", "FastAPI (Python)", "TailwindCSS"],
    hasWebsite: true,
    websiteLink: "https://wellix.onrender.com/",
    openSource: false,
    githubLink: "",
  },
  {
    title: "Summer Camp Payment",
    description:
      "A licensed desktop app that manages student payments across multiple camp locations, with Excel & PDF reporting and offline-first local databases.",
    tech: ["Python", "PySide6 (Qt)", "SQLite"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
  },
  {
    title: "License Server",
    description:
      "The licensing backend for my desktop apps: Ed25519-signed license keys, activation and expiry, rate limiting and an admin API.",
    tech: ["FastAPI (Python)", "PyNaCl", "libSQL", "Render"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
  },
  {
    title: "Student QR Attendance",
    description:
      "A desktop app that generates student QR badges and takes attendance by camera scan, with Arabic name support and CSV exports per group.",
    tech: ["Python", "PySide6 (Qt)", "OpenCV", "SQLite"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
  },
  {
    title: "Kraken",
    description:
      "An open-source modern math library that comes with a fast-fixed matrix class and math-related functions.",
    tech: ["C++20", "CMake", "Math"],
    hasWebsite: false,
    websiteLink: "",
    openSource: true,
    githubLink: "https://github.com/yahya-mohammed07/Kraken",
  },
  {
    title: "Iris",
    description:
      "A little medical chat-bot I used as an additional tool in our graduation project.",
    tech: ["Flask", "C++", "Jinja", "HTML & CSS & JS", "ML"],
    hasWebsite: false,
    websiteLink: "",
    openSource: true,
    githubLink: "https://github.com/yahya-mohammed07/Iris",
  },
  {
    title: "YPortfolio",
    description: "You're looking at it :>)",
    tech: ["React (Ts)", "TailwindCSS", "Vite"],
    hasWebsite: false,
    websiteLink: "",
    openSource: true,
    githubLink: "https://github.com/yahya-mohammed07/portfolio",
  },
  {
    title: "SpaceInvaderS",
    description:
      "A little game I made at the beginning of my programming journey. Gonna optimize it one day.",
    tech: ["C++", "SFML"],
    hasWebsite: false,
    websiteLink: "",
    openSource: true,
    githubLink: "https://github.com/yahya-mohammed07/SpaceInvaderS",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, i) => (
        <Reveal key={project.title} delay={(i % 3) * 80} className="h-full">
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
