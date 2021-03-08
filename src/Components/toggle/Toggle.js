import React, { useState, useEffect } from "react";
import { setTheme } from "../theme";
import "./toggle.css";

const Toggle = () => {
  const [toggle, setToggle] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setToggle("light");
    } else {
      setTheme("theme-dark");
      setToggle("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setToggle("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setToggle("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {toggle === "light" ? (
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={handleClick}
          checked
        />
      ) : (
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={handleClick}
        />
      )}

      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--background"></span>
      </label>
    </div>
  );
};

export default Toggle;
