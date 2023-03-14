import { frameworksList } from '../../data/frameworks';

export default function Frameworks() {
  return (
    <section id="Frameworks" className="row bg-black pt-5 px-2 px-sm-5 ">
      <h4 className="text-light mb-0 mt-2">Technologies</h4>
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-2 mx-0">
        {frameworksList.map((framework, index) => (
          <div className="col" key={index}>
            <div className="card bg-dark h-100">
              <img
                src={framework.image}
                alt={framework.alt}
                className="card-img-top framework-img"
              />
              <div className="card-body">
                <h5 className="card-title text-light">{framework.title}</h5>
                <div className="progress progress-framework">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: framework.progress + '%' }}
                    aria-valuenow={framework.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
