import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import { Menu} from 'lucide-react';

// maybe write skills, tech stack, etc

export default function Skills() {
  return (
    <section className="project container">
      <h1>Skills</h1>
      <div class="project__box">
        <Image alt="testing"/>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ex
          perferendis praesentium, tempore aut earum pariatur repudiandae at.
          Cupiditate ullam iure veniam et voluptatibus impedit non voluptatem
          ratione ipsum explicabo!
        </p>
        <Menu size={24} />
      </div>
    </section>
  );
}
