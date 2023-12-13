import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialIllustrations } from '../utils/initialIllustrations';



function Illustrations(props) {
  const location = useLocation();

  return (
    <div className="illustrations">
      <section className="description">
        <h2 className="description__title">Иллюстрации</h2>
      </section>
      {location.pathname === "/portfolio/illustrations" && <section className="elements" aria-label="Иллюстрации">
        {initialIllustrations.map((card) => (
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

export default Illustrations;