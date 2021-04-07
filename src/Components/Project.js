import React from "react";
import styled from "styled-components";
import { projectWork } from "../skillsSection";

const Project = () => {
  return (
    <Container>
      <Heading>
        <Title>Projects</Title>
        <SubTitle>Welcome to projects page!</SubTitle>
      </Heading>
      <Content>
        {projectWork.projects.map((project) => (
          <Projects key={project.title}>
            <Name>
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                {project.title}
              </a>
            </Name>
            <Tech>
              <span>Technology Stack -</span>
              {project.skills.map((item, i) => (
                <div className="icons">
                  <ul className="dev-icons-project">
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={item.skillName}
                    >
                      <i className={item.fontAwesomeClassname}></i>
                    </li>
                  </ul>
                </div>
              ))}
            </Tech>
            <Summary>{project.description}</Summary>
            <ToProject>
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                View the Project
              </a>
            </ToProject>
          </Projects>
        ))}
      </Content>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  background-color: #d1fae5;
  width: 100%;
  height: auto;
`;

const Heading = styled.div`
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-top: 10px;
  font-family: "Amatic SC", cursive;
`;

const SubTitle = styled.p`
  font-size: 18px;
`;

const Content = styled.div`
  max-width: 1200px;
  display: grid;
  grid-gap: 2rem;
  margin-top: 1rem;

  @media (min-width: 600px) {
    margin: 2rem 25% 0 25%;
  }
`;
const Projects = styled.div`
  background-color: white;
  margin-top: 4px;
  padding: 2.3px;
  height: 100%;
  border-radius: 8px;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`;

const Name = styled.div`
  padding: 8px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
    font-size: 40px;
    font-weight: 600;
  }

  a:hover {
    color: #b91c1c;
  }
`;

const Tech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    color: gray;
  }
`;

const Summary = styled.p`
  padding: 0 8px 0 8px;
  font-weight: 400;
`;

const ToProject = styled.div`
  padding: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  a:hover {
    text-decoration: underline;
    color: #f87171;
  }
`;
