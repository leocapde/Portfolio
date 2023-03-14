export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="row bg-black py-5 py-sm-6 px-2 px-sm-5 bg-image"
    >
      <div className="col col-md-6">
        <h1 className="text-light text-shadow">Léo Capdevielle</h1>
        <h4 className="text-light text-shadow">Développeur web</h4>
        <p className="text-light text-shadow">
          Après avoir travailler pendant des années en tant que salarié
          agricole, ce fils d'agriculteur décide de se lancer dans sa passion
          pour le développement informatique. Aujourd'hui détenteur d'un diplôme
          en Dévelopeur web, il compte bien utiliser sa curiosité naturelle et
          sa capacité d'auto-apprentissage afin de s'épanouir dans son nouveau
          métier.
        </p>
        <a href="https://www.linkedin.com/in/l%C3%A9o-capdevielle-2467ba18a/">
          <button className="btn btn-light px-4">
            <i className="fa-brands fa-linkedin mx-1"></i> LinkedIn
          </button>
        </a>
        <a href="https://github.com/leocapde">
          <button className="btn btn-secondary px-4 mx-3">
            <i className="fa-brands fa-github mx-1"></i>
            Github
          </button>
        </a>
      </div>
    </section>
  );
}
