import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navbar-custom">
          <Nav.Link>
            <NavLink
              to="/"
              exact
              className="flex items-center md:py-6 md:px-3 md:mr-4 text-red-600 hover:text-green-800 text-3xl md:text-4xl font-bold cursive"
            >
              dinesh-Yadav
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="skills"
              activeClassName="text-white bg-black"
              className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
            >
              Skills
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="project"
              activeClassName="text-gray-800 bg-green-100"
              className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
            >
              Projects
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="about"
              activeClassName="text-red-100 bg-blue-400"
              className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
            >
              About Me!
            </NavLink>
          </Nav.Link>
          <a
            href="https://drive.google.com/file/d/1IK6H1BEThI4gUFR_P9VppBnJ7Guz67HI/view?usp=sharing"
            className="flex items-center md:py-3 md:px-3 my-4 rounded text-red-600 hover:text-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
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
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
