import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <section className="footer container">
      <div className="footer__box">
        <div className="footer__information">
          <p className="footer__text">Augusto Santos</p>
          <p className="footer__text">Fullstack Developer</p>
          <p className="footer__text">
            <span className="footer__bold">Telephone:</span> +49 0000 0000 00
          </p>
          <p className="footer__text">
            <span className="footer__bold">Email:</span>{" "}
            a.faggion.santos@gmail.com
          </p>
        </div>
        <div>
          <p className="footer__text">© 2024 Augusto Santos</p>
        </div>
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
      </div>
    </section>
  );
}
