import React from "react";
import { Fade } from "react-reveal";

function Home() {
  return (
    <main>
      <img
        src="https://wallpaperaccess.com/full/1657858.jpg"
        alt=""
        className="absolute object-cover w-full h-full"
      />
      <div className="home-text">
        <section className="min-h-screen pt-12 lg:pt-64 px-8">
          <Fade left duration={3000}>
            <div className="font-bold cursive leading-none lg:leading-snug home-name">
              Hello, I'm Dinesh
            </div>
          </Fade>
          <Fade right duration={5000}>
            <div className="font-bold cursive leading-none lg:leading-snug home-name">
              Self-taught Web-Developer
            </div>
          </Fade>
        </section>
      </div>
    </main>
  );
}

export default Home;
