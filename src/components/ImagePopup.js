import React from 'react';


function ImagePopup(props) {
  return (
    <div className={`popup popup_large ${props.card.link ? "popup_opened" : ""}`} onClick={props.onClose}>
      <figure className="popup__container popup__container_large" onClick={(evt) => evt.stopPropagation()}>
        <button className="popup__close-button popup__close-button_large" onClick={props.onClose}></button>
        <img className="popup__photo"
        src={props.card.link && require(`../images/${props.card.link}`)}
        alt={props.card.name} />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}


export default ImagePopup;