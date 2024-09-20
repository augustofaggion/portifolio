import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import Avatar from "../images/hello.png";

export default function About() {
  return (
    <section className="container">
      <h1 className="about__header">About me</h1>
      <div class="about">
        <div class="about__left">
          <p className="about__text">
            With a passion for technology and a knack for problem-solving, I
            transitioned from a background in logistics to the dynamic world of
            coding. My unique experience allows me to bring an efficiency-driven
            mindset to full-stack development, creating scalable, robust solutions
            tailored to real-world challenges. Whether it&apos;s designing intuitive user
            interfaces or building powerful backend systems, I thrive on turning
            complex problems into seamless digital experiences. Every project is an
            opportunity to innovate and deliver value.
          </p>
        </div>
        <div class="about__right">
          <Image className="about__img" src={Avatar} alt="Augusto Santos" />
        </div>
      </div>
    </section>
  );
}
