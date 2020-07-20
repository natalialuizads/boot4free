import React from 'react';
import './style.css'

const MainTitle = ({ text, className, link }) => {
    return <h1 className={className}><a href={link}>{text}</a></h1> 
}

export default MainTitle