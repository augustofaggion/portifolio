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
  { id: 1, language: "Javascript", logo: javascript },
  { id: 2, language: "Ruby", logo: ruby },
  { id: 3, language: "React", logo: react },
  { id: 4, language: "Ruby on Rails", logo: rails },
  { id: 5, language: "HTML", logo: html },
  { id: 6, language: "CSS", logo: css },
  { id: 7, language: "SASS", logo: sass },
  { id: 8, language: "Bootstrap", logo: bootstrap },
  { id: 9, language: "PostgreSQL", logo: sql },
  { id: 10, language: "Git", logo: git },
  { id: 11, language: "Figma", logo: figma },
];

// Skills components

function SkillItem({ skill }) {
  return (
    <div key={skill.id} className="skill__content">
      <Image
        src={skill.logo}
        alt={skill.language}
        width={50}
        height={50}
        className="skill__logo"
      />
      <p className="skill__text">{skill.language}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__content">
        <h3 className="skills__header">Skills</h3>
        <div class="skills__box container">
          {skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
