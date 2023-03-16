export default function Footer() {
  return (
    <section id="Footer" className="row bg-black pt-5 px-2 px-sm-5">
      <h4 className="text-light mb-0 mt-2">Contact</h4>
      <form className="bg-black px-sm-5 mt-3" onSubmit={sendMessage}>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="email-contact-input">
            Email
          </label>
          <input
            className="form-control bg-dark text-light"
            type="text"
            id="email-contact-input"
            placeholder="votre@email.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="objet-contact-input">
            Objet
          </label>
          <input
            className="form-control bg-dark text-light"
            type="text"
            id="objet-contact-input"
            placeholder="Hello there !"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="message-contact-input">
            Message
          </label>
          <textarea
            className="form-control bg-dark text-light"
            type="text"
            id="message-contact-input"
            placeholder="Vous savez je ne crois pas qu'il y ait de bonne ou de mauvaise situation..."
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-secondary"
            type="submit"
          >
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

function sendMessage(event) {
  window.alert('Votre message a bien été envoyé !');
}
