import React from "react";
import { skillsSection, illustration } from "../skillsSection";
import { Fade } from "react-reveal";
import codingPerson from "../codingPerson.json";
import DisplayLottie from "./DisplayLottie";

function Skills() {
  return (
    <div className="skills-main-div grid grid-cols gap-8 md:grid-cols-2">
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
          <div className="skills-heading">{skillsSection.title}</div>
          <div className="skills-text-subtitle subTitle">
            {skillsSection.subTitle}
          </div>
          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons">
                {skillsSection.softwareSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <i className={skills.fontAwesomeClassname}></i>
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="skills-text-container">
            {skillsSection.skills.map((skill, i) => {
              return (
                <div key={i} className="skills-text">
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
