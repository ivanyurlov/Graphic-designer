import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';


function Header(props) {

  return (
    <header className="header">
      <Link to="/"  className="header__logo-overlay">
        <img className="header__logo" src={logoPath} alt="Логотип" />
      </Link>
        <button className={`signin-burger ${props.isOpen ? "signin-burger_hidden" : ""}`} onClick={props.onBurgerNavBar}>
          <span className="signin-burger__item"></span>
        </button>
    </header>
  );
}

export default Header;