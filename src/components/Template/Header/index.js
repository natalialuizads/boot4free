import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="menu__logo">Boot4Free</div>
        <nav className="nav__menu">
          <ul className="menu">
           <BrowserRouter>
            <li className="menu__item">
            <Link to="/#about" className="">
                Sobre
             </Link>
            </li>
            <li className="menu__item">
            <Link to="/#bootcamps" className="">
                Bootcamps
             </Link>
            </li>
            </BrowserRouter>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
