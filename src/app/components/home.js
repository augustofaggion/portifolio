"use client";
import { useEffect } from "react";
import Image from "next/image";
import homePhoto from "../images/programming-home.svg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  const name = "I'm Augusto Santos";

  return (
    <>
      <section className="home container" id="home">

          <h1 className="home__header--primary" id="typeit">
            Hello, {name}
          </h1>
          <h2 className="home__header--secondary">Fullstack Developer</h2>
          <div className="footer__icons">
          <a href="">
            <Github
              className="footer__icon"
              color={"#F6F6F6"}
              strokeWidth={1.4}
            />
          </a>

          <a href="">
            <Linkedin
              className="footer__icon"
              color={"#F6F6F6"}
              strokeWidth={1.4}
            />
          </a>
          <a href="">
            <Mail
              className="footer__icon"
              color={"#F6F6F6"}
              strokeWidth={1.4}
            />
          </a>
          <a href="">
            <Phone
              className="footer__icon"
              color={"#F6F6F6"}
              strokeWidth={1.4}
            />
          </a>
        </div>
          <div className="home__cta">
            <a href="#contact" className="home__btn">
              Contact me
            </a>
          </div>




      </section>
    </>
  );
}
