import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialBusinessCards } from '../utils/initialBusinessCards';


function BusinessCards(props) {
  const location = useLocation();

  return (
    <div className="business-cards">
      <section className="description">
          <h2 className="description__title">Визитки</h2>
        </section>
      {location.pathname === "/portfolio/cards" && <section className="elements" aria-label="Постеры">
        {initialBusinessCards.map((card) => (
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

export default BusinessCards;