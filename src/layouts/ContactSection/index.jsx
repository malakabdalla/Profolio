import ContactForm from "../../components/ContactForm/ContactForm";
import Socials from "../../components/Socials";
import "./contact.css";
function ContactArea() {
  return (
    <>
      <div className="contact-section">
        <Socials />
        <ContactForm />
      </div>
    </>
  );
}
export default ContactArea;
