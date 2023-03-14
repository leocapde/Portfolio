import { formationsList } from '../../data/formations';

export default function Formations() {
  return (
    <section id="Formations" className="row bg-black pt-5 px-2 px-sm-5">
      <h4 className="text-light m-0">Formations</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 mx-0">
        {formationsList
          .slice()
          .reverse()
          .map((formation, index) => (
            <div className="col" key={index}>
              <div className="card bg-dark h-100">
                <div className="card-body">
                  <h5 className="card-title text-light mb-3">
                    {formation.title}
                  </h5>
                  <div className="card-text text-light">{formation.school}</div>
                  <div className="card-text text-light">{formation.date}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
