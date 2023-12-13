import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialInvitations } from '../utils/initialInvitations';



function Invitations(props) {
  const location = useLocation();

  return (
    <div className="invitations">
      <section className="description">
        <h2 className="description__title">Пригласительные</h2>
      </section>
      {location.pathname === "/portfolio/invitations" && <section className="elements" aria-label="Пригласительные">
        {initialInvitations.map((card) => (
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

export default Invitations;