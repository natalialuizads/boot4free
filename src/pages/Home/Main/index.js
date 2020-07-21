import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

import personas from '../../../assets/images/persons__group.png'
import personWomen from '../../../assets/images/person_sobre.png'
const Main = () => {
  return (
    <section className="main">
      <div className="main__container">
        <div className="main__infos">
        <h1 className="main__title">Procurando <br /> bootcamp?</h1>
      <p className="main__paragraph">
        Aqui você encontra informações dos<br /> bootcamps gratuitos em único lugar.
      </p>
      <Link to="/#bootcamps" className="btn__bootcamp">Buscar Bootcamp </Link>
      </div>
      <img className="about__person__women" src={personWomen} alt="grupo de pessoas"></img>
      </div>
      <div className="main__img">
      <img className="img__desktop" src={personas} alt="grupo de pessoas"></img>
      </div>
     
    </section>
  );
};

export default Main;
