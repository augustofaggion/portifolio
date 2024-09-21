import Image from "next/image";
// Links for the logos
import javascript from "../images/skills/javascript.svg";
import ruby from "../images/skills/ruby.svg";
import react from "../images/skills/react.svg";
import rails from "../images/skills/rails.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import sass from "../images/skills/sass.svg";
import bootstrap from "../images/skills/bootstrap.svg";
import sql from "../images/skills/sql.svg";
import git from "../images/skills/git.svg";
import figma from "../images/skills/figma.svg";

// Skills data
const skills = [
  { id: 1, laguage: "Javascript", logo: javascript },
  { id: 2, laguage: "Ruby", logo: ruby },
  { id: 3, laguage: "React", logo: react },
  { id: 4, laguage: "Ruby on Rails", logo: rails },
  { id: 5, laguage: "HTML", logo: html },
  { id: 6, laguage: "CSS", logo: css },
  { id: 7, laguage: "SASS", logo: sass },
  { id: 8, laguage: "Bootstrap", logo: bootstrap },
  { id: 9, laguage: "PostgreSQL", logo: sql },
  { id: 10, laguage: "Git", logo: git },
  { id: 11, language: "Figma", logo: figma },
];

export default function Skills() {
  return (
    <section className="skills container">
      <h2 className="skills_name">Skills</h2>
      <div class="skills__box">
        {skills.map((skill) => (
          <div key={skill.id} className="skills_content">
            <Image
              src={skill.logo}
              alt={skill.language}
              width={300}
              height={300}
            />
            <p className="skill__text">{skill.laguage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
