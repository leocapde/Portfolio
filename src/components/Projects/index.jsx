import { projectsList } from '../../data/projects';

export default function Projects() {
  return (
    <section id="Projects" className="row bg-black pt-5 px-2 px-sm-5">
      <h4 className="text-light m-0">Projets</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2">
        {projectsList
          //   .slice()
          //   .reverse()
          .map((project, index) => (
            <div className="col" key={index}>
              <div className="card bg-dark h-100 text-light">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-light">{project.title}</h5>
                  <div className="my-3">
                    <a href={project.url}>
                      <button className="btn btn-light mr-2">
                        <i className="fa-solid fa-play mx-2"></i>
                        Visiter le site
                      </button>
                    </a>
                    <a href={project.github}>
                      <button className="btn btn-secondary mx-2">
                        <i className="fa-solid fa-circle-info mx-2"></i>
                        GitHub
                      </button>
                    </a>
                  </div>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <span className="text-secondary">Frameworks : </span>
                    {project.frameworks.map((framework) => framework + ', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
