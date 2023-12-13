import React from 'react';


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" key={props.card._id}>
      <div className="element__large">
        <img className="element__photo"
        src={require(`../images/${props.card.link}`)}
        alt={props.card.name} 
        onClick={handleClick} />
      </div>
      <div className="element__like">
        <h2 className="element__title">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default Card;
