"use client";
import { useEffect } from "react";
import Image from "next/image";
import homePhoto from "../images/programming-home.svg";

export default function Home() {
  const name = "I'm Augusto Santos";

  return (
    <>
      <section className="home container" id="home">
        <div className="home__left">
          <h1 className="home__header--primary" id="typeit">
            Hello, {name}
          </h1>
          <h2 className="home__header--secondary">Fullstack Developer</h2>
          <h3 className="home__header--terciary">
            Empowering your digital sucess with innovative solutions
          </h3>
          <div className="home__cta">
            <a href="#contact" className="home__btn">
              Contact me
            </a>
          </div>
        </div>

        <div className="home__right">
          <Image src={homePhoto} alt="Augusto Santos" />
        </div>
      </section>
    </>
  );
}
