import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function BurgerNavBar(props) {
  const location = useLocation();

  return (
    <div className={`burger-nav-bar ${props.isOpen ? "burger-nav-bar_opened" : ""}`}>
      <Link to="/" className="burger-nav-bar__link">Главная</Link>
      {location.pathname !== "/portfolio" && <Link to="/portfolio" className="burger-nav-bar__link">Портфолио</Link>}
      {location.pathname !== "/contacts" && <Link to="/contacts" className="burger-nav-bar__link">Контакты</Link>}
      <button className="burger-nav-bar__button" onClick={props.onAddPlaceClick}>Заявка</button>
      <button className="burger-nav-bar__close-button" onClick={props.onClose}></button>
    </div>
  );
}

export default BurgerNavBar;