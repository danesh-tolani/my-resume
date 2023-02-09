import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context";
import ContactForm from "./ContactForm";
import Experience from "./Experience";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Skills from "./Skills";

const Navbar = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const textColor = theme === "light" ? "#212121" : "#f8f8f8";

  return (
    <nav>

    <div className="flex flex-col lg:flex-row  justify-between items-center py-5 ">
      {theme === "dark" ? (
        <img
          src="./logo_dark.png"
          className="w-20"
          alt="logo"></img>
      ) : (
        <img
          src="./logo_light.png"
          className="w-20"
          alt="logo"></img>
      )}
      <ul className="flex gap-x-6 items-center ">
        <li
          className="cursor-pointer text-xs lg:text-lg"
          style={{ color: textColor }}>
      <Link activeClass="active" smooth={true}  to="home">
          HOME
        </Link>
        </li>
        <li
          className="cursor-pointer text-xs lg:text-lg"
          style={{ color: textColor }}>
            <Link activeClass="active" smooth={true}  to="skills">

          SKILLS
            </Link>
        </li>
        <li
          className="cursor-pointer text-xs lg:text-lg"
          style={{ color: textColor }}>
            <Link activeClass="active" smooth={true}  to="projects">

          PROJECTS
            </Link>
        </li>
        <li
          className="cursor-pointer text-xs lg:text-lg"
          style={{ color: textColor }}>
            <a href="https://daneshtolani18.hashnode.dev" target="_blank">
          BLOG
            </a>
              
        </li>
        <li
          className="cursor-pointer text-xs lg:text-lg text-center"
          style={{ color: textColor }}>
            <Link activeClass="active" smooth={true}  to="contactMe">

          CONTACT ME
            </Link>
        </li>
        <button
          className="cursor-pointer text-xs lg:text-lg py-1 lg:py-2 px-2 lg:px-4 rounded-lg"
          style={{ color: textColor, border: `1px solid ${textColor}` }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "dark".toUpperCase() : "light".toUpperCase()} Mode
        </button>
      </ul>

      </div>
        <section name="home">
          <HomePage />
        </section>
        <section name="skills">
          <Skills id="skills"/>
        </section>
        <section name="experience">
          <Experience id="experience"/>
        </section>
        <section name="projects">
          <Projects id="projects"/>
        </section>
        <section name="contactMe">
          <ContactForm id="contactMe"/>
        </section>
    </nav>

  );
};

export default Navbar;
