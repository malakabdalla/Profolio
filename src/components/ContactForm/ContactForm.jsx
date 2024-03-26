import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { useRef } from "react";
import "./contact.css";

const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_REACT_APP_USER_ID;

function ContactForm() {
  const textAreaRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const message = textAreaRef.current.value;
    console.log("Message:", message);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contactform">
      <h2 className="form-title">Contact Me</h2>
      <Form className="contact" onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
          className="form-field"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
          className="form-field"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
          ref={textAreaRef}
          className="form-field"
        />
        <Button type="submit" className="button-filed" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
