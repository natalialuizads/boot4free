import React from 'react';
import './style.css'

const input = ({type,placeholder, value, onChange, className}) => {
    return(
           <input 
           type={type} 
           placeholder={placeholder} 
           value={value} 
           onChange={onChange} 
           className={className} />
    )
}

export default input