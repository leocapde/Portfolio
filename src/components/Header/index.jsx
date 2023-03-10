export default function Header() {
  return (
    <div id="Header" className="row sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-2 px-sm-5">
        <div className="container-fluid">
          <a
            href="#top"
            className="navbar-brand fw-bold text-danger text-uppercase"
          >
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#top">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Frameworks">
                  Technologies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Projects">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Formations">
                  Formations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
