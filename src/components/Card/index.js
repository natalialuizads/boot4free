import React from 'react';
import './style.css'

const Card = ({name, registrations, duration,note}) => {
    return(
        <article className="card">
            <h2 className="card__title">{name}</h2>
            <div className="card__infos">
            <p className="card__registrations">{registrations}</p>
            <p className="card__duration">{duration}</p>
            <p className="card__note">{note}</p>
            </div>
        </article>
    )

}

export default Card
