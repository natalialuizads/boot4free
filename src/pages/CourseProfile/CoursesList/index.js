import React from 'react';
import './style.css'

import Card from '../../../components/Card'

const CoursesList = ({courses}) => {
   return(
       <div className="coursesList">
          {courses.map(({name, registrations, duration,note }) => (
                 <Card
                  key={`${name}--key`}
                  name={name}
                  registrations={registrations}
                  duration={duration}
                  note={note}
                  />
           ))}
       </div>
   )
}

export default CoursesList