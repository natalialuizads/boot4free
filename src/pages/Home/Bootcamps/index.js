import React from "react";
import "./style.css";

import CardBootcamp from "../../../components/CardBootcamp";
import SearchBar from "../../../components/SearchBar/Index";

const Bootcamps = ({ courses, onChange, onClick, value }) => {
  return (
    <section className="bootcamps" id="bootcamps">
      <h1 className="bootcamps__title">Bootcamps</h1>
      
      <div className="searchbar__container">
        <SearchBar 
        onChange={onChange} 
        onClick={onClick} 
        value={value}
        />
      </div>

      <div className="bootcampsList">
        {courses.map(({ id, company, logo }) => (
          <CardBootcamp 
          key={id} 
          name={company} 
          logo={logo} 
          id={id} />
        ))}
      </div>
    </section>
  );
};

export default Bootcamps;
