import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import { Github, Linkedin, Mail, Phone} from 'lucide-react';

export default function Footer() {
  return (
    <section className="footer container">
      <div className="footer__box">
        <Github />
      <Linkedin />
      <Mail />
      <Phone />
      </div>
    </section>
  );
}
