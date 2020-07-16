import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

const CardBootcamp = ({name, logo, id}) => {
    return(
        <article className="card">
            <img src={logo}></img>
            <h3>{name}</h3>
            <Link to={`/bootcamps/${id}`}>Saiba Mais</Link>
        </article>
    )

}

export default CardBootcamp
