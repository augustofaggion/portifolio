import Image from "next/image";
import PhotoBild from "../images/home.svg";

export default function Home() {
  return (
    <section className="home container">

      <div className="home__left">
        <h1>Hello, I&apos;m Augusto Santos</h1>
        <h2>Fullstack Developer</h2>
        <h3>Empowering your digital sucess with innovative solutions</h3>
      </div>

      <div className="home__right">
        <Image src={PhotoBild} alt="Augusto Santos" />
      </div>
    </section>
  );
}
