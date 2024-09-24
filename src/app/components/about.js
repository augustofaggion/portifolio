"use client";
import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import aboutPhoto from "../images/about-img.svg";

export default function About() {
  return (
    <section className="about">
      <h2 className="about__header container">About me</h2>
      <div className="about__box container">
        <div className="about__left">
          <p className="about__text">
            With a passion for technology and a knack for problem-solving, I
            transitioned from a background in logistics to the dynamic world of
            coding. My unique experience allows me to bring an efficiency-driven
            mindset to full-stack development, creating scalable, robust
            solutions tailored to real-world challenges.
          </p>
          <p className="about__text">
            Whether it&apos;s designing intuitive user interfaces or building
            powerful backend systems, I thrive on turning complex problems into
            seamless digital experiences. Every project is an opportunity to
            innovate and deliver value.
          </p>
        </div>
        <div className="about__right">
          <Image className="about__img" src={aboutPhoto} alt="Augusto Santos" />
        </div>
      </div>
      <hr className="about__line"/>
    </section>
  );
}
