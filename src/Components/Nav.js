import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative grid grid-flow-col auto-cols-2 md:grid-cols-2 navbar-expand-lg bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 md:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  activeClassName="text-white"
                  className="flex items-center md:py-6 md:px-3 md:mr-4 text-red-600 hover:text-green-800 text-3xl md:text-4xl font-bold cursive tracking-widest"
                >
                  dinesh-Yadav
                </NavLink>
              </li>
              <div className="flex flex-col md:flex-row my-1">
                <li className="nav-item">
                  <NavLink
                    to="skills"
                    activeClassName="text-gr bg-black"
                    className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="project"
                    activeClassName="text-red-100 bg-green-100"
                    className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="about"
                    activeClassName="text-red-100 bg-blue-400"
                    className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
                  >
                    About Me!
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    href="https://drive.google.com/file/d/1IK6H1BEThI4gUFR_P9VppBnJ7Guz67HI/view?usp=sharing"
                    className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="md:py-3 md:px-3 md:my-4 col-end-12">
          <SocialIcon
            url="https://twitter.com/DineshY84547011?s=01"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/dinesh0191"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/dinesh-yadav-057055189"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
