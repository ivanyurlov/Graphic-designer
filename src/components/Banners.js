import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { initialBanners } from '../utils/initialBanners';



function Banners(props) {
  const location = useLocation();

  return (
    <div className="banners">
      <section className="description">
        <h2 className="description__title">Баннеры</h2>
      </section>
      {location.pathname === "/portfolio/banners" && <section className="elements" aria-label="Баннеры">
        {initialBanners.map((card) => (
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

export default Banners;