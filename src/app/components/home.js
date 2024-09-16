import Image from 'next/image';
import PhotoBild from "../images/home.svg";

export default function Home() {
  return (
    <div className="container">
    <h1>Hello, I&apos;m Augusto Santos</h1>
    <h2>Fullstack Developer</h2>
    <h3>Empowering your digital sucess with innovative solutions</h3>

    <div>
      <Image src={PhotoBild} alt="Augusto Santos" />
    </div>
    </div>
  );
}
