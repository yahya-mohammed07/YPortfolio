interface Entry {
  role: string;
  org: string;
  period: string;
  detail: string;
}

const WORK: Entry[] = [
  {
    role: "Full-Stack Developer & Data Analyst",
    org: "Freelance",
    period: "Nov 2023 – Present",
    detail:
      "Operate a VPS (Caddy, systemd, Cloudflare, scripted deploys and backups), maintain client sites, deployed a school records database and built scraping pipelines (11,000+ rows).",
  },
  {
    role: "IT, Full-Stack Developer & Designer",
    org: "Summer Camp, Kirkuk",
    period: "Apr 2026 – Sep 2026",
    detail:
      "Built the website, logo and brand and ran IT operations. Shipped QR attendance and payment desktop apps (Ed25519 licensing, Windows installer) and Shahadaty.",
  },
  {
    role: "IT Manager & Data Analyst",
    org: "Al-Kafaat Private Institute, Kirkuk",
    period: "Mar 2024 – Jan 2026",
    detail:
      "Built and deployed the institute website and a certificate database for 200+ students, plus barcode-scanning attendance.",
  },
];

const EDUCATION: Entry[] = [
  {
    role: "MSc, Computer Science & Information Technology",
    org: "University of Kirkuk",
    period: "Sep 2024 – Present",
    detail: "Research in deep learning for aerial imagery (PyTorch); paper in progress.",
  },
  {
    role: "BSc, Computer Science & Information Technology",
    org: "University of Kirkuk",
    period: "Nov 2019 – Jul 2023",
    detail: "Graduation project: team lead on Medatrix, a medical web application.",
  },
];

const Column = ({ heading, entries }: { heading: string; entries: Entry[] }) => (
  <div>
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{heading}</h3>
    {/* A real sequence, so a timeline rail: newest first */}
    <ol className="mt-5 flex list-none flex-col gap-8 border-l border-slate-200 dark:border-brand-900">
      {entries.map((e) => (
        <li key={`${e.org}-${e.period}`} className="relative pl-7">
          <span
            aria-hidden="true"
            className="absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-ochre-500 bg-slate-50 dark:border-ochre-400 dark:bg-ink"
          />
          <time className="text-sm text-slate-500 dark:text-slate-400">{e.period}</time>
          <h4 className="mt-1 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
            {e.role}
          </h4>
          <p className="font-medium text-brand-700 dark:text-brand-300">{e.org}</p>
          <p className="mt-2 max-w-xl font-light leading-relaxed text-slate-700 dark:text-slate-300">
            {e.detail}
          </p>
        </li>
      ))}
    </ol>
  </div>
);

const Experience = () => (
  <div className="mx-auto mt-8 grid max-w-6xl gap-12 px-4 sm:px-5 lg:grid-cols-[3fr_2fr]">
    <Column heading="Work" entries={WORK} />
    <Column heading="Education" entries={EDUCATION} />
  </div>
);

export default Experience;
