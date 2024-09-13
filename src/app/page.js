import Image from "next/image";
import styles from "./page.module.scss";

import {Menu, X} from 'lucide-react';

export default function App() {
  return (
    <nav className="navbar">
      <ul className="navbar">
        <li className="logo">
          {/* add logo here */}
          <a href="/">Augusto</a>
        </li>

        <div className="navItems">

            <Menu className="open" size="24" />
            <X className="close" size="24" />
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact me</a>
          </li>
          <li>
            <a href="english">EN</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
