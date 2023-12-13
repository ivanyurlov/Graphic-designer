import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialMarketplaceCards } from '../utils/initialMarketplaceCards';



function MarketplaceCards(props) {
  const location = useLocation();

  return (
    <div className="logos">
      <section className="description">
        <h2 className="description__title">Карточки товара для маркетплейсов</h2>
      </section>
      {location.pathname === "/portfolio/marketplace-cards" && <section className="elements" aria-label="Карточки товара для маркетплейсов">
        {initialMarketplaceCards.map((card) => (
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

export default MarketplaceCards;