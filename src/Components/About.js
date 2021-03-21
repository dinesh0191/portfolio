import React from "react";
import dineshYadav from "../Assets/dineshYadav.jpg";
import { contactInfo, aboutME } from "../skillsSection";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Fade } from "react-reveal";

const Abo = () => {
  return (
    <Container>
      <Content>
        <Main>
          <Image>
            <img src={dineshYadav} alt="user" />
          </Image>
          <About>
            <h1>
              Hey there, I'm <span>{aboutME.name}</span> 🖐️
            </h1>
            <p>{aboutME.bio}</p>
            <p>{aboutME.goal}</p>
            <p>{aboutME.funFact}</p>
          </About>
        </Main>
        <Fade bottom duration={2000}>
          <section className="contact-section">
            <div className="porse lg:prose-xl text-white text-3xl">
              {contactInfo.title}
            </div>
            <div className="inline-flex py-3 px-3 contact">
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
            <a
              className="porse lg:prose-xl text-white number"
              href={"tel:" + contactInfo.number}
            >
              {contactInfo.number}
            </a>{" "}
            <a
              className="porse lg:prose-xl text-white"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
          </section>
        </Fade>
      </Content>
    </Container>
  );
};

export default Abo;

const Container = styled.div`
  background-color: #60a5fa;
  height: auto;
`;

const Content = styled.div`
  padding: 0.1px;
`;

const Main = styled.div`
  max-width: 1200px;
  display: grid;
  border-radius: 8px;
  background-color: #065f46;
  margin: 5% 5% 10px 5%;
  padding: 2.5rem;
  height: auto;

  @media (min-width: 600px) {
    grid-template-columns: 30% 70%;
  }
`;

const Image = styled.div`
  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
  }
`;

const About = styled.div`
  padding: 16px;
  h1 {
    color: #6ee7b7;
    font-family: "Amatic SC", cursive;
    font-size: 56px;
  }
  span {
    color: #d1fae5;
  }

  p {
    color: white;
    font-size: 20px;
  }
`;
