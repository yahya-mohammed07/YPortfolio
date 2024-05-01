import React, { ReactNode } from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useIsNavOpenState from "../../states/openState";
import { MdOutlineClose } from "react-icons/md";

interface CustomLinkType {
  href: string;
  children: ReactNode;
}

const CustomLinkMobile: React.FC<CustomLinkType> = ({ href, children }) => {
  return (
    <li className={`${styles.list} p-6 text-3xl`}>
      <a className={styles.linkA} href={href}>
        {children}
      </a>
    </li>
  );
};

// MobileNavbar component for smaller screens
const MobileNavbar = () => {
  const { isNavOpen, setNavOpen } = useIsNavOpenState();

  const toggleMobileNav = () => {
    setNavOpen(!isNavOpen);
  };
  // box to hold col of urls hidden in large screens
  // top-full class ensures it starts below the top edge of its containing block.
  // right-0 class places it against the right edge
  // z-10 class ensures it appears above other elements with a lower z-index.
  // this should 
  return (
    <>
      {open && (
        <div
          className={
            !open
              ? "hidden"
              : "sm:hidden absolute  top-10 right-0 left-0 bg-neutral-50 shadow-xl border z-50"
          }
        >
          <ul
            className="flex flex-col text-sm h-dvh w-svw p-2 text-right list-none"
            onClick={toggleMobileNav}
          >
            <CustomLinkMobile href="#section_about">About</CustomLinkMobile>
            <CustomLinkMobile href="#section_skills">Skills</CustomLinkMobile>
            <CustomLinkMobile href="#section_project">
              Projects
            </CustomLinkMobile>
            <CustomLinkMobile href="#section_contact">
              Let's Collaborate :)
            </CustomLinkMobile>
          </ul>
        </div>
      )}
    </>
  );
};

const CustomLink: React.FC<CustomLinkType> = ({ href, children }) => {
  return (
    <li className={styles.list}>
      <a className={styles.linkA} href={href}>
        {children}
      </a>
    </li>
  );
};

const Navbar = () => {
  const { isNavOpen, setNavOpen } = useIsNavOpenState();
  const toggleNavbar = () => setNavOpen(!isNavOpen);
  return (
    <>
      <header>
        <nav
          className={`flex max-w-7xl mx-auto my-5 justify-between p-1 drop-shadow-sm text-sm lg:text-2xl text-gray-700 font-Nunito`}
        >
          <a
            href="#"
            className={`${styles.linkA} -mt-2 text-3xl md:text-4xl font-bold`}
          >
            Yahya
          </a>
          <button
            //  hide in xl,lg
            className="sm:hidden -mt-1 active:bg-slate-400 focus:outline-none hover:rounded-lg hover:bg-slate-300 p-2 text-xl"
            onClick={toggleNavbar}
          >
            {isNavOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
          {/*if click it true then show mobile navbar*/}
          {isNavOpen && <MobileNavbar />}
          {/*only show when screen sm size and hide show when clicked*/}
          <ul className={`sm:flex gap-1 list-none hidden`}>
            <CustomLink href="#section_about">About</CustomLink>
            <CustomLink href="#section_skills">Skills</CustomLink>
            <CustomLink href="#section_project">Projects</CustomLink>
            <CustomLink href="#section_contact">
              Let's Collaborate :)
            </CustomLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
