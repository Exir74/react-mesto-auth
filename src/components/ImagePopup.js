import closeIcon from "../image/Close-Icon.svg";
import React from "react";

function ImagePopup(props){
  return(
    <div className={`popup image-popup ${props.card.isCardPopupOpen ? 'popup_open' : ''}`}>
      <div className="popup__content">
        <button type="button" onClick={props.onClose} className="popup__close hover">
          <img
            className="popup__close-icon"
            src={closeIcon}
            alt="закрыть"
          />
        </button>
        <div className="popup__image">
          <img className="popup__full-image" src={props.card.link} alt={props.card.name}/>
        </div>
        <div className="popup__image-name">
          <p className="popup__image-text">{props.card.name}</p>
        </div>
      </div>
    </div>
  )
}
export default ImagePopup