export type Category = "Web" | "Mobile" | "Desktop" | "Backend" | "AI";

export const CATEGORIES: Category[] = ["Web", "Mobile", "Desktop", "Backend", "AI"];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  hasWebsite: boolean;
  websiteLink: string;
  websiteLabel?: string;
  openSource: boolean;
  githubLink: string;
  featured?: boolean;
  /** Filter chips this project shows under (open source is derived) */
  categories?: Category[];
  /** When it was built, e.g. "Sep 2026 – Present" */
  period?: string;
  /** One verifiable fact that sets the project apart */
  impact?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Meehat",
    description:
      "Interactive classroom activities and live class games for Iraq, a Wordwall and Kahoot alternative. Teachers run PIN-based live games with team mode and a summit race while students answer on their phones. The UI is Arabic, Kurdish (Sorani) and English with full right-to-left support.",
    tech: ["React (Ts)", "Vite", "PocketBase", "RTL i18n"],
    hasWebsite: true,
    websiteLink: "https://meehat.win",
    websiteLabel: "Live site",
    openSource: false,
    githubLink: "",
    featured: true,
    categories: ["Web"],
    period: "Sep 2026 – Present",
    impact:
      "31 activity templates, PIN-based live games, offline play and 39 automated server checks.",
  },
  {
    title: "Sadis Plus",
    description:
      "An offline exam-prep app for Iraqi 6th preparatory students: ministerial exams answered with an interactive quiz engine, a predictions tab that finds questions repeated across years, a focus timer, mock exams and a gamified XP journey. Content ships as encrypted assets and unlocks with a one-time per-student license.",
    tech: ["Flutter", "Dart", "Offline-first", "Encrypted content"],
    hasWebsite: true,
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.yahyadapps.sadisplus",
    websiteLabel: "Google Play",
    openSource: false,
    githubLink: "",
    categories: ["Mobile"],
    period: "Jul 2026 – Present",
    impact:
      "AES-256 encrypted content in three access tiers, enforced by keys rather than UI checks.",
  },
  {
    title: "Shahadaty",
    description:
      "A multi-tenant certificate platform: import a roster from Excel or CSV, issue a whole batch from a themed SVG template, and export print-ready PDF, PNG or ZIP entirely in the browser. Every certificate carries a QR code to its own public verification page, and Arabic names can be transliterated from a 77k-name lookup table.",
    tech: [
      "React 19 (Ts)",
      "TailwindCSS",
      "PocketBase",
      "Cloudflare Workers",
      "SVG & PDF",
    ],
    hasWebsite: true,
    websiteLink: "https://shahadaty.com",
    websiteLabel: "Live site",
    openSource: false,
    githubLink: "",
    featured: true,
    categories: ["Web"],
    period: "Aug 2026 – Present",
    impact:
      "Locked-down signup, per-visitor rate limits and versioned migrations.",
  },
  {
    title: "Shahadaty Backend",
    description:
      "The API and database behind Shahadaty: PocketBase with per-org access rules, JSVM hooks for quotas and role locking, and versioned schema migrations. Runs as a hardened systemd service on a VPS with its own Let's Encrypt certificates, Docker and Fly.io deploy paths kept alongside.",
    tech: ["PocketBase", "JavaScript (JSVM)", "SQLite", "Docker", "systemd"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
    featured: true,
    categories: ["Backend"],
    period: "Aug 2026 – Present",
  },
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
    categories: ["Mobile"],
    period: "Jun 2026 – Jul 2026",
    impact:
      "Released through v0.1.7 (17 builds) on Google Play.",
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
    categories: ["AI"],
  },
  {
    title: "MyTime",
    description:
      "A Windows desktop tracker for TV shows: the library lives in an embedded redb database, show data comes from TMDB, and new episodes arrive as native toast notifications with action buttons. Runs at startup with light and dark themes.",
    tech: ["Rust", "redb", "TMDB API", "Windows"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
    categories: ["Desktop"],
  },
  {
    title: "Hawel",
    description:
      "A smart calculator with an Iraqi unit converter, localized for Arabic and English.",
    tech: ["Flutter", "Dart"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
    categories: ["Mobile"],
  },
  {
    title: "MiniMax Limited",
    description:
      "The landing page for a software studio building AI, web, mobile and desktop applications, sharing this portfolio's design system with its own brand palette and dark mode.",
    tech: ["React (Ts)", "TailwindCSS", "Vite"],
    hasWebsite: false,
    websiteLink: "",
    openSource: false,
    githubLink: "",
    categories: ["Web"],
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
    categories: ["Web"],
    period: "Mar 2024 – Jan 2026",
    impact:
      "Built alongside a certificate database for 200+ students and barcode attendance.",
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
    categories: ["Web", "Backend"],
    period: "Jan 2024 – Mar 2024",
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
    categories: ["Desktop"],
    period: "Apr 2026 – Sep 2026",
    impact:
      "Ships as a Windows installer with Ed25519 licensing.",
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
    categories: ["Backend"],
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
    categories: ["Desktop"],
    period: "Apr 2026 – Sep 2026",
    impact:
      "Ships as a Windows installer with Ed25519 licensing.",
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
    categories: ["AI", "Web"],
  },
  {
    title: "YPortfolio",
    description: "You're looking at it :>)",
    tech: ["React (Ts)", "TailwindCSS", "Vite"],
    hasWebsite: false,
    websiteLink: "",
    openSource: true,
    githubLink: "https://github.com/yahya-mohammed07/portfolio",
    categories: ["Web"],
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
