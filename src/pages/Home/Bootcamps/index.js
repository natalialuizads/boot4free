import React from 'react';
import './style.css'

import CardBootcamp from '../../../components/CardBootcamp'

const Bootcamps = ({courses}) => {
    return(
        <section className="bootcampsList">
           {courses.map(({id, company, logo}) => (
                 <CardBootcamp
                  key={id}
                  name={company}
                  logo={logo}
                  id={id}
                  />
           ))}
        </section>
    )

}

export default Bootcamps