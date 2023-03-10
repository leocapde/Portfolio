export default function Header() {
  return (
    <div className="Header row sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-2 px-sm-5">
        <div className="container-fluid">
          <a
            href="#AbourMe"
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#AboutMe"
                >
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Frameworks">
                  Languages et frameworks
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Formations
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
