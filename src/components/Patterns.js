import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialPatterns } from '../utils/initialPatterns';



function Patterns(props) {
  const location = useLocation();

  return (
    <div className="patterns">
      <section className="description">
        <h2 className="description__title">Паттерны</h2>
      </section>
      {location.pathname === "/portfolio/patterns" && <section className="elements" aria-label="Паттерны">
        {initialPatterns.map((card) => (
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

export default Patterns;