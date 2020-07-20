import React from 'react';
import './style.css'

import CardBootcamp from '../../../components/CardBootcamp'
import Title from "../../../components/Title/Index";

const Bootcamps = ({courses}) => {
    return(
        <section className="" id="bootcamps">
        <h1 className="bootcamps__title" >Bootcamps</h1>
        <div className="bootcampsList">
           {courses.map(({id, company, logo}) => (
                 <CardBootcamp
                  key={id}
                  name={company}
                  logo={logo}
                  id={id}
                  />
           ))}
           </div>
        </section>
    )

}

export default Bootcamps