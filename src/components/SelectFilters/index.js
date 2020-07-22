import React from 'react';
import './style.css'

const SelectFilters = ({value, onChange }) =>{
    return(
        <select defaultValue={value} onChange={onChange}>
        <option>Filtro</option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="fullstack">Full Stack</option>
       </select>
    )

}

export default SelectFilters
