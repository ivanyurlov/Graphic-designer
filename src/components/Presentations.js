import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialPresentations } from '../utils/initialPresentations';



function Presentations(props) {
  const location = useLocation();

  return (
    <div className="presentations">
      <section className="description">
        <h2 className="description__title">Презентации</h2>
      </section>
      {location.pathname === "/portfolio/presentations" && <section className="elements" aria-label="Презентации">
        {initialPresentations.map((card) => (
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

export default Presentations;