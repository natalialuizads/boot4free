import React from 'react';
import './style.css'

const Title = ({ text, className, link }) => {
    return <h1 className={className}><a href={link} target="_blank" rel="noopener noreferrer">{text}</a></h1> 
}

export default Title