import Image from "next/image";
import styles from "./page.module.scss";

export default function App() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          {/* add logo here */}
          <a href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li><a href="/about">About me</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact me</a></li>
        <li><a href="english">EN</a></li>
      </ul>
    </nav>
  );
}
