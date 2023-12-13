import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialLogos } from '../utils/initialLogos';



function Logos(props) {
  const location = useLocation();

  return (
    <div className="logos">
      <section className="description">
        <h2 className="description__title">Логотипы</h2>
      </section>
      {location.pathname === "/portfolio/logos" && <section className="elements" aria-label="Логотипы">
        {initialLogos.map((card) => (
          <Card
            key = {card._id}
            card = {card}
            onCardClick = {props.onCardClick}
          />
        ))}
      </section>}
    </div>
  )
}

export default Logos;