import React from 'react';
import './style.css'

import Title from '../../../components/Title/Index'

const Profile = ({name, className, description, logo}) => {
   return(
       <div className="card__profile">
            <Title
             text={name}
             className={className}
             />
             <p>{description}</p>
             <img className="logo" src={logo} alt=""></img>
       </div>
   )
}

export default Profile