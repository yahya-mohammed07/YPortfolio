import { Toaster } from "react-hot-toast";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SectionHeading from "./components/Elemets/SectionHeading";
import BackToTop from "./components/Elemets/BackToTop";
import Reveal from "./components/Elemets/Reveal";

const App = () => {
  return (
    <>
      <Toaster position="bottom-center" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
          focus:rounded-lg focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-brand-50"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex flex-col gap-24 pb-24 md:gap-32">
        <section id="section_about" aria-label="About">
          <About />
        </section>

        <section id="section_skills" aria-labelledby="skills-title">
          <Reveal>
            <SectionHeading
              id="skills-title"
              title="Skills"
              subtitle="The tools I reach for, grouped by what I build with them."
            />
          </Reveal>
          <Skills />
        </section>

        <section id="section_project" aria-labelledby="projects-title">
          <Reveal>
            <SectionHeading
              id="projects-title"
              title="Projects"
              subtitle="Shipped apps, backends and experiments — a mix of client work and my own ideas."
            />
          </Reveal>
          <Projects />
        </section>

        <section id="section_contact" aria-labelledby="contact-title">
          <Reveal>
            <SectionHeading id="contact-title" title="Contact Me" />
          </Reveal>
          <Contact />
        </section>
      </main>

      <footer className="border-t border-stone-200/70 py-8 dark:border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
          <p className="font-Nunito text-sm text-stone-500 dark:text-stone-400">
            &copy; {new Date().getFullYear()} Yahya M. Baqer
          </p>
          <p className="font-Nunito text-xs text-stone-400 dark:text-stone-500">
            Built with React, TypeScript &amp; TailwindCSS
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
};

export default App;
