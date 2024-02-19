import "./navbar.moduler.css";
const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className={`flex max-w-7xl mx-auto my-5 justify-between p-1 drop-shadow-sm text-sm lg:text-2xl text-gray-700 font-Nunito`}
        >
          <a
            href="#section_about"
            className="-mt-3 text-3xl md:text-4xl font-bold font-Raleway"
          >
            Yahya
          </a>
          <ul className={`sm:flex gap-1 list-none hidden`}>
            <li>
              <a href="#section_about">About</a>
            </li>
            <li>
              <a href="#section_skills">Skills</a>
            </li>
            <li>
              <a href="#section_project">Projects</a>
            </li>
            <li>
              <a href="#section_contact">Let's Contact ;)</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
