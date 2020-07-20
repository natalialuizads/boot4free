import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="menu__logo">Boot4Free</div>
        <nav className="nav__menu">
          <ul className="menu">
            <li className="menu__item">
                Sobre
            </li>
            <li className="menu__item">
                Bootcamps
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
