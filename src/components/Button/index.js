import React from "react";
import "./style.css";

const Button = ({ className, onClick, icon, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon ? <img src={icon} alt="icone do botão" /> : text}
    </button>
  );
};

export default Button;
