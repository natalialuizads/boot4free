import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CardBootcamp = ({ name, logo, id }) => {
  return (
    <article className="cardBootcamp">
      <div className="card__image">
        <img className="card__logo" src={logo} alt=""></img>
      </div>
      <div className="card__info">
        <h3 className="cardBootcamp__title">{name}</h3>
        <Link className="btn btn__text" to={`/bootcamps/${id}`}>
          Saiba Mais
        </Link>
      </div>
    </article>
  );
};

export default CardBootcamp;
