"use client";
import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import ProjectBild from "../images/hello.png";
import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex perferendis praesentium, tempore aut earum pariatur repudiandae at. Cupiditate ullam iure veniam et voluptatibus impedit non voluptatem ratione ipsum explicabo!",
    image: ProjectBild,
    linkGit: "https://github.com",
    linkDemo: "https://google.com",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex perferendis praesentium, tempore aut earum pariatur repudiandae at. Cupiditate ullam iure veniam et voluptatibus impedit non voluptatem ratione ipsum explicabo!",
    image: ProjectBild,
    linkGit: "https://github.com",
    linkDemo: "https://google.com",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex perferendis praesentium, tempore aut earum pariatur repudiandae at. Cupiditate ullam iure veniam et voluptatibus impedit non voluptatem ratione ipsum explicabo!",
    image: ProjectBild,
    linkGit: "https://github.com",
    linkDemo: "https://google.com",
  },
];

export default function Project() {
  return (
    <section className="project">
      <h2 className="project__header">Project</h2>
      <div className="project__box">
        {projects.map((project) => (
          <div key={project.id} className="project__content">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
            />
            <h3 className="project__title">{project.title}</h3>
            <p className="project__text">{project.description}</p>

            <div className="project__links">
              <a
                className="project__link"
                href={project.linkGit}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github /><span> Github</span>
              </a>

              <a
                className="project__link"
                href={project.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link /><span>Website</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
