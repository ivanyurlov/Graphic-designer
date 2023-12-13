import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialIdentity } from '../utils/initialIdentity';



function Identity(props) {
  const location = useLocation();

  return (
    <div className="identity">
      <section className="description">
          <h2 className="description__title">Айдентика</h2>
        </section>
      {location.pathname === "/portfolio/identity" && <section className="elements" aria-label="Айдентика">
        {initialIdentity.map((card) => (
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

export default Identity;