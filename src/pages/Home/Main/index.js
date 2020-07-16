import React from "react";
import "./style.css";

import Title from "../../../components/Title/Index";

const Main = () => {
  return (
    <section>
      <Title text="Procurando bootcamp?" className="main__title" />
      <p className="main__paragraph">
        Aqui você encontra informações dos bootcamps gratuitos em único lugar.
      </p>
      <a href="#bootcamps" className="btn__bootcamp">Buscar Bootcamp</a>
    </section>
  );
};

export default Main;
