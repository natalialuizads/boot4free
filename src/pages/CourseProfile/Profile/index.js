import React from 'react';
import './style.css'

import Title from '../../../components/Title/Index'

const Profile = ({name, description, url}) => {
   return(
       <div className="card__profile">
            <Title
             text={name}
             className="profile__title"
             />
             <p className="profile__paragraph">{description}</p>
             <di>
                  <a href={url} target="blank">Acessar Site</a>
              </di>
       </div>
   )
}

export default Profile