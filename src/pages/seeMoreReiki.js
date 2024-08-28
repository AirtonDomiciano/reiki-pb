import React from "react";

import mestra from "../images/mestre-reiki.png";

const SeeMoreReiki = () => {
  // const onClickBack = () => {};

  return (
    <div className="see-more-reiki">
      <div className="card-see">
        <img src={mestra} alt="Foto" />
        <div className="text">
          <h1>Mestra Valéria Schuster</h1>
          <p>
            Boa noite, eu sou a Valeria Aparecida, faço parte da equipe Reiki
            Pato Branco, além de ministrar cursos de Reiki para adultos e
            crianças, atendo com sessões de Reiki e Liberação de memória
            celular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeeMoreReiki;
