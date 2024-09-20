import Image from "next/image";
// import PhotoBild from "../images/home.svg";


const skills = [{
  id: 1,
  laguage: "Javascript",
  logo: "test",
},
{id: 2,
  laguage: "Ruby",
  logo: "test",
},
{id: 3,
  laguage: "React",
  logo: "test",
},
{id: 4,
  laguage: "Ruby on Rails",
  logo: "test",
},
{id: 5,
  laguage: "HTML",
  logo: "test",
},
{id: 6,
  laguage: "CSS",
  logo: "test",
},
{id: 7,
  laguage: "SASS",
  logo: "test"},
{id: 8,
  laguage: "Bootstrap",
  logo: "test",
},
{id:9,
  laguage: "SQL",
  logo: "test",
},
{id: 10,
  laguage: "PostgreSQL",
  logo: "test",
},
// Check for SQL which is best to write
{id: 11,
  laguage: "Git",
  logo: "test",
}, {id: 12,
  language: "Figma"
}

];

export default function Skills() {
  return (
    <section className="skills container">
      <h2 className="skills_name">Skills</h2>
      <div class="skills__box">
        {skills.map((skill)=> (
          <div key={skill.id} className="skills_content">
            {/* <Image src={skill.logo} alt={skill.language} width={300} height={300} /> */}
            <p className="skill__text">{skill.laguage}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
