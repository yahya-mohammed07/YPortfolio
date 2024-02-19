import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="dark:bg-black">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
          className=""
        >
          <section
            id="section_about"
            className=" flex justify-center items-center"
          >
            <About />
          </section>
          <section id="section_skills" className=" h-full">
            skill
          </section>
          <section id="section_project" className=" h-full">
            projects
          </section>
          <section id="section_contact" className=" h-full">
            let us contact
          </section>
        </div>
      </main>

      <footer className="mx-auto text-center">Yahya &copy;</footer>
    </>
  );
}

export default App;
