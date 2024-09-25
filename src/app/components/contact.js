import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import contact from "../images/contact.svg";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__header">Contact</h2>
      <div className="contact__box">
        <div className="contact__img">
          <Image src={contact} alt="Contact"  />
        </div>
        <div className="contact__inputs">
          <form className="contact__form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <div className="contact__button-container">
              <button className="contact__button">Send</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}
