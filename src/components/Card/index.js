import React from "react";
import "./style.css";

const Card = ({ name, registrations, note }) => {
  return (
    <article className="card">
      <h2 className="card__title">{name}</h2>
        <p className="card__registrations">Inscrições até: {registrations}</p>
        <p className="card__note"><strong>{note}</strong></p>
    </article>
  );
};

export default Card;
