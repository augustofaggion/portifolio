import Image from "next/image";
// import PhotoBild from "../images/home.svg";
import contact from "../images/contact.png";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <div class="contact__box">
        <Image src={contact} alt="testing"/>
        <div className="contact_inputs">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
