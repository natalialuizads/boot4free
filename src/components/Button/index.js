import React from 'react';
import './style.css'

const Button = ({className, onClick}) => {
  return(
        <button 
         className={className} 
         onClick={onClick}>
        </button>
  )
}

export default Button