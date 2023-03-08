export default function Header() {
  return (
    <div className="Header sticky-top">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid mx-sm-5">
          <a href="#" className="navbar-brand fw-bold text-danger">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Compétences techniques
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projets
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
