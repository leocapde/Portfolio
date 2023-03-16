import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const formContact = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formContact.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (window.confirm('Votre message a bien été envoyé !')) {
            window.location.reload();
          }
        },
        (error) => {
          alert('Désolée une erreur est survenu...');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="Footer" className="row bg-black pt-5 px-2 px-sm-5">
      <h4 className="text-light mb-0 mt-2">Contact</h4>
      <form
        className="bg-black px-sm-5 mt-3"
        ref={formContact}
        onSubmit={sendEmail}
      >
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="name-contact-input">
            Nom
          </label>
          <input
            className="form-control bg-dark text-light"
            type="text"
            id="name-contact-input"
            name="user-name"
            placeholder="Saul Goodman"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label text-light"
            htmlFor="email-contact-input"
          >
            Email
          </label>
          <input
            className="form-control bg-dark text-light"
            type="email"
            id="email-contact-input"
            name="user-email"
            placeholder="votre@email.com"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label text-light"
            htmlFor="object-contact-input"
          >
            Objet
          </label>
          <input
            className="form-control bg-dark text-light"
            type="text"
            id="object-contact-input"
            name="user-object"
            placeholder="Hello there !"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label text-light"
            htmlFor="message-contact-input"
          >
            Message
          </label>
          <textarea
            className="form-control bg-dark text-light"
            type="text"
            id="message-contact-input"
            name="user-message"
            placeholder="Vous savez je ne crois pas qu'il y ait de bonne ou de mauvaise situation..."
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
      <div className="col-12 text-center my-5">
        <a
          className="footer-link fs-2 mx-2"
          href="https://www.linkedin.com/in/l%C3%A9o-capdevielle-2467ba18a/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a className="footer-link fs-2 mx-2" href="https://github.com/leocapde">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}
