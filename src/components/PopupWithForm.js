import closeIcon from "../image/Close-Icon.svg";
import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
      <div className="popup__content">
        <button type="button" onClick={'aaa'} className="popup__close hover">
          <img
            className="popup__close-icon"
            src={closeIcon}
            alt="закрыть"
          />
        </button>
        <form
          method="get"
          name={props.name}
          className="popup__form"
          noValidate=""
        >
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button type="submit" className="popup__button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm