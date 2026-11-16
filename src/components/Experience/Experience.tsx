import Reveal from "../Elemets/Reveal";

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
    <h3 className="font-Nunito text-sm font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">
      {heading}
    </h3>
    <ol className="mt-4 flex list-none flex-col gap-4">
      {entries.map((e) => (
        <li key={`${e.org}-${e.period}`} className="surface p-5 text-left">
          <p className="font-Nunito text-xs font-semibold text-stone-500 dark:text-stone-400">
            {e.period}
          </p>
          <h4 className="mt-1 font-Nunito text-lg font-bold text-brand-900 dark:text-brand-400">
            {e.role}
          </h4>
          <p className="font-Nunito text-sm font-semibold text-stone-600 dark:text-stone-300">
            {e.org}
          </p>
          <p className="mt-2 font-Fredoka text-[0.95rem] leading-relaxed text-stone-600 dark:text-stone-400">
            {e.detail}
          </p>
        </li>
      ))}
    </ol>
  </div>
);

const Experience = () => (
  <Reveal>
    <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 sm:px-5 lg:grid-cols-[3fr_2fr]">
      <Column heading="Work" entries={WORK} />
      <Column heading="Education" entries={EDUCATION} />
    </div>
  </Reveal>
);

export default Experience;
