import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-transparent">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            dinesh-Yadav
          </NavLink>
          <NavLink
            to="skills"
            activeClassName="text-gr bg-black"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-green-800"
          >
            Skills
          </NavLink>
          <NavLink
            to="project"
            activeClassName="text-red-100 bg-green-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="about"
            activeClassName="text-red-100 bg-blue-400"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-green-800"
          >
            About Me!
          </NavLink>
          <div className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-green-800">
            <a
              href="https://drive.google.com/file/d/1IK6H1BEThI4gUFR_P9VppBnJ7Guz67HI/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
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
      </div>
    </header>
  );
};

export default Navbar;
