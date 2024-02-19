import React, { ReactNode } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className={`flex max-w-7xl mx-auto my-5 justify-between p-1 drop-shadow-sm text-sm lg:text-2xl text-gray-700 font-Nunito`}
        >
          <a
            href="#"
            className={`${styles.linkA} -mt-3 text-3xl md:text-4xl font-bold`}
          >
            Yahya
          </a>
          <ul className={`sm:flex gap-1 list-none hidden`}>
            <CustomLink href="#section_about">About</CustomLink>
            <CustomLink href="#section_skills">Skills</CustomLink>
            <CustomLink href="#section_project">Projects</CustomLink>
            <CustomLink href="#section_contact">
              Let's Collaborate ;)
            </CustomLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

interface CustomLinkType {
  href: string;
  children: ReactNode;
}

const CustomLink: React.FC<CustomLinkType> = ({ href, children }) => {
  return (
    <li className={styles.list}>
      <a className={styles.linkA} href={href}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
