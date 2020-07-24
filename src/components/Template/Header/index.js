import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="menu__logo">
          <Link to="/" className="">
            Boot4Free
          </Link>
        </div>
        <nav className="nav__menu">
          <ul className="menu">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
