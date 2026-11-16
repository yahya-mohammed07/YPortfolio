import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SectionHeading from "./components/Elemets/SectionHeading";
import BackToTop from "./components/Elemets/BackToTop";

const App = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
          focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      {/* Strongest proof first: real roles, then the projects behind them */}
      <main id="main" className="flex flex-col gap-24 pb-24 sm:gap-28 md:gap-32">
        <section id="section_about" aria-label="About">
          <About />
        </section>

        <section id="section_experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" title="Experience" />
          <Experience />
        </section>

        <section id="section_project" aria-labelledby="projects-title">
          <SectionHeading
            id="projects-title"
            title="Projects"
            subtitle="Client work and my own products. Closed-source projects can be demoed on request."
          />
          <Projects />
        </section>

        <section id="section_skills" aria-labelledby="skills-title">
          <SectionHeading id="skills-title" title="Skills" />
          <Skills />
        </section>

        <section id="section_contact" aria-labelledby="contact-title">
          <SectionHeading id="contact-title" title="Contact" />
          <Contact />
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 dark:border-brand-900">
        <p className="mx-auto max-w-6xl px-4 text-sm text-slate-500 sm:px-5 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Yahya M. Baqer
        </p>
      </footer>

      <BackToTop />
    </>
  );
};

export default App;
