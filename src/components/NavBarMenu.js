import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavBarMenu(props) {
  const location = useLocation();

  return (
    <div className="signin">
      <div className="signin__main">
        <Link to="/" className="signin__link">Главная</Link>
        {location.pathname !== "/portfolio" && <Link to="/portfolio" className="signin__link">Портфолио</Link>}
        {location.pathname !== "/contacts" && <Link to="/contacts" className="signin__link">Контакты</Link>}
        <button className="signin__button" onClick={props.onAddPlaceClick}>Заявка</button>
      </div>
    </div>
  );
}

export default NavBarMenu;
