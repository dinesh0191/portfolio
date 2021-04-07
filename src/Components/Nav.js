import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const N = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fa fa-bars" id="btn"></i>
        <i className="fa fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <div className="nav-links">
          <NavLink
            to="/"
            exact
            className="md:py-6 md:px-3 md:mr-4 text-red-600 hover:text-green-800 text-3xl md:text-4xl font-bold cursive"
          >
            dinesh-Yadav
          </NavLink>

          <NavLink
            to="skills"
            activeClassName="text-white bg-black"
            className="md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
          >
            Skills
          </NavLink>

          <NavLink
            to="project"
            activeClassName="text-gray-800 bg-green-100"
            className="md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
          >
            Projects
          </NavLink>

          <NavLink
            to="about"
            activeClassName="text-red-100 bg-blue-400"
            className="md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
          >
            About Me!
          </NavLink>

          <a
            href="https://drive.google.com/file/d/15mbHJk8zw-iN_CW2CazA5RNnwYG79aQl/view?usp=sharing"
            className="md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="nav-icons md:py-6 md:px-3 md:mr-4">
          <SocialIcon
            url="https://twitter.com/DineshY84547011?s=01"
            className="mr-4 social-icon"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/dinesh0191"
            className="mr-4 social-icon"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/dinesh-yadav-057055189"
            className="mr-4 social-icon"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </>
  );
};

export default N;
