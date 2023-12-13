import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logosPath from '../images/logo3.jpg';
import identityPath from '../images/identity1.jpg';
import cardsPath from '../images/card1.jpg';
import bannersPath from '../images/banner1.jpg';
import illustrationsPath from '../images/illustration1.jpg';
import invitationsPath from '../images/invitation3.jpg';
import patternsPath from '../images/pattern4.jpg';
import presentationsPath from '../images/presentation1.jpg';
import marketplaceCardPath from '../images/marketplaceCard3.jpg';


function Portfolio(props) {
  const location = useLocation();

  return (
    <div className="portfolio">
      <section className="description">
          <h2 className="description__title">Портфолио</h2>
        </section>
      {location.pathname === "/portfolio" && <ul className="elements" aria-label="Портфолио">
        <li className="element element_change">
          <Link to="/portfolio/logos" className="element__large">
            <img className="element__photo element__photo_change" src={logosPath} alt="Логотипы" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/logos" className="element__title_link">Логотипы</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/identity" className="element__large">
            <img className="element__photo element__photo_change" src={identityPath} alt="Айдентика" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/identity" className="element__title_link">Айдентика</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/cards" className="element__large">
            <img className="element__photo element__photo_change" src={cardsPath} alt="Визитки" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/cards" className="element__title_link">Визитки</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/banners" className="element__large">
            <img className="element__photo element__photo_change" src={bannersPath} alt="Баннеры" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/banners" className="element__title_link">Баннеры</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/illustrations" className="element__large">
            <img className="element__photo element__photo_change" src={illustrationsPath} alt="Иллюстрации" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/illustrations" className="element__title_link">Иллюстрации</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/invitations" className="element__large">
            <img className="element__photo element__photo_change" src={invitationsPath} alt="Пригласительные" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/invitations" className="element__title_link">Пригласительные</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/patterns" className="element__large">
            <img className="element__photo element__photo_change" src={patternsPath} alt="Паттерны" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/patterns"className="element__title_link">Паттерны</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/presentations" className="element__large">
            <img className="element__photo element__photo_change" src={presentationsPath} alt="Презентации" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/presentations" className="element__title_link">Презентации</Link>
          </div>
        </li>
        <li className="element element_change">
          <Link to="/portfolio/marketplace-cards" className="element__large">
            <img className="element__photo element__photo_change" src={marketplaceCardPath} alt="Карточки товара для маркетплейсов" />
          </Link>
          <div className="element__like element__like_change">
            <Link to="/portfolio/marketplace-cards" className="element__title_link">Карточки товара для маркетплейсов</Link>
          </div>
        </li>
      </ul>}
    </div>
  )
}

export default Portfolio;