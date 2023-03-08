export default function AboutMe() {
  return (
    <div className="AboutMe row bg-black py-5 py-sm-6 px-2 px-sm-5 bg-image">
      <div className="col col-md-6">
        <h1 className="text-light text-shadow">Léo Capdevielle</h1>
        <h4 className="text-light text-shadow">Développeur web</h4>
        <p className="text-light text-shadow">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          beatae hic? Eligendi placeat iste sapiente soluta dolor quaerat,
          explicabo quo architecto, dicta ipsa culpa, accusamus consequatur
          nostrum ipsum. Obcaecati libero deleniti vel voluptatem doloremque
          quam eveniet, cumque quaerat dolorum dolorem eos nam ea recusandae
          inventore quasi perferendis rerum temporibus voluptates.
        </p>
        <button className="btn btn-light mr-2">
          <i className="fa-solid fa-play mx-2"></i>
          Lecture
        </button>
        <button className="btn btn-secondary opacity-75 mx-2">
          <i className="fa-solid fa-circle-info mx-2"></i>
          Plus d'infos
        </button>
      </div>
    </div>
  );
}
