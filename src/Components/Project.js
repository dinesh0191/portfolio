import React, { useState, useEffect } from "react";
import sanityClient from "../client";

function Project() {
  const [projectData, setProjectData] = useState(null);
  const [tags, setTags] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl bg-white p-16"
                key={project.title}
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <div className="technology-stack">
                    {/* <p>Technology Stack - </p> */}
                    <ul className="dev-icons-project">
                      <li
                        key={project.title}
                        className="software-skill-inline"
                        name={project.tags}
                      >
                        {/* <i className={`fab fa-html5`}></i> */}
                      </li>
                    </ul>
                  </div>
                  <p className=" text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="view-link">
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      View the Project{" "}
                      <span role="img" aria-label="right-pointer"></span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
