import React from "react";
import { skillsSection, illustration } from "../skillsSection";
import { Fade } from "react-reveal";
import codingPerson from "../codingPerson.json";
import DisplayLottie from "./DisplayLottie";

function Skills() {
  return (
    <div className="skills-main-div grid grid-cols md:grid-cols-2">
      <Fade left duration={4000}>
        <div className="skills-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../Assets/developerActivity.svg")}
              className="md:w-48"
            ></img>
          )}
        </div>
      </Fade>
      <Fade right duration={2000}>
        <div className="grid grid-flow-row auto-rows-max">
          <div className="skills-heading text-4xl md:text-6xl my-3">
            {skillsSection.title}
          </div>
          <div className="skills-text-subtitle text-xl">
            {skillsSection.subTitle}
          </div>
          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons text-3xl md:text-6xl py-4 px-12 lg:px-24">
                {skillsSection.softwareSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <i className={skills.fontAwesomeClassname}></i>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="skills-text-container">
            {skillsSection.skills.map((skill, i) => {
              return (
                <div key={i} className="skills-text py-1 text-xl">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
