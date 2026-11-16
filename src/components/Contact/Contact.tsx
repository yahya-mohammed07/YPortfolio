import { useEffect, useRef, useState } from "react";
import { LuCheck, LuCopy, LuGithub, LuLinkedin } from "react-icons/lu";

const EMAIL = "yahyabaqer@proton.me";

type Status = "" | "copied" | "failed";

// The EmailJS contact form lives in git history — currently a direct
// mailto + copy-to-clipboard is enough.
export default function Contact() {
  const [status, setStatus] = useState<Status>("");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const flash = (next: Status) => {
    setStatus(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus(""), 2000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      flash("copied");
    } catch {
      flash("failed");
    }
  };

  const copied = status === "copied";

  return (
    <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-5">
      <p className="max-w-xl text-lg font-light text-slate-700 dark:text-slate-300">
        For work, a project, or a question about something here, email is the
        fastest way to reach me.
      </p>

      {/* The address itself is the call to action, set large so it reads at a glance */}
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${EMAIL}`}
          className="break-all text-3xl font-semibold tracking-tight text-brand-700 underline decoration-ochre-500 decoration-2 underline-offset-[0.2em] transition-colors hover:text-brand-900 sm:text-4xl md:text-5xl dark:text-white dark:decoration-ochre-400 dark:hover:text-ochre-300"
        >
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="btn-secondary btn-sm"
        >
          {copied ? <LuCheck size={16} aria-hidden="true" /> : <LuCopy size={16} aria-hidden="true" />}
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-[1.25rem] text-sm ${
          status === "failed" ? "text-red-700 dark:text-red-400" : "sr-only"
        }`}
      >
        {status === "copied" && "Email address copied"}
        {status === "failed" && "Copy failed. Select the address above and copy it manually."}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400">
        <a
          href="https://github.com/yahya-mohammed07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex items-center gap-2"
        >
          <LuGithub size={18} aria-hidden="true" />
          github.com/yahya-mohammed07
        </a>
        <a
          href="https://www.linkedin.com/in/yahyabaqer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex items-center gap-2"
        >
          <LuLinkedin size={18} aria-hidden="true" />
          linkedin.com/in/yahyabaqer
        </a>
      </div>
    </div>
  );
}
