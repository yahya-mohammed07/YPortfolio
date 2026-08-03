import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { LuCheck, LuCopy, LuMail } from "react-icons/lu";

const EMAIL = "yahyabaqer@proton.me";

// The EmailJS contact form lives in git history — currently a direct
// mailto + copy-to-clipboard is enough.
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually");
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-xl px-5">
      <div className="surface p-8 text-center">
        <p className="font-Fredoka text-lg text-stone-600 dark:text-stone-400">
          Got a project in mind, or just want to say hi? My inbox is open.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-800 px-5 py-3
              font-Roboto text-base font-medium text-brand-50 shadow-sm transition duration-200
              hover:bg-brand-700 hover:shadow-md active:scale-[0.98] sm:w-auto
              dark:bg-brand-600 dark:hover:bg-brand-500"
          >
            <LuMail size={20} aria-hidden="true" />
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            title="Copy email address"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300
              bg-white/60 px-5 py-3 font-Roboto text-base font-medium text-stone-700 transition duration-200
              hover:border-brand-500 hover:text-brand-800 active:scale-[0.98] sm:w-auto
              dark:border-stone-600 dark:bg-stone-800/60 dark:text-stone-200
              dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            {copied ? <LuCheck size={20} /> : <LuCopy size={20} />}
            <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="mt-6 border-t border-stone-200/70 pt-5 dark:border-stone-700/70">
          <a
            href="https://github.com/yahya-mohammed07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-Nunito text-sm font-semibold text-stone-500
              transition-colors hover:text-brand-700 dark:text-stone-400 dark:hover:text-brand-400"
          >
            <FaGithub size={18} aria-hidden="true" />
            github.com/yahya-mohammed07
          </a>
        </div>
      </div>
    </div>
  );
}
