"use client";
import { useEffect } from "react";
import Image from "next/image";
import homePhoto from "../images/programming-home.svg";

export default function Home() {
  const name = "I'm Augusto Santos";

  return (
    <>
      <section className="home container" id="home">

          <h1 className="home__header--primary" id="typeit">
            Hello, {name}
          </h1>
          <h2 className="home__header--secondary">Fullstack Developer</h2>

          <div className="home__cta">
            <a href="#contact" className="home__btn">
              Contact me
            </a>
          </div>
        



      </section>
    </>
  );
}
